#![allow(dead_code)]
#![allow(unused_variables)]

mod once;
mod combinatorics;
mod fp_vector;
mod matrix;
mod algebra;
mod adem_algebra;
mod milnor_algebra;
mod module;
mod module_homomorphism;
mod finite_dimensional_module;
mod free_module;
mod free_module_homomorphism;
mod chain_complex;
mod resolution;
//mod wasm_bindings;

#[cfg(test)]
extern crate rand;

#[macro_use]
extern crate lazy_static;
extern crate enum_dispatch;

extern crate serde_json;

//extern crate wasm_bindgen;
extern crate web_sys;

use crate::algebra::Algebra;
use crate::adem_algebra::AdemAlgebra;
use crate::milnor_algebra::MilnorAlgebra;
// use crate::module::Module;
use crate::finite_dimensional_module::{FiniteDimensionalModule as FDModule, OptionFDModule};
use crate::module_homomorphism::{ZeroHomomorphism}; //ModuleHomomorphism
use crate::chain_complex::{ChainComplexConcentratedInDegreeZero as CCDZ}; // ChainComplex,
use crate::resolution::Resolution;

use std::sync::Arc;
use std::error::Error;
use serde_json::value::Value;

#[derive(Debug)]
struct InvalidAlgebraError {
    name : String
}

impl std::fmt::Display for InvalidAlgebraError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "Invalid algebra: {}", &self.name)
    }
}

impl Error for InvalidAlgebraError {
    fn description(&self) -> &str {
        "Invalid algebra supplied"
    }
}

pub struct AlgebraicObjectsBundle<A : Algebra> {
    algebra : Arc<A>,
    module : Option<Arc<FDModule<A>>>,
    chain_complex : Arc<CCDZ<A, FDModule<A>>>,
    resolution : Box<Resolution<
                    A,
                    OptionFDModule<A>,
                    ZeroHomomorphism<A, OptionFDModule<A>, OptionFDModule<A>>,
                    CCDZ<A, FDModule<A>>
                >>
}

pub fn construct(config : &Config) -> Result<AlgebraicObjectsBundle<MilnorAlgebra>, Box<dyn Error>> {
    let contents = std::fs::read_to_string(format!("static/modules/{}.json", config.module_name))?;
    let mut json : Value = serde_json::from_str(&contents)?;
    let p = json["p"].as_u64().unwrap() as u32;

    // You need a box in order to allow for different possible types implementing the same trait
//    let algebra : Arc<dyn Algebra>;
    let algebra = Arc::new(MilnorAlgebra::new(p));
//    match config.algebra_name.as_ref() {
//        "adem" => algebra = Arc::new(AdemAlgebra::new(p, p != 2, false)),
//        "milnor" => algebra = Arc::new(MilnorAlgebra::new(p)),
//        _ => { return Err(Box::new(InvalidAlgebraError { name : config.algebra_name.clone() })); }
//    };
    let module = Arc::new(FDModule::from_json(Arc::clone(&algebra), &config.algebra_name, &mut json));
    let cc = Arc::new(CCDZ::new(Arc::clone(&module)));
    let res = Box::new(Resolution::new(Arc::clone(&cc), config.max_degree, None, None));

    Ok(AlgebraicObjectsBundle {
        algebra,
        module : Some(module),
        chain_complex: cc,
        resolution: res
    })
}

pub fn run_threaded(config : &Config) -> Result<String, Box<dyn Error>> {
    let bundle = construct(&config)?;
    let res = Arc::new(*bundle.resolution);

    Arc::clone(&res).resolve_through_degree_threaded(config.max_degree);
    Ok(res.graded_dimension_string())
}

pub fn run(config : &Config) -> Result<String, Box<dyn Error>> {
    let bundle = construct(&config)?;
    bundle.resolution.resolve_through_degree(config.max_degree);
    Ok(bundle.resolution.graded_dimension_string())
}

pub struct Config {
    pub module_name : String,
    pub algebra_name : String,
    pub max_degree : i32
}

impl Config {
    pub fn new(args: &[String]) -> Result<Self, String> {
        if args.len() < 4 {
            return Err("Not enough arguments".to_string());
        }
        let module_name = args[1].clone();
        let algebra_name = args[2].clone();
        let max_deg_result : Result<i32,_> = args[3].parse();

        if let Err(error) = max_deg_result {
            return Err(format!("{} in argument max_degree.", error));
        }
        let max_degree = max_deg_result.unwrap();
        Ok(Self { module_name, algebra_name, max_degree })
    }
}
