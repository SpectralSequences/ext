#![allow(unused_imports)]

use std::cmp::max;
use std::sync::{Arc, mpsc};
use std::thread;
use std::marker::PhantomData;

use crate::fp_vector::{FpVector, FpVectorT};
use crate::matrix::{Matrix, Subspace};
use crate::algebra::Algebra;
use crate::module::{Module, ZeroModule};
use crate::free_module::FreeModule;
use crate::module_homomorphism::{ModuleHomomorphism, ZeroHomomorphism};
use crate::free_module_homomorphism::FreeModuleHomomorphism;
use crate::chain_complex::ChainComplex;

pub struct Resolution<A : Algebra, M : Module<A>, F : ModuleHomomorphism<A, M, M>, CC : ChainComplex<A, M, F>> {
    complex : Arc<CC>,
    modules : Vec<Arc<FreeModule<A>>>,
    zero_module : Arc<FreeModule<A>>,
    chain_maps : Vec<FreeModuleHomomorphism<A, M>>,    
    differentials : Vec<FreeModuleHomomorphism<A, FreeModule<A>>>,
    phantom : PhantomData<F>,

    max_degree : i32,
    add_class : Option<Box<dyn Fn(u32, i32, &str) + Sync + Send>>,
    add_structline : Option<Box<dyn Fn(
        &str,
        u32, i32, usize, 
        u32, i32, usize
    ) + Sync + Send>>
}
impl<A, M, F, CC> Resolution<A, M, F, CC> where 
    A : Algebra + Sync + Send + 'static,
    M : Module<A> + Sync + Send + 'static,
    F : ModuleHomomorphism<A, M, M> + Sync + Send + 'static,
    CC : ChainComplex<A, M, F> + Sync + Send + 'static {
    pub fn resolve_through_degree_threaded(self : Arc<Self>, degree : i32){
        self.get_algebra().compute_basis(degree);
        let min_degree = self.get_min_degree();
        let max_hom_deg = self.get_max_hom_deg();
        let zero_module_max_degree = { *self.zero_module.max_degree.lock().unwrap() };
        for i in zero_module_max_degree + 1 ..= degree {
            let (lock, table) = self.zero_module.construct_table(i);
            self.zero_module.add_generators(i, lock, table, 0)
        }
        self.get_complex().compute_through_bidegree(max_hom_deg, degree);

        let (sender1, receiver1) = mpsc::channel();
        let (sender2, receiver2) = mpsc::channel();

        let clone = Arc::clone(&self);
        let mut handles = Vec::new();
        handles.push(thread::spawn(move || {
            for s in 0 .. max_hom_deg {
                clone.step(s, min_degree);
                sender2.send((s, min_degree + 1)).ok();
            }
            for (s, t) in receiver1 {
                if t as i32 >= degree {
                    break;
                }
                clone.step(s, t);
                sender2.send((s, t + 1)).ok();
            }
        }));
        let clone = Arc::clone(&self);
        handles.push(thread::spawn(move|| {
            for (s, t) in receiver2 {
                if t as i32 >= degree {
                    break;
                }
                clone.step(s, t);
                sender1.send((s, t + 1)).ok();
            }
        }));
        for handle in handles  {
            handle.join().unwrap();
        }
    }
}

