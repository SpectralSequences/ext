use crate::fp_vector::{FpVector, FpVectorT};
use crate::matrix::Subspace;
use crate::algebra::{Algebra, AlgebraAny};
use crate::module::{Module, ZeroModule, OptionModule};
use crate::module_homomorphism::{ModuleHomomorphism, ZeroHomomorphism};
use std::sync::Arc;

pub enum ChainComplexGrading {
    Homological,
    Cohomological
}

pub trait ChainComplex<M : Module, F : ModuleHomomorphism<M, M>> {
    fn prime(&self) -> u32 {
        self.algebra().prime()
    }

    fn algebra(&self) -> Arc<AlgebraAny>;
    fn min_degree(&self) -> i32;
    fn zero_module(&self) -> Arc<M>;
    fn module(&self, homological_degree : u32) -> Arc<M>;
    fn differential(&self, homological_degree : u32) -> Arc<F>;
    fn compute_through_bidegree(&self, homological_degree : u32, internal_degree : i32);

    fn set_homology_basis(&self, homological_degree : u32, internal_degree : i32, homology_basis : Vec<usize>);
    fn homology_basis(&self, homological_degree : u32, internal_degree : i32) -> &Vec<usize>;
    fn max_homology_degree(&self, homological_degree : u32) -> i32;

    fn max_computed_homological_degree(&self) -> u32;
    fn max_computed_degree(&self) -> i32;

    fn compute_homology_through_bidegree(&self, homological_degree : u32, internal_degree : i32){
        self.compute_through_bidegree(homological_degree + 1, internal_degree);
        for i in 0 ..= homological_degree {
            for j in self.max_homology_degree(i) + 1 ..= internal_degree {
                self.compute_homology(i, j);
            }
        }
    }

    fn homology_dimension(&self, homological_degree : u32, internal_degree : i32) -> usize {
        self.homology_basis(homological_degree, internal_degree).len()
    }

    fn homology_gen_to_cocyle(&self, result : &mut FpVector, coeff : u32, homological_degree : u32, internal_degree : i32, index : usize){
        let row_index = self.homology_basis(homological_degree, internal_degree)[index];
        result.add(&self.differential(homological_degree).kernel(internal_degree).unwrap().matrix[row_index], coeff);
    }

    fn compute_homology(&self, homological_degree : u32, internal_degree : i32){
        self.compute_through_bidegree(homological_degree + 1, internal_degree);
        let d_prev = self.differential(homological_degree);
        let d_cur = self.differential(homological_degree + 1);
        let d_prev_lock = d_prev.lock();
        let d_cur_lock = d_cur.lock();
        d_prev.compute_kernels_and_quasi_inverses_through_degree(&d_prev_lock, internal_degree);
        d_cur.compute_kernels_and_quasi_inverses_through_degree(&d_cur_lock, internal_degree);
        let kernel = d_prev.kernel(internal_degree);
        let image = d_cur.image(internal_degree);
        let homology_basis = Subspace::quotient(kernel, image, d_prev.source().dimension(internal_degree));
        self.set_homology_basis(homological_degree, internal_degree, homology_basis);
    }

    fn graded_dimension_string(&self) -> String {
        let mut result = String::new();
        let min_degree = self.min_degree();
        let max_degree = self.max_computed_degree();
        let max_hom_deg = self.max_computed_homological_degree(); //(max_degree - min_degree) as u32 / (self.prime() + 1); //self.get_max_hom_deg();
        for i in (0 ..= max_hom_deg).rev() {
            let module = self.module(i);
            for j in min_degree + i as i32 ..= max_degree {
                let n = self.homology_dimension(i, j);
                match n {
                    0 => result.push_str("  "),
                    1 => result.push_str("· "),
                    2 => result.push_str(": "),
                    3 => result.push_str("∴ "),
                    4 => result.push_str("⁘ "),
                    5 => result.push_str("⁙ "),
                    _ => result.push_str(&format!("{} ", n))
                }
            }
            result.push_str("\n");
            // If it is empty so far, don't print anything
            if result.trim_start().is_empty() {
                result = String::new();
            }
        }
        return result;
    }
}

pub trait CochainComplex<M : Module, F : ModuleHomomorphism<M, M>> {
    fn prime(&self) -> u32 {
        self.algebra().prime()
    }
    fn algebra(&self) -> Arc<AlgebraAny>;
    fn min_degree(&self) -> i32;
    fn zero_module(&self) -> Arc<M>;
    fn module(&self, homological_degree : u32) -> Arc<M>;
    fn differential(&self, homological_degree : u32) -> Arc<F>;
    fn compute_through_bidegree(&self, homological_degree : u32, degree : i32);

    fn max_computed_homological_degree(&self) -> u32;
    fn max_computed_degree(&self) -> i32;

    fn set_cohomology_basis(&self, homological_degree : u32, internal_degree : i32, homology_basis : Vec<usize>);
    fn cohomology_basis(&self, homological_degree : u32, internal_degree : i32) -> &Vec<usize>;
    fn max_cohomology_degree(&self, homological_degree : u32) -> i32;

    fn compute_cohomology_through_bidegree(&self, homological_degree : u32, internal_degree : i32){
        self.compute_through_bidegree(homological_degree + 1, internal_degree);
        for i in 0 ..= homological_degree {
            for j in self.max_cohomology_degree(i) + 1 ..= internal_degree {
                self.compute_cohomology(i, j);
            }
        }
    }

    fn cohomology_dimension(&self, homological_degree : u32, internal_degree : i32) -> usize {
        self.cohomology_basis(homological_degree, internal_degree).len()
    }

