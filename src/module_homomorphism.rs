use std::sync::{Mutex, MutexGuard};
use std::sync::Arc;
use std::marker::PhantomData;

use crate::fp_vector::{FpVector, FpVectorT};
use crate::matrix::{Matrix, Subspace, QuasiInverse};
use crate::module::Module;
use crate::algebra::Algebra;

pub trait ModuleHomomorphism<A : Algebra, S : Module<A>, T : Module<A>> {
    fn get_source(&self) -> Arc<S>;
    fn get_target(&self) -> Arc<T>;

    fn get_min_degree(&self) -> i32 {
        self.get_source().get_min_degree()
    }

    fn apply_to_basis_element(&self, result : &mut FpVector, coeff : u32, input_degree : i32, input_idx : usize);
    
    fn get_prime(&self) -> u32 {
        self.get_source().get_prime()
    }

    fn get_lock(&self) -> MutexGuard<i32>;

    fn set_kernel(&self, lock : &MutexGuard<i32>, degree : i32, kernel : Subspace);
    fn get_kernel(&self, degree : i32) -> Option<&Subspace>;

    fn set_quasi_inverse(&self, lock : &MutexGuard<i32>, degree : i32, kernel : QuasiInverse);    
    fn get_quasi_inverse(&self, degree : i32) -> Option<&QuasiInverse>;

    fn get_image(&self, degree : i32) -> Option<&Subspace> {
        let option_quasi_inverse = self.get_quasi_inverse(degree);
        return option_quasi_inverse.and_then(|quasi_inverse| quasi_inverse.image.as_ref() );
    }
    // fn get_image_pivots(&self, degree : i32) -> Option<&Vec<isize>> {
    //     let image = self.get_image(degree);
    //     return image.map(|subspace| &subspace.column_to_pivot_row );
    // }
    
    fn get_matrix(&self, matrix : &mut Matrix, degree : i32, start_row : usize, start_column : usize) -> (usize, usize) {
        let source_dimension = self.get_source().get_dimension(degree);
        let target_dimension = self.get_target().get_dimension(degree);
        assert!(source_dimension <= matrix.get_rows());
        assert!(target_dimension <= matrix.get_columns());
        for input_idx in 0 .. source_dimension {
            // Writing into slice.
            // Can we take ownership from matrix and then put back? 
            // If source is smaller than target, just allow add to ignore rest of input would work here.
            let output_vector = &mut matrix[start_row + input_idx];
            output_vector.set_slice(start_column, start_column + target_dimension);
            self.apply_to_basis_element(output_vector, 1, degree, input_idx);
            output_vector.clear_slice();
        }
        return (start_row + source_dimension, start_column + target_dimension);
    }    
}

// Maybe we should use static dispatch here? This would also get rid of a bunch of casting.
pub struct ZeroHomomorphism<A : Algebra, S : Module<A>, T : Module<A>> {
    source : Arc<S>,
    target : Arc<T>,
    phantom : PhantomData<A>,
    max_degree : Mutex<i32>
}

impl<A : Algebra, S : Module<A>, T : Module<A>> ZeroHomomorphism<A, S, T> {
    pub fn new(source : Arc<S>, target : Arc<T>) -> Self {
        let max_degree =  Mutex::new(source.get_min_degree() - 1);
        ZeroHomomorphism {
            source,
            target,
            phantom : PhantomData,
            max_degree
        }
    }
}

impl<A : Algebra, S : Module<A>, T : Module<A>> ModuleHomomorphism<A, S, T> for ZeroHomomorphism<A, S, T> {
    fn get_source(&self) -> Arc<S> {
        Arc::clone(&self.source)
    }

    fn get_target(&self) -> Arc<T> {
        Arc::clone(&self.target)
    }

    fn apply_to_basis_element(&self, _result : &mut FpVector, _coeff : u32, _input_degree : i32, _input_idx : usize){}

    fn get_lock(&self) -> MutexGuard<i32> {
        self.max_degree.lock().unwrap()
    }

    fn set_kernel(&self, lock : &MutexGuard<i32>, degree : i32, kernel : Subspace){}
    fn get_kernel(&self, degree : i32) -> Option<&Subspace> { None }

    fn set_quasi_inverse(&self, lock : &MutexGuard<i32>, degree : i32, kernel : QuasiInverse){}    
    fn get_quasi_inverse(&self, degree : i32) -> Option<&QuasiInverse>{ None }
}
