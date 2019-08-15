use crate::matrix::{Subspace, Matrix};
use crate::fp_vector::{FpVector, FpVectorT};
use std::collections::HashMap;
use std::cmp::max;
use bivec::BiVec;

const MIN_PAGE : i32 = 2;

pub struct Differential {
    matrix : Matrix,
    source_dim : usize,
    target_dim : usize,
    column_to_pivots_row : Vec<isize>,
}

impl Differential {
    pub fn new(p : u32, source_dim : usize, target_dim : usize) -> Self {
        Differential {
            matrix : Matrix::new(p, source_dim + 1, source_dim + target_dim),
            source_dim,
            target_dim,
            column_to_pivots_row : vec![-1; source_dim + target_dim]
        }
    }

    pub fn add(&mut self, source : &FpVector, target : Option<&FpVector>) {
        for i in 0 .. self.source_dim {
            self.matrix[self.source_dim].set_entry(i, source.get_entry(i));
        }
        for i in 0 .. self.target_dim {
            match target {
                Some(t) => self.matrix[self.source_dim].set_entry(i + self.source_dim, t.get_entry(i)),
                None => self.matrix[self.source_dim].set_entry(i + self.source_dim, 0)
            };
        }
        self.matrix.row_reduce(&mut self.column_to_pivots_row);

        // Check that the differentials are consistent with each other.
        // TODO: Make this mark an error instead of panic.
        for i in 0 .. self.target_dim {
            assert!(self.column_to_pivots_row[self.source_dim + i] < 0);
        }
    }

    /// This evaluates the differential on `source`, adding the result to `target`. This assumes
    /// all unspecified differentials are zero. More precisely, it assumes every non-pivot column
    /// of the differential matrix has zero differential. This may or may not be actually true
    /// (e.g. if we only know d(a + b) = c, it might be that d(a) = c and d(b) = 0, or vice versa,
    /// or neither. Here we assume d(a) = c and d(b) = 0.
    pub fn evaluate(&self, mut source : FpVector, target: &mut FpVector) {
        for i in 0 .. self.source_dim {
            let row = self.column_to_pivots_row[i];
            if row < 0 {
                continue;
            }
            let row = row as usize;

            let c = source.get_entry(i);
            if c == 0 {
                continue;
            }
            for j in 0 .. self.target_dim {
                target.add_basis_element(j, c * self.matrix[row].get_entry(self.source_dim + j));
            }
            for j in 0 .. self.source_dim {
                source.add_basis_element(j, (self.prime() - 1) * c * self.matrix[row].get_entry(j));
            }
        }
    }

    pub fn prime(&self) -> u32 {
        self.matrix.prime()
    }
}

pub struct Product {
    name : String,
    x : i32,
    y : i32,
    differential : Option<(i32, Matrix)>, // page and matrix of the differential, if any
    matrices : BiVec<BiVec<Matrix>>
}

pub struct Sseq {
    p : u32,
    min_x : i32,
    min_y : i32,

    product_name_to_index : HashMap<String, usize>,
    products : Vec<Product>,
    classes : BiVec<BiVec<usize>>, // x -> y -> number of elements
    differentials : BiVec<BiVec<BiVec<Differential>>>, // x -> y -> r -> differential
    permanent_classes : BiVec<BiVec<Subspace>>, // x -> y -> r -> permanent classes
    zeros : BiVec<BiVec<BiVec<Subspace>>>, // x -> y -> r -> subspace of elements that are zero on page r
    pub page_classes : BiVec<BiVec<BiVec<Vec<FpVector>>>>, // x -> y -> r -> list of generators on the page.
    pub page_differentials : BiVec<BiVec<BiVec<Vec<FpVector>>>>, // x -> y -> r -> list of d(x_i), where x_i is ith basis element in the list in page_classes.
}

impl Sseq {
    pub fn new(p : u32, min_x : i32, min_y : i32) -> Self {
        let mut classes = BiVec::new(min_x - 1); // We have an extra column to the left so that differentials have something to hit.
        classes.push(BiVec::new(min_y));
        Self {
            p,
            min_x,
            min_y,

            product_name_to_index : HashMap::new(),
            products : Vec::new(),
            classes,
            permanent_classes : BiVec::new(min_x),
            differentials : BiVec::new(min_x),
            page_classes : BiVec::new(min_x),
            page_differentials : BiVec::new(min_x),
            zeros : BiVec::new(min_x)
        }
    }