    fn homology_gen_to_cocyle(&self, result : &mut FpVector, coeff : u32, homological_degree : u32, internal_degree : i32, index : usize){
        let row_index = self.cohomology_basis(homological_degree, internal_degree)[index];
        result.add(&self.differential(homological_degree).kernel(internal_degree).unwrap().matrix[row_index], coeff);
    }

    fn compute_cohomology(&self, homological_degree : u32, internal_degree : i32){
        println!("==== {}, {}", homological_degree, internal_degree);
        self.compute_through_bidegree(homological_degree + 1, internal_degree);
        let d_cur = self.differential(homological_degree);
        let d_prev = self.differential(homological_degree + 1);
        let d_prev_lock = d_prev.lock();
        let d_cur_lock = d_cur.lock();
        d_prev.compute_kernels_and_quasi_inverses_through_degree(&d_prev_lock, internal_degree);
        d_cur.compute_kernels_and_quasi_inverses_through_degree(&d_cur_lock, internal_degree);
        let kernel = d_prev.kernel(internal_degree);
        let image = d_cur.image(internal_degree);
        let cohomology_basis = Subspace::quotient(kernel, image, d_prev.source().dimension(internal_degree));
        self.set_cohomology_basis(homological_degree, internal_degree, cohomology_basis);
    }

    fn graded_dimension_string(&self) -> String {
        let mut result = String::new();
        let min_degree = self.min_degree();
        let max_degree = self.max_computed_degree();
        let max_hom_deg = self.max_computed_homological_degree(); //(max_degree - min_degree) as u32 / (self.prime() + 1); //self.get_max_hom_deg();
        for i in (0 ..= max_hom_deg).rev() {
            let module = self.module(i);
            for j in min_degree + i as i32 ..= max_degree {
                let n = self.cohomology_dimension(i, j);
                match n {
                    0 => result.push_str("  "),
                    1 => result.push_str("· "),
                    2 => result.push_str(": "),
                    3 => result.push_str("∴ "),
                    4 => result.push_str("⁘ "),
                    5 => result.push_str("⁙ "),
                    _ => result.push_str(&format!("{} ", n))
                }
            }
            result.push_str("\n");
            // If it is empty so far, don't print anything
            if result.trim_start().is_empty() {
                result = String::new();
            }
        }
        return result;
    }    
}


pub struct ChainComplexConcentratedInDegreeZero<M : Module> {
    module : Arc<OptionModule<M>>,
    zero_module : Arc<OptionModule<M>>,
    d0 : Arc<ZeroHomomorphism<OptionModule<M>, OptionModule<M>>>,
    d1 : Arc<ZeroHomomorphism<OptionModule<M>, OptionModule<M>>>,
    other_ds : Arc<ZeroHomomorphism<OptionModule<M>, OptionModule<M>>>
}

impl<M : Module> ChainComplexConcentratedInDegreeZero<M> {
    pub fn new(module : Arc<M>) -> Self {
        let zero_module_inner = Arc::new(ZeroModule::new(Arc::clone(&module.algebra())));
        let zero_module = Arc::new(OptionModule::Zero(Arc::clone(&zero_module_inner)));
        let some_module = Arc::new(OptionModule::Some(Arc::clone(&module)));
        Self {
            d0 : Arc::new(ZeroHomomorphism::new(Arc::clone(&some_module), Arc::clone(&zero_module), 0)),
            d1 : Arc::new(ZeroHomomorphism::new(Arc::clone(&zero_module), Arc::clone(&some_module), 0)),
            other_ds : Arc::new(ZeroHomomorphism::new(Arc::clone(&zero_module), Arc::clone(&zero_module), 0)),
            module : some_module,
            zero_module
        }
    }
}

impl<M : Module> ChainComplex<OptionModule<M>, ZeroHomomorphism<OptionModule<M>, OptionModule<M>>> for ChainComplexConcentratedInDegreeZero<M> {
    fn algebra(&self) -> Arc<AlgebraAny> {
        self.module.algebra()
    }

    fn set_homology_basis(&self, homological_degree : u32, internal_degree : i32, homology_basis : Vec<usize>){
        unimplemented!()
    }

    fn homology_basis(&self, homological_degree : u32, internal_degree : i32) -> &Vec<usize>{
        unimplemented!()
    }

    fn max_homology_degree(&self, homological_degree : u32) -> i32 {
        unimplemented!()
    }

    fn max_computed_degree(&self) -> i32 {
        unimplemented!()
    }

    fn max_computed_homological_degree(&self) -> u32 {
        unimplemented!()
    }

    fn zero_module(&self) -> Arc<OptionModule<M>>{
        Arc::clone(&self.zero_module)
    }

    fn module(&self, homological_degree : u32) -> Arc<OptionModule<M>> {
        if homological_degree == 0 {
            Arc::clone(&self.module)
        } else {
            Arc::clone(&self.zero_module)
        }
    }

    fn min_degree(&self) -> i32 {
        self.module.min_degree()
    }

    fn differential(&self, homological_degree : u32) -> Arc<ZeroHomomorphism<OptionModule<M>, OptionModule<M>>> {
        match homological_degree {
            0 => Arc::clone(&self.d0),
            1 => Arc::clone(&self.d1),
            _ => Arc::clone(&self.other_ds)
        }
    }

    fn compute_through_bidegree(&self, homological_degree : u32, degree : i32) {
        if homological_degree == 0 {
            self.module.compute_basis(degree);
        }
    }
}
