!function(e){self.webpackChunk=function(n,r){for(var o in r)e[o]=r[o];for(;n.length;)t[n.pop()]=1};var n={},t={3:1},r={};var o={4:function(){return{"./index.js":{__wbindgen_object_drop_ref:function(e){return n[0].exports.__wbindgen_object_drop_ref(e)},__wbindgen_string_new:function(e,t){return n[0].exports.__wbindgen_string_new(e,t)},__wbindgen_object_clone_ref:function(e){return n[0].exports.__wbindgen_object_clone_ref(e)},__wbg_call_9a450f735fcf1a81:function(e,t,r){return n[0].exports.__wbg_call_9a450f735fcf1a81(e,t,r)},__wbindgen_debug_string:function(e,t){return n[0].exports.__wbindgen_debug_string(e,t)},__wbindgen_throw:function(e,t){return n[0].exports.__wbindgen_throw(e,t)},__wbindgen_rethrow:function(e){return n[0].exports.__wbindgen_rethrow(e)}}}}};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var n=[];return n.push(Promise.resolve().then(function(){t[e]||importScripts(i.p+""+({}[e]||e)+".js")})),({0:[4]}[e]||[]).forEach(function(e){var t=r[e];if(t)n.push(t);else{var l,s=o[e](),c=fetch(i.p+""+{4:"3dd19cf3c6fbf58d93ae"}[e]+".module.wasm");if(s instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)l=Promise.all([WebAssembly.compileStreaming(c),s]).then(function(e){return WebAssembly.instantiate(e[0],e[1])});else if("function"==typeof WebAssembly.instantiateStreaming)l=WebAssembly.instantiateStreaming(c,s);else{l=c.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,s)})}n.push(r[e]=l.then(function(n){return i.w[e]=(n.instance||n).exports}))}}),Promise.all(n)},i.m=e,i.c=n,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.w={},i(i.s=1)}([,function(e,n,t){"use strict";let r=t.e(0).then(t.bind(null,0)).catch(console.error).then(e=>{self.wasm=e});self.calculators={};let o=performance.now();self.onmessage=e=>{if(!self.wasm)return void r.then(()=>self.onmessage(e));let n=e.data;n.cmd in i?i[n.cmd](n):console.error(`Unknown command '${n.cmd}'`)};let i={};function l(e,n){let t=2==e?"Sq":"P";return n.replace(/(?:P|Sq)(\d*)/g,"P^{$1}").replace(/P/g,`${t}`).replace(/\*/g,"").replace(/Q(\d*)/g,"Q_{$1}")}i.calculate=function(e){let n;e.prime in self.calculators||(self.calculators[e.prime]=self.wasm.SteenrodCalculator.new(e.prime),self.calculators[e.prime].compute_basis(20));try{"adem"===e.basis?n=self.calculators[e.prime].evaluate_adem(e.input):"milnor"===e.basis&&(n=self.calculators[e.prime].evaluate_milnor(e.input))}catch(e){self.postMessage({cmd:"error",error:e})}let t=l(e.prime,e.input),r=l(e.prime,n),i=function(e,n){let t=2==e?"Sq":"P";return n.replace(/((?:P|Sq)(?:\d*)) ((?:P|Sq)(?:\d*))/g,"$1 * $2").replace(/((?:P|Sq)(?:\d*)) ((?:P|Sq)(?:\d*))/g,"$1 * $2").replace(/P/g,`${t}`)}(e.prime,n);self.postMessage({cmd:"result",latex_input:t,latex_result:r,simple_result:i}),console.log(`Total time : ${(performance.now()-o)/1e3}`)}}]);