    /// This function should only be called when everything to the left and bottom of (x, y)
    /// has been defined.
    pub fn set_class(&mut self, x : i32, y : i32, num : usize) {
        if x == self.min_x {
            self.classes[self.min_x - 1].push(0);
        }
        if x == self.classes.len() {
            self.classes.push(BiVec::new(self.min_y));
            self.permanent_classes.push(BiVec::new(self.min_y));
        }
        assert_eq!(self.classes[x].len(), y);
        assert_eq!(self.permanent_classes[x].len(), y);
        self.classes[x].push(num);
        self.permanent_classes[x].push(Subspace::new(self.p, num + 1, num));

        // To avoid upsetting borrow checker
        let min_y = self.min_y;

        self.differentials.extend_with(x, |_| BiVec::new(min_y));
        self.differentials[x].extend_with(y, |_| BiVec::new(MIN_PAGE));

        self.zeros.extend_with(x, |_| BiVec::new(min_y));
        self.zeros[x].extend_with(y, |_| BiVec::new(MIN_PAGE));

        self.page_classes.extend_with(x, |_| BiVec::new(min_y));
        self.page_classes[x].extend_with(y, |_| BiVec::new(MIN_PAGE));

        self.page_differentials.extend_with(x, |_| BiVec::new(min_y));
        self.page_differentials[x].extend_with(y, |_| BiVec::new(MIN_PAGE));
    }

    /// Initializes `differentials[x][y][r]`. It sets the differentials of all known permament
    /// classes to 0.
    fn allocate_differential_matrix(&mut self, r : i32, x : i32, y : i32) {
        let source_dim = self.classes[x][y];
        let target_dim = self.classes[x - 1][y + r];
        let p = self.p;
        let mut d = Differential::new(p, source_dim, target_dim);
        for vec in self.permanent_classes[x][y].get_basis() {
            d.add(vec, None);
        }
        self.differentials[x][y].push(d);
    }

    fn allocate_zeros_subspace(&mut self, r : i32, x : i32, y : i32) {
        let subspace;
        if r == MIN_PAGE {
            let dim = self.classes[x][y];
            subspace = Subspace::new(self.p, dim + 1, dim);
        } else {
            subspace = self.zeros[x][y][r - 1].clone();
        }
        self.zeros[x][y].push(subspace);
    }

    /// Add a differential starting at (x, y)
    ///
    /// Panics if the target of the differential is not yet defined
    pub fn add_differential(&mut self, r : i32, x : i32, y : i32, source : &FpVector, target : &FpVector) {
        assert_eq!(source.get_dimension(), self.classes[x][y], "length of source vector not equal to dimension of source");
        assert_eq!(target.get_dimension(), self.classes[x - 1][y + r], "length of target vector not equal to dimension of target");

        // We cannot use extend_with here because of borrowing rules.
        if self.differentials[x][y].len() <= r {
            for r_ in self.differentials[x][y].len() ..= r {
                self.allocate_differential_matrix(r_, x, y);
            }
        }

        let source_dim = self.classes[x][y];

        self.differentials[x][y][r].add(source, Some(target));
        for i in MIN_PAGE .. r {
            self.differentials[x][y][i].add(source, None)
        }

        if self.zeros[x - 1][y + r].len() <= r + 1 {
            for r_ in self.zeros[x - 1][y + r].len() ..= r + 1 {
                self.allocate_zeros_subspace(r_, x - 1, y + r);
            }
        }

        for i in r + 1 .. self.zeros[x - 1][y + r].len() {
            self.zeros[x - 1][y + r][i].add_vector(target);
        }
        // set_permanent_class in turn sets the differentials on the targets of the differentials
        // to 0.
        self.set_permanent_class(x - 1, y + r, target);
    }