impl<A, M, F, CC> Resolution<A, M, F, CC> where 
    A : Algebra,
    M : Module<A>,
    F : ModuleHomomorphism<A, M, M>,
    CC : ChainComplex<A, M, F> {
    pub fn new(
        complex : Arc<CC>, max_degree : i32,
        add_class : Option<Box<dyn Fn(u32, i32, &str) + Sync + Send>>,
        add_structline : Option<Box<dyn Fn(
            &str,
            u32, i32, usize, 
            u32, i32, usize
        ) + Sync + Send>>
    ) -> Self {
        let algebra = complex.get_algebra();
        let min_degree = complex.get_min_degree();

        let zero_module = Arc::new(FreeModule::new(Arc::clone(&algebra), "F_{-1}".to_string(), min_degree));

        assert!(max_degree >= min_degree);
        let num_degrees = (max_degree - min_degree) as usize;
        let mut modules = Vec::with_capacity(num_degrees);          
        for i in 0..num_degrees {
            modules.push(Arc::new(FreeModule::new(Arc::clone(&algebra), format!("F{}", i), min_degree)));
        }

        let mut differentials = Vec::with_capacity(num_degrees);
        let mut chain_maps = Vec::with_capacity(num_degrees);                
        for i in 0..num_degrees {
            chain_maps.push(FreeModuleHomomorphism::new(Arc::clone(&modules[i]), Arc::clone(&complex.get_module(i as u32)), min_degree, 0, max_degree));
        }
        differentials.push(FreeModuleHomomorphism::new(Arc::clone(&modules[0]), Arc::clone(&zero_module), min_degree, 0, max_degree));

        for i in 1..num_degrees {
            differentials.push(FreeModuleHomomorphism::new(Arc::clone(&modules[i]), Arc::clone(&modules[i-1]), min_degree, 0, max_degree));
        }

        Self {
            complex,
            chain_maps,

            modules,
            zero_module,
            differentials,
            phantom : PhantomData,

            max_degree,
            add_class,
            add_structline,
        }
    }

    pub fn get_max_degree(&self) -> i32 {
        self.max_degree
    }

    pub fn get_max_hom_deg(&self) -> u32 {
        (self.get_max_degree() - self.get_min_degree()) as u32
    }
    
    pub fn get_complex(&self) -> Arc<CC> {
        Arc::clone(&self.complex)
    }

    pub fn get_module(&self, homological_degree : u32) -> Arc<FreeModule<A>> {
        Arc::clone(&self.modules[homological_degree as usize])
    }


    fn get_chain_map(&self, homological_degree : u32) -> &FreeModuleHomomorphism<A, M> {
        &self.chain_maps[homological_degree as usize]
    }

    pub fn get_cocycle_string(&self, hom_deg : u32, int_deg : i32, idx : usize) -> String {
        let p = self.get_prime();
        let d = self.get_differential(hom_deg);
        let source = self.get_module(hom_deg);
        let target = d.get_target();
        let dimension = target.get_dimension(int_deg);
        let basis_idx = source.operation_generator_to_index(0, 0, int_deg, idx);
        let mut result_vector = crate::fp_vector::FpVector::new(p, dimension, 0);
        d.apply_to_basis_element(&mut result_vector, 1, int_deg, basis_idx);
        return target.element_to_string(int_deg, &result_vector);
    }


    pub fn resolve_through_degree(&self, degree : i32){
        self.get_algebra().compute_basis(degree);
        let min_degree = self.get_min_degree();
        let max_hom_deg = self.get_max_hom_deg();
        let zero_module_max_degree = { *self.zero_module.max_degree.lock().unwrap() };
        for i in zero_module_max_degree + 1 .. degree {
            let (lock, table) = self.zero_module.construct_table(i);
            self.zero_module.add_generators(i, lock, table, 0)
        }
        self.get_complex().compute_through_bidegree(max_hom_deg, degree);
        for int_deg in min_degree .. degree {
            for hom_deg in 0 .. max_hom_deg { // int_deg as u32 + 1 {
                // println!("(hom_deg : {}, int_deg : {})", hom_deg, int_deg);
                self.step(hom_deg, int_deg);
            }
        }
    }

    pub fn step(&self, homological_degree : u32, degree : i32){
        // if homological_degree == 0 {
        //     let dminus1 = self.get_differential(0);
        //     let module = self.get_complex().get_module(0);
        //     let module_dim = module.get_dimension(degree);
        //     let subspace = Subspace::entire_space(self.get_prime(), module_dim);
        //     dminus1.set_kernel(degree, subspace);
        // }

        self.generate_old_kernel_and_compute_new_kernel(homological_degree, degree);
        let module = self.get_module(homological_degree);
        let num_gens = module.get_number_of_gens_in_degree(degree);
        if let Some(f) = &self.add_class {
            for i in 0..num_gens {
                f(homological_degree, degree, &format!("{}", i));
            }
        }
        if let Some(_) = &self.add_structline {
            for i in 0..num_gens {
                self.compute_filtration_one_products(homological_degree, degree, i);
            }
        }
    }

    fn compute_filtration_one_products(&self, homological_degree : u32, degree : i32, source_idx : usize){
        if homological_degree == 0 {
            return;
        }
        if let Some(add_structline) = &self.add_structline {
            let d = self.get_differential(homological_degree);
            let target = self.get_module(homological_degree - 1);
            let dx = d.get_output(degree, source_idx);
            for (op_name, op_degree, op_index) in self.get_algebra().get_filtration_one_products() {
                let gen_degree = degree - op_degree;

                if gen_degree < self.get_min_degree(){
                    break;
                }

                let num_target_generators = target.get_number_of_gens_in_degree(gen_degree);
                for target_idx in 0 .. num_target_generators {
                    let vector_idx = target.operation_generator_to_index(op_degree, op_index, gen_degree, target_idx);
                    if vector_idx >= dx.get_dimension() {
                        // println!("Out of bounds index when computing product:");
                        // println!("  ==  degree: {}, hom_deg: {}, dim: {}, idx: {}", degree, homological_degree, dx.dimension, vector_idx);
                    } else {
                        // printf("hom_deg: %d, deg: %d, source_idx: %d, op_deg: %d, entry: %d\n", homological_degree, degree, source_idx, op_degree, Vector_getEntry(dx, vector_idx));
                        if dx.get_entry(vector_idx) != 0 {
                            // There was a product!
                            add_structline(op_name, homological_degree - 1, gen_degree, target_idx, homological_degree, degree, source_idx);
                        }
                    }
                }
            }
        }
    }    

    // pub fn set_empty(&self, homological_degree : u32, degree : i32){
    //     let current_differential = self.get_differential(homological_degree);
    //     let source = current_differential.source;
    //     let source_module_table = source.construct_table(degree);
    // }

    pub fn generate_old_kernel_and_compute_new_kernel(&self, homological_degree : u32, degree : i32){
        let min_degree = self.get_min_degree();
        // println!("====hom_deg : {}, int_deg : {}", homological_degree, degree);
        let degree_idx = (degree - min_degree) as usize;
        let p = self.get_prime();
        let current_differential = self.get_differential(homological_degree);
        let current_chain_map = self.get_chain_map(homological_degree);
        let complex = self.get_complex();
        let complex_cur_differential = complex.get_differential(homological_degree);
        let source = &current_differential.get_source();
        let target_cc = &current_chain_map.get_target();
        let target_res = &current_differential.get_target();
        let (source_lock, source_module_table) = source.construct_table(degree);
        let mut chain_map_lock = current_chain_map.get_lock();
        let mut differential_lock = current_differential.get_lock();
        let source_dimension = source.get_dimension_with_table(degree, &source_module_table);
        let target_cc_dimension = target_cc.get_dimension(degree);
        let target_res_dimension = target_res.get_dimension(degree);
        let target_dimension = target_cc_dimension + target_res_dimension;
        // The Homomorphism matrix has size source_dimension x target_dimension, but we are going to augment it with an
        // identity matrix so that gives a matrix with dimensions source_dimension x (target_dimension + source_dimension).
        // Later we're going to write into this same matrix an isomorphism source/image + new vectors --> kernel
        // This has size target_dimension x (2*target_dimension).
        // This latter matrix may be used to find a preimage of an element under the differential.

        // Pad the target dimension so that it ends in an aligned position.
        let padded_target_cc_dimension = FpVector::get_padded_dimension(p, target_cc_dimension, 0);
        let padded_target_res_dimension = FpVector::get_padded_dimension(p, target_res_dimension, 0);
        let padded_target_dimension = padded_target_res_dimension + padded_target_cc_dimension;
        let rows = max(source_dimension, target_dimension);
        let columns = padded_target_dimension + source_dimension + rows;
        let mut matrix = Matrix::new(p, rows, columns);
        matrix.set_slice(0, source_dimension, 0, padded_target_dimension + source_dimension);
        current_chain_map.get_matrix_with_table(&mut matrix, &source_module_table, degree, 0, 0);
        current_differential.get_matrix_with_table(&mut matrix, &source_module_table, degree, 0, padded_target_cc_dimension);
        for i in 0 .. source_dimension {
            matrix[i].set_entry(padded_target_dimension + i, 1);
        }
        // println!("{}", matrix);
        // println!("     rows: {}, cols: {}", matrix.get_rows(), matrix.get_columns());

        let mut pivots = vec![-1;matrix.get_columns()];
        matrix.row_reduce(&mut pivots);

        let kernel = matrix.compute_kernel(&pivots, padded_target_dimension);
        let kernel_rows = kernel.matrix.get_rows();
        current_differential.set_kernel(&differential_lock, degree, kernel);

        matrix.clear_slice();
        // Now add generators to hit kernel of previous differential. 
        let first_new_row = source_dimension - kernel_rows;        
        let new_generators = matrix.extend_to_surjection(first_new_row, 0, target_cc_dimension, &pivots);
        let mut num_new_gens = new_generators.len();
        // We stored the kernel rows somewhere else so we're going to write over them.
        // Add new free module generators to hit basis for previous kernel
        if homological_degree > 0 {
            let prev_differential = self.get_differential(homological_degree - 1);
            let prev_chain_map = self.get_chain_map(homological_degree - 1);
            let maybe_quasi_inverse = prev_chain_map.get_quasi_inverse(degree);
            if let Some(quasi_inverse) = maybe_quasi_inverse {
                let mut out_vec = FpVector::new(self.get_prime(), target_res_dimension, 0);
                let dfx_dim = complex_cur_differential.get_target().get_dimension(degree);
                let mut dfx = FpVector::new(self.get_prime(), target_res_dimension, 0);
                for (i, column) in new_generators.iter().enumerate() {
                    complex_cur_differential.apply_to_basis_element(&mut dfx, 1, degree, *column);
                    quasi_inverse.apply(&mut out_vec, 1, &dfx);
                    let out_row = &mut matrix[first_new_row + i];
                    out_row.set_slice(padded_target_cc_dimension, padded_target_cc_dimension + target_res_dimension);
                    out_row.assign(&out_vec);
                    dfx.set_to_zero();
                    out_vec.set_to_zero();
                }
            }
        }
        if homological_degree > 0 {     
            let prev_differential = self.get_differential(homological_degree - 1);
            let prev_res_cycles = prev_differential.get_kernel(degree);
            num_new_gens += matrix.extend_image(first_new_row, padded_target_cc_dimension, padded_target_cc_dimension + target_res_dimension, &pivots, prev_res_cycles).len();
        }
        source.add_generators(degree, source_lock, source_module_table, num_new_gens);
        current_chain_map.add_generators_from_matrix_rows(&chain_map_lock, degree, &mut matrix, first_new_row, 0, num_new_gens);
        current_differential.add_generators_from_matrix_rows(&differential_lock, degree, &mut matrix, first_new_row, padded_target_cc_dimension, num_new_gens);

        // The part of the matrix that contains interesting information is occupied_rows x (target_dimension + source_dimension + kernel_size).
        let image_rows = first_new_row + num_new_gens;
        for i in first_new_row .. image_rows {
            matrix[i].set_entry(padded_target_dimension + i, 1);
        }


        matrix.set_slice(0, image_rows, 0, padded_target_dimension + image_rows); 
        let mut new_pivots = vec![-1;matrix.get_columns()];
        matrix.row_reduce(&mut new_pivots);
        // println!("{}", matrix);
        let (cm_qi, res_qi) = matrix.compute_quasi_inverses(
            &new_pivots, 
            padded_target_cc_dimension, 
            padded_target_cc_dimension + target_res_dimension,
            padded_target_dimension
        );
        current_chain_map.set_quasi_inverse(&chain_map_lock, degree, cm_qi);
        current_differential.set_quasi_inverse(&differential_lock, degree, res_qi);
        *chain_map_lock += 1;
        *differential_lock += 1;
    }

    pub fn graded_dimension_string(&self) -> String {
        let mut result = String::new();
        let min_degree = self.get_min_degree();
        let max_degree = self.get_max_degree();
        let max_hom_deg = (max_degree - min_degree) as u32 / (self.get_prime() + 1); //self.get_max_hom_deg();
        for i in (0 .. max_hom_deg).rev() {
            let module = self.get_module(i);
            for j in min_degree + i as i32 .. max_degree {
                let n = module.get_number_of_gens_in_degree(j);
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


impl<A : Algebra, M : Module<A>, F : ModuleHomomorphism<A, M, M>, CC : ChainComplex<A, M, F>> 
    ChainComplex<A, FreeModule<A>, FreeModuleHomomorphism<A, FreeModule<A>>> 
    for Resolution<A, M, F, CC>
{
    fn get_algebra(&self) -> Arc<A> {
        self.get_complex().get_algebra()
    }

    fn get_module(&self, homological_degree : u32) -> Arc<FreeModule<A>> {
        self.get_module(homological_degree)
    }

    fn get_min_degree(&self) -> i32 {
        self.get_complex().get_min_degree()
    }

    fn get_differential(&self, homological_degree : u32) -> &FreeModuleHomomorphism<A, FreeModule<A>> {
        &self.differentials[homological_degree as usize]
    }

    // TODO: implement this.
    fn compute_through_bidegree(&self, hom_deg : u32, int_deg : i32) {

    }

    // fn computed_through_bidegree_q(&self, hom_deg : u32, int_deg : i32) -> bool {
    //     self.res_inner.rent(|res_homs| {
    //         res_homs.differentials.len() > hom_deg 
    //             && res_homs.differentials[hom_deg as usize].
    //     })
    // }
}

use crate::finite_dimensional_module::{FiniteDimensionalModule, OptionFDModule};
use crate::chain_complex::ChainComplexConcentratedInDegreeZero;
pub type FDModuleResolution<A>
    = Resolution<
        A, 
        OptionFDModule<A>,
        ZeroHomomorphism<A, OptionFDModule<A>, OptionFDModule<A>>, 
        ChainComplexConcentratedInDegreeZero<A, FiniteDimensionalModule<A>>
    >;
