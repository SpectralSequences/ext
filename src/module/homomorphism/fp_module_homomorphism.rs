use std::sync::Arc;

use fp::vector::{FpVector, FpVectorT};
use fp::matrix::{Matrix, Subspace, QuasiInverse};
use crate::module::{Module, FPModule, FreeModule};
use crate::module::homomorphism::{ModuleHomomorphism, FreeModuleHomomorphism, ZeroHomomorphism, IdentityHomomorphism};

pub struct FPModuleHomomorphism<N: FPModuleT, M : Module> {
    source : Arc<N>,
    underlying_map : Arc<FreeModuleHomomorphism<M>>
}

impl<N : FPModuleT, M : Module> ModuleHomomorphism for FPModuleHomomorphism<N, M> {
    type Source = N;
    type Target = M;

    fn source(&self) -> Arc<Self::Source> {
        Arc::clone(&self.source)
    }

    fn target(&self) -> Arc<Self::Target> {
        self.underlying_map.target()
    }

    fn degree_shift(&self) -> i32 {
        self.underlying_map.degree_shift()
    }

    fn apply_to_basis_element(&self, result : &mut FpVector, coeff : u32, input_degree : i32, input_index : usize){
        let idx = self.source.fp_idx_to_gen_idx(input_degree, input_index);
        self.underlying_map.extend_by_zero_safe(input_degree);
        self.underlying_map.apply_to_basis_element(result, coeff, input_degree, idx);
    }

    fn quasi_inverse(&self, degree : i32) -> &QuasiInverse {
        &self.underlying_map.quasi_inverse[degree]
    }

    fn kernel(&self, degree : i32) -> &Subspace {
        &self.underlying_map.kernel[degree]
    }

    fn compute_kernels_and_quasi_inverses_through_degree(&self, degree : i32) {
        let _lock = self.underlying_map.lock();

        let kernel_len = self.underlying_map.kernel.len();
        let qi_len = self.underlying_map.quasi_inverse.len();
        assert_eq!(kernel_len, qi_len);
        for i in kernel_len ..= degree {
            let (kernel, qi) = self.kernel_and_quasi_inverse(i);
            self.underlying_map.kernel.push(kernel);
            self.underlying_map.quasi_inverse.push(qi);
        }
    }
}

impl<N: FPModuleT, M : Module> ZeroHomomorphism<N, M> for FPModuleHomomorphism<N, M> {
    fn zero_homomorphism(source : Arc<N>, target : Arc<M>, degree_shift : i32) -> Self {
        let underlying_map = Arc::new(FreeModuleHomomorphism::new(Arc::clone(source.generators()), target, degree_shift));
        FPModuleHomomorphism {
            source, underlying_map
        }
    }
}

impl<N: FPModuleT> IdentityHomomorphism<N> for FPModuleHomomorphism<N, N> {
    fn identity_homomorphism(source : Arc<N>) -> Self {
        let p = source.prime();
        let source_gen = source.generators();

        let underlying_map = Arc::new(FreeModuleHomomorphism::new(Arc::clone(source_gen), Arc::clone(&source), 0));
        let lock = underlying_map.lock();
        for t in source_gen.min_degree()..= source_gen.max_computed_degree() {
            let num_gens = source_gen.number_of_gens_in_degree(t);
            if num_gens == 0 {
                underlying_map.extend_by_zero(&lock, t);
                continue;
            }

            let dim = source.dimension(t);
            let mut matrix = Matrix::new(p, num_gens, dim);
            let offset = source_gen.generator_offset(t, t, 0);
            for j in 0 .. num_gens {
                let idx = source.gen_idx_to_fp_idx(t, offset + j);
                if idx >= 0 {
                    matrix[j].set_entry(idx as usize, 1);
                }
            }
            underlying_map.add_generators_from_matrix_rows(&lock, t, &matrix);
        }
        drop(lock);

        FPModuleHomomorphism {
            source, underlying_map
        }
    }
}

pub trait FPModuleT : Module {
    fn gen_idx_to_fp_idx(&self, degree : i32, index : usize) -> isize;
    fn fp_idx_to_gen_idx(&self, degree : i32, index : usize) -> usize;
    fn generators(&self) -> &Arc<FreeModule>;
}

impl FPModuleT for FPModule {
    fn fp_idx_to_gen_idx(&self, degree : i32, index : usize) -> usize {
        self.fp_idx_to_gen_idx(degree, index)
    }
    fn gen_idx_to_fp_idx(&self, degree : i32, index : usize) -> isize {
        self.gen_idx_to_fp_idx(degree, index)
    }

    fn generators(&self) -> &Arc<FreeModule> {
        &self.generators
    }
}
