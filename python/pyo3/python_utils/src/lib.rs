#![macro_use]

use pyo3::prelude::*;
use pyo3::exceptions;
use pyo3::ObjectProtocol;

pub fn rename_submodule(module : &PyModule, name : &str, new_name : &str) -> PyResult<()> {
    let submodule = module.get(name)?;
    submodule.setattr("__name__", new_name)?;
    module.add(new_name, submodule)?;
    module.delattr(name)?;
    Ok(())
}

pub fn reduce_coefficient(p : u32, c : i32) -> u32 {
    let p = p as i32;
    (((c % p) + p) % p) as u32
}

pub fn null_ptr_exception() -> pyo3::PyErr {
    exceptions::ReferenceError::py_err(
        "Null pointer!"
    )
}

pub fn null_ptr_exception_if_none<T>(opt : Option<T>) -> pyo3::PyResult<()> {
    opt.map_or_else(
        || Err(null_ptr_exception()),
        |_x| Ok(())
    )
}

pub fn check_not_null<T>(ptr : *mut T) -> pyo3::PyResult<()> {
    if ptr.is_null() {
        Err(null_ptr_exception())
    } else {
        Ok(())
    }
}

pub fn handle_index(dimension : usize, index : isize, dim_or_len : &str,  type_to_index : &str) -> PyResult<usize> {
    let result = 
        if index < 0 {
            dimension as isize + index
        } else {
            index
        };
    check_index(dimension, result, dim_or_len,  type_to_index)?;
    Ok(result as usize)
}

pub fn check_index(dimension : usize, index : isize, dim_or_len : &str,  type_to_index : &str) -> PyResult<()> {
    if index >= dimension as isize {
        Err(exceptions::IndexError::py_err(
            format!("Index {} is greater than or equal to {} {} of {}.", index, dim_or_len, dimension, type_to_index)
        ))
    } else if index < 0 {
        Err(exceptions::IndexError::py_err(
            format!("Index {} is greater than {} {} of {}.", index - dimension as isize, dim_or_len, dimension, type_to_index)
        ))
    } else {
        Ok(())
    }
}

use std::sync::Weak;
pub fn weak_ptr_to_final<T>(ptr : Weak<T>) -> Weak<()> {
    unsafe { std::mem::transmute(ptr) }
}

#[macro_export]
macro_rules! py_repr {
    ( $wrapper : ty, $freed_str : expr, $repr_block : block) => {
        #[pyproto]
        #[allow(unused_variables)]
        impl PyObjectProtocol for $wrapper {
            fn __repr__(&self) -> PyResult<String> {
                if self.is_null() {
                    Ok(format!($freed_str))
                } else {
                    let inner = self.inner_unchkd();
                    $repr_block
                }
            }
        }
    }
}

#[macro_export]
macro_rules! common_wrapper_type {
    ( $outer:ident, $inner:ty ) => {
        #[pyclass(dict)]
        pub struct $outer {
            inner : *mut $inner,
            // If we are the owner, we hold onto an Rc to keep it alive. Replace with None on free.
            owned : Option<std::sync::Arc<()>>, 
            // To check if we are freed, we test whether or not this weak pointer is still valid.
            // When our owner is freed, this Weak pointer will become invalid.
            freed : std::sync::Weak<()>
        }

        impl $outer {
            // type Inner = $inner; // ==> "associated types are not yet supported in inherent imples" =(

            #![allow(dead_code)]
            pub fn inner(&self) -> PyResult<&$inner> {
                self.check_not_null()?;
                Ok(unsafe { &*self.inner })
            }
        
            pub fn inner_unchkd(&self) -> &$inner {
                unsafe { &*self.inner }
            }
        
            pub fn box_and_wrap(inner : $inner) -> Self {
                let inner_box = Box::new(inner);
                let owned = std::sync::Arc::new(());
                let freed = std::sync::Arc::downgrade(&owned);
                Self {
                    inner : Box::into_raw(inner_box),
                    owned : Some(owned),
                    freed 
                }
            }

            pub fn owner(&self) -> std::sync::Weak<()> {
                self.freed.clone()
            }
        
            pub fn check_not_null(&self) -> PyResult<()> {
                if self.is_null() {
                    Err(python_utils::null_ptr_exception())
                } else {
                    Ok(())
                }                
            }

            pub fn is_null(&self) -> bool {
                self.freed.upgrade().is_none()
            }
        
            pub fn is_owned(&self) -> bool {
                self.owned.is_some()
            }

            pub fn check_owned(&self) -> PyResult<()>{
                if self.is_owned() {
                    Ok(())
                } else {
                    return Err(pyo3::exceptions::ValueError::py_err(
                        "Illegal operation on reference that doesn't own its data."));
                }
            }
        }

        #[pymethods]
        impl $outer {
            pub fn free(&mut self) -> PyResult<()> {
                self.check_not_null()?;
                self.check_owned()?;
                self.owned = None;
                let ptr = self.inner;
                self.inner = std::ptr::null_mut();
                drop(unsafe { Box::from_raw(ptr) });
                Ok(())
            }

            #[getter]
            pub fn get_owned(&self) -> bool {
                self.owned.is_some()
            }
        }

        impl Drop for $outer {
            fn drop(&mut self){
                drop(self.free()); // drop because I don't want to handle the Result of self.free()
                // println!("Dropping {}! ", std::intrinsics::type_name::<$outer>());
                // if self.is_owned() {
                //     println!("  An owned reference");
                //     // if self.is_null()
                // } else {
                //     println!("  An unowned reference");
                // }
            }
        }
    }
}

