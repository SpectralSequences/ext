use std::slice::Iter;

use core::cell::UnsafeCell;
use core::ops::Index;

pub struct OnceVec<T> {
    data : UnsafeCell<Vec<T>>
}

impl<T>  OnceVec<T> {
    pub fn from_vec(vec : Vec<T>) -> Self {
        Self {
            data : UnsafeCell::new(vec)
        }
    }

    pub fn new() -> Self {
        Self::from_vec(Vec::new())
    }

    pub fn with_capacity(capacity : usize) -> Self {
        Self::from_vec(Vec::with_capacity(capacity))
    }

    fn get_vec_mut(&self) -> &mut Vec<T> {
        unsafe { &mut *self.data.get() }
    }

    fn get_vec(&self) -> &Vec<T> {
        unsafe { &*self.data.get() }
    }

    pub fn reserve(&self, additional : usize) {
        self.get_vec_mut().reserve(additional);
    }

    pub fn reserve_exact(&self, additional : usize) {
        self.get_vec_mut().reserve_exact(additional);
    }

    pub fn len(&self) -> usize {
        self.get_vec().len()
    }

    pub fn get(&self, i : usize) -> &T {
        unsafe { &((*self.data.get())[i]) }
    }

    pub fn push(&self, x : T) {
        unsafe { (*self.data.get()).push(x); }
    }

    pub fn iter(&self) -> Iter<T> {
        self.get_vec().iter()
    }
}

impl<T> Index<usize> for OnceVec<T> {
    type Output = T;
    fn index(&self, key : usize) -> &T {
        self.get(key)
    }
}

unsafe impl<T> Send for OnceVec<T> { }
unsafe impl<T> Sync for OnceVec<T> { }