    /// This function recursively propagates differentials. If this function is called, it will add
    /// the corresponding differential plus all products of index at least product_index. Here we
    /// have to exercise a slight bit of care to ensure we don't set both $p_1 p_2 d$ and $p_2 p_1
    /// d$ when $p_1$, $p_2$ are products and $d$ is the differential. Our strategy is that we
    /// compute $p_2 p_1 d$ if and only if $p_1$ comes earlier in the list of products than $p_2$.
    pub fn add_differential_propagate(&mut self, r : i32, x : i32, y : i32, source : &FpVector, target : &FpVector, product_index : usize) {
        if product_index == self.products.len() - 1 {
            self.add_differential(r, x, y, source, target);
        } else if product_index < self.products.len() - 1 {
            self.add_differential_propagate(r, x, y, source, target, product_index + 1);
        }

        // We have to do this to avoid having an immutable borrow of self outside of the
        // context
        if self.products[product_index].differential.is_none() && self.products[product_index].matrices.len() > x && self.products[product_index].matrices[x].len() > y {
            let product = &self.products[product_index];
            let prod_x = product.x;
            let prod_y = product.y;
            let prod_source = product.matrices[x][y].apply(source);
            let prod_target = product.matrices[x - 1][y + r].apply(target);

            // If prod_source is non-zero but prod_target is zero, this is still useful
            // information.
            if !prod_source.is_zero() {
                self.add_differential_propagate(r, x + prod_x, y + prod_y, &prod_source, &prod_target, product_index);
            }
        }
    }

    pub fn set_permanent_class(&mut self, x : i32, y : i32, class : &FpVector) {
        self.permanent_classes[x][y].add_vector(class);
        if self.differentials.len() <= x {
            return;
        }
        if self.differentials[x].len() <= y {
            return;
        }
        for r in MIN_PAGE .. self.differentials[x][y].len() {
            self.differentials[x][y][r].add(class, None);
        }
    }

    /// Same logic as add_differential_propagate
    pub fn set_permanent_class_propagate(&mut self, x : i32, y : i32, class : &FpVector, product_index : usize) {
        if product_index == self.products.len() - 1 {
            self.set_permanent_class(x, y, class);
        } else if product_index < self.products.len() - 1 {
            self.set_permanent_class_propagate(x, y, class, product_index + 1);
        }

        // We have to do this to avoid having an immutable borrow of self outside of the
        // context
        if self.products[product_index].differential.is_none() && self.products[product_index].matrices.len() > x && self.products[product_index].matrices[x].len() > y {
            let product = &self.products[product_index];
            let prod_x = product.x;
            let prod_y = product.y;
            let prod_class = product.matrices[x][y].apply(class);

            if !prod_class.is_zero() {
                self.set_permanent_class_propagate(x + prod_x, y + prod_y, &prod_class, product_index);
            }
        }
    }