#[macro_export]
macro_rules! immutable_wrapper_type {
    ( $outer:ident, $inner:ty ) => {
        python_utils::common_wrapper_type!($outer, $inner);

        impl $outer {
            pub fn wrap<T>(vec : &$inner, owner : std::sync::Weak<T> ) -> Self {
                let ptr = vec as *const $inner;
                let ptr : *mut $inner = unsafe { std::mem::transmute(ptr)};
                let owner : std::sync::Weak<()> = python_utils::weak_ptr_to_final(owner);
                Self {
                    inner : ptr,
                    owned : None,
                    freed : owner
                }
            }
        }

        impl Clone for $outer {
            fn clone(&self) -> $outer {
                $outer::wrap(unsafe { &mut *self.inner }, self.freed.clone())
            }
        }
    }
}

#[macro_export]
macro_rules! wrapper_type {
    ( $outer:ident, $inner:ty ) => {
        python_utils::common_wrapper_type!($outer, $inner);

        impl $outer {
            // type Inner = $inner; // ==> "associated types are not yet supported in inherent imples" =(
    
            pub fn wrap<T>(vec : &mut $inner, owner : std::sync::Weak<T>) -> Self {
                let owner : std::sync::Weak<()> = unsafe { std::mem::transmute(owner) };
                Self {
                    inner : vec as *mut $inner,
                    owned : None,
                    freed : owner
                }
            }

            pub fn inner_mut(&self) -> PyResult<&mut $inner> {
                self.check_not_null()?;
                Ok(unsafe { &mut *self.inner })
            }
        
            pub fn inner_mut_unchkd(&self) -> &mut $inner {
                unsafe { &mut *self.inner }
            }
        
            pub fn take_box(&mut self) -> PyResult<Box<$inner>> {
                self.check_not_null()?;
                self.check_owned()?;
                // Replace owned so other references are marked dead.
                self.owned = Some(std::sync::Arc::new(())); 
                let ptr = self.inner;
                self.inner = std::ptr::null_mut();
                Ok(unsafe { Box::from_raw(ptr) })
            }
        }

        impl Clone for $outer {
            fn clone(&self) -> $outer {
                $outer::wrap(self.inner_mut_unchkd(), self.freed.clone())
            }
        }
    }
}




#[macro_export]
macro_rules! rc_wrapper_type {
    ( $outer:ident, $inner:ty ) => {

        #[pyclass(dict)]
        #[derive(Clone)]
        #[repr(transparent)]
        pub struct $outer {
            inner : Option<std::sync::Arc<$inner>>
        }

        impl $outer {
            // type Inner = $inner; // ==> "associated types are not yet supported in inherent imples" =(

            #![allow(dead_code)]
            pub fn inner(&self) -> PyResult<&std::sync::Arc<$inner>> {
                self.inner.as_ref().ok_or_else(
                    || python_utils::null_ptr_exception()
                )
            }
        
            pub fn inner_unchkd(&self) -> &std::sync::Arc<$inner> {
                self.inner().unwrap()
            }
        
            pub fn box_and_wrap(inner : $inner) -> Self {
                Self {
                    inner : Some(std::sync::Arc::new(inner))
                }
            }

            pub fn owner(&self) -> std::sync::Weak<()> {
                self.inner.as_ref().map(|ptr| 
                    python_utils::weak_ptr_to_final(std::sync::Arc::downgrade(ptr))
                ).unwrap_or_else(|| std::sync::Weak::new()) 
                    // TODO: this else behavior may not be right...
            }

            pub fn is_null(&self) -> bool {
                self.inner.is_none()
            }

            pub fn check_not_null(&self) -> PyResult<()> {
                python_utils::null_ptr_exception_if_none(self.inner.as_ref())
            }
        
            pub fn is_owned(&self) -> bool {
                true
            }

            pub fn check_owned(&self) -> PyResult<()>{
                Ok(())
            }
        }

        #[pymethods]
        impl $outer {
            pub fn free(&mut self) -> PyResult<()> {
                python_utils::null_ptr_exception_if_none(self.inner.take())?;
                Ok(())
            }

            #[getter]
            pub fn get_owned(&self) -> bool {
                true
            }
        }

        impl $outer {
            // type Inner = $inner; // ==> "associated types are not yet supported in inherent imples" =(
    
            pub fn wrap<T>(inner : std::sync::Arc<$inner>) -> Self {
                Self {
                    inner : Some(inner),
                }
            }

            pub fn take_box(&mut self) -> PyResult<std::sync::Arc<$inner>> {
                self.inner.take().ok_or_else(|| python_utils::null_ptr_exception())
            }
        }
    }
}