    pub fn compute_pages(&mut self, x : i32, y : i32) {
        let max_page = max(self.zeros[x][y].len(), self.differentials[x][y].len() + 1);

        let mut classes : BiVec<Vec<FpVector>> = BiVec::with_capacity(MIN_PAGE, max_page);
        let mut differentials : BiVec<Vec<FpVector>> = BiVec::with_capacity(MIN_PAGE, self.differentials[x][y].len());

        // r = MIN_PAGE
        let source_dim = self.classes[x][y];
        let mut class_list : Vec<FpVector> = Vec::with_capacity(source_dim);
        for i in 0 .. source_dim {
            let mut vec = FpVector::new(self.p, source_dim);
            vec.set_entry(i, 1);
            class_list.push(vec);
        }
        classes.push(class_list);

        for r in MIN_PAGE + 1 .. max_page {
            if classes[r - 1].len() == 0 {
                break;
            }
            let mut class_list = Vec::new();

            // We only have to figure out what gets hit by differentials.
            if self.differentials[x][y].len() < r {
                let mut vectors : Vec<FpVector> = Vec::with_capacity(classes[r - 1].len());
                for vec in &classes[r - 1] {
                    let mut result = vec.clone();
                    self.zeros[x][y][r].reduce(&mut result);
                    vectors.push(result);
                }
                let mut matrix = Matrix::from_rows(self.p, vectors);
                let mut pivots = vec![-1; matrix.get_columns()];
                matrix.row_reduce(&mut pivots);

                for i in 0 .. matrix.get_rows() {
                    if matrix[i].is_zero() {
                        break;
                    }
                    let mut vec = FpVector::new(self.p, source_dim);
                    vec.add(&matrix[i], 1);
                    class_list.push(vec);
                }
            } else {
                let target_dim = self.classes[x - 1][y + r - 1];
                let d = &self.differentials[x][y][r - 1];

                let mut vectors : Vec<FpVector> = Vec::with_capacity(classes[r - 1].len());
                differentials.push(Vec::with_capacity(classes[r - 1].len()));
                for vec in &classes[r - 1] {
                    let mut dvec = FpVector::new(self.p, target_dim);
                    d.evaluate(vec.clone(), &mut dvec);
                    self.zeros[x - 1][y + r - 1][r - 1].reduce(&mut dvec);

                    let mut result = FpVector::new(self.p, source_dim + target_dim);
                    result.set_slice(0, source_dim);
                    result.add(&vec, 1);
                    result.clear_slice();

                    result.set_slice(source_dim, source_dim + target_dim);
                    result.shift_add(&dvec, 1);
                    result.clear_slice();

                    vectors.push(result);
                    differentials[r - 1].push(dvec);
                }
                let mut matrix = Matrix::from_rows(self.p, vectors);
                let mut pivots = vec![-1; matrix.get_columns()];
                matrix.row_reduce(&mut pivots);
                matrix.row_reduce_offset(&mut pivots, source_dim);

                let mut first_kernel_row = 0;
                for i in (source_dim .. source_dim + target_dim).rev() {
                    if pivots[i] >= 0 {
                        first_kernel_row = pivots[i] + 1;
                    }
                }

                matrix.set_slice(0, matrix.get_rows(), 0, source_dim);
                for i in first_kernel_row as usize .. matrix.get_rows() {
                    if matrix[i].is_zero() {
                        break;
                    }
                    let mut vec = FpVector::new(self.p, source_dim);
                    vec.add(&matrix[i], 1);
                    class_list.push(vec);
                }
            }
            classes.push(class_list);
        }

        self.page_classes[x][y] = classes;
        self.page_differentials[x][y] = differentials;
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_sseq_differential() {
        let p = 3;
        crate::fp_vector::initialize_limb_bit_index_table(p);
        let mut sseq = crate::sseq::Sseq::new(p, 0, 0);
        sseq.set_class(0, 0, 1);
        sseq.set_class(1, 0, 2);
        sseq.set_class(1, 1, 2);
        sseq.set_class(0, 1, 0);
        sseq.set_class(0, 2, 3);
        sseq.set_class(0, 3, 1);

        sseq.add_differential(2, 1, 0,
                              &FpVector::from_vec(p, &vec![1, 1]),
                              &FpVector::from_vec(p, &vec![0, 1, 2]));

        sseq.add_differential(3, 1, 0,
                              &FpVector::from_vec(p, &vec![1, 0]),
                              &FpVector::from_vec(p, &vec![1]));

        sseq.compute_pages(1, 0);
        sseq.compute_pages(1, 1);
        sseq.compute_pages(0, 2);
        sseq.compute_pages(0, 3);

        assert_eq!(sseq.page_classes[1][0].max_degree(), 4);
        assert_eq!(sseq.page_classes[1][0][2], vec![FpVector::from_vec(p, &vec![1, 0]),
                                             FpVector::from_vec(p, &vec![0, 1])]);

        assert_eq!(sseq.page_classes[1][0][3], vec![FpVector::from_vec(p, &vec![1, 0])]);
        assert_eq!(sseq.page_classes[1][0][4], vec![]);

        assert_eq!(sseq.page_classes[1][1].max_degree(), 2);
        assert_eq!(sseq.page_classes[1][1][2], vec![FpVector::from_vec(p, &vec![1, 0]),
                                             FpVector::from_vec(p, &vec![0, 1])]);

        assert_eq!(sseq.page_classes[0][2].max_degree(), 3);
        assert_eq!(sseq.page_classes[0][2][2], vec![FpVector::from_vec(p, &vec![1, 0, 0]),
                                             FpVector::from_vec(p, &vec![0, 1, 0]),
                                             FpVector::from_vec(p, &vec![0, 0, 1])]);

        assert_eq!(sseq.page_classes[0][2][3], vec![FpVector::from_vec(p, &vec![1, 0, 0]),
                                             FpVector::from_vec(p, &vec![0, 0, 1])]);

        assert_eq!(sseq.page_classes[0][3].max_degree(), 4);
        assert_eq!(sseq.page_classes[0][3][2], vec![FpVector::from_vec(p, &vec![1])]);
        assert_eq!(sseq.page_classes[0][3][3], vec![FpVector::from_vec(p, &vec![1])]);
        assert_eq!(sseq.page_classes[0][3][4], vec![]);

        assert_eq!(sseq.page_differentials[1][0].max_degree(), 3);
        assert_eq!(sseq.page_differentials[1][0][2], vec![FpVector::from_vec(p, &vec![0, 0, 0]),
                                                          FpVector::from_vec(p, &vec![0, 1, 2])]);

        assert_eq!(sseq.page_differentials[1][0][3], vec![FpVector::from_vec(p, &vec![1])]);

        assert_eq!(sseq.page_differentials[1][1].max_degree(), 1);


        sseq.add_differential(2, 1, 1,
                              &FpVector::from_vec(p, &vec![1, 0]),
                              &FpVector::from_vec(p, &vec![1]));

        sseq.compute_pages(1, 0);
        sseq.compute_pages(1, 1);
        sseq.compute_pages(0, 2);
        sseq.compute_pages(0, 3);

        assert_eq!(sseq.page_classes[1][0].max_degree(), 4);
        assert_eq!(sseq.page_classes[1][0][2], vec![FpVector::from_vec(p, &vec![1, 0]),
                                                    FpVector::from_vec(p, &vec![0, 1])]);

        assert_eq!(sseq.page_classes[1][0][3], vec![FpVector::from_vec(p, &vec![1, 0])]);
        assert_eq!(sseq.page_classes[1][0][4], vec![FpVector::from_vec(p, &vec![1, 0])]);

        assert_eq!(sseq.page_classes[1][1].max_degree(), 3);
        assert_eq!(sseq.page_classes[1][1][2], vec![FpVector::from_vec(p, &vec![1, 0]),
                                                    FpVector::from_vec(p, &vec![0, 1])]);

        assert_eq!(sseq.page_classes[1][1][3], vec![FpVector::from_vec(p, &vec![0, 1])]);

        assert_eq!(sseq.page_classes[0][2].max_degree(), 3);
        assert_eq!(sseq.page_classes[0][2][2], vec![FpVector::from_vec(p, &vec![1, 0, 0]),
                                                    FpVector::from_vec(p, &vec![0, 1, 0]),
                                                    FpVector::from_vec(p, &vec![0, 0, 1])]);

        assert_eq!(sseq.page_classes[0][2][3], vec![FpVector::from_vec(p, &vec![1, 0, 0]),
                                                    FpVector::from_vec(p, &vec![0, 0, 1])]);

        assert_eq!(sseq.page_classes[0][3].max_degree(), 3);
        assert_eq!(sseq.page_classes[0][3][2], vec![FpVector::from_vec(p, &vec![1])]);
        assert_eq!(sseq.page_classes[0][3][3], vec![]);

        assert_eq!(sseq.page_differentials[1][0].max_degree(), 3);
        assert_eq!(sseq.page_differentials[1][0][2], vec![FpVector::from_vec(p, &vec![0, 0, 0]),
                                                          FpVector::from_vec(p, &vec![0, 1, 2])]);

        assert_eq!(sseq.page_differentials[1][0][3], vec![FpVector::from_vec(p, &vec![0])]);

        assert_eq!(sseq.page_differentials[1][1].max_degree(), 2);
        assert_eq!(sseq.page_differentials[1][1][2], vec![FpVector::from_vec(p, &vec![1]),
                                                          FpVector::from_vec(p, &vec![0])]);
    }
}
