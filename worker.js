!function(e){self.webpackChunk=function(n,r){for(var s in r)e[s]=r[s];for(;n.length;)t[n.pop()]=1};var n={},t={0:1},r={};var s={2:function(){return{"./index.js":{__wbindgen_object_drop_ref:function(e){return n[1].exports.__wbindgen_object_drop_ref(e)},__wbindgen_number_new:function(e){return n[1].exports.__wbindgen_number_new(e)},__wbindgen_string_new:function(e,t){return n[1].exports.__wbindgen_string_new(e,t)},__wbg_new_f1f0f3113e466334:function(){return n[1].exports.__wbg_new_f1f0f3113e466334()},__wbg_push_829cf1fbae322d44:function(e,t){return n[1].exports.__wbg_push_829cf1fbae322d44(e,t)},__wbg_apply_a7d91e1867ff2ba0:function(e,t,r){return n[1].exports.__wbg_apply_a7d91e1867ff2ba0(e,t,r)},__wbg_call_213fbeddd38b2990:function(e,t,r,s,o){return n[1].exports.__wbg_call_213fbeddd38b2990(e,t,r,s,o)},__wbindgen_debug_string:function(e,t){return n[1].exports.__wbindgen_debug_string(e,t)},__wbindgen_throw:function(e,t){return n[1].exports.__wbindgen_throw(e,t)}}}}};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var n=[];return n.push(Promise.resolve().then(function(){t[e]||importScripts(o.p+""+e+".worker.js")})),({1:[2]}[e]||[]).forEach(function(e){var t=r[e];if(t)n.push(t);else{var l,f=s[e](),a=fetch(o.p+""+{2:"b6dd566c9eab25bb1673"}[e]+".module.wasm");if(f instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)l=Promise.all([WebAssembly.compileStreaming(a),f]).then(function(e){return WebAssembly.instantiate(e[0],e[1])});else if("function"==typeof WebAssembly.instantiateStreaming)l=WebAssembly.instantiateStreaming(a,f);else{l=a.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,f)})}n.push(r[e]=l.then(function(n){return o.w[e]=(n.instance||n).exports}))}}),Promise.all(n)},o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o.w={},o(o.s=0)}([function(e,n,t){let r=t.e(1).then(t.bind(null,1)).catch(console.error).then(e=>{self.wasm=e});function s(e,n,t){n>self.max_int_deg&&(self.max_int_deg=n,self.max_int_deg%10==0&&(console.log(`Time to compute stems ${self.max_int_deg-10} to ${self.max_int_deg} : ${function(){let e=performance.now(),n=(e-f)/1e3;return f=e,n}()}`),console.log(`Total time to compute first ${self.max_int_deg} stems : ${a()}`))),self.postMessage({cmd:"addClass",x:n-e,y:e})}function o(e,n,t,r,s,o,l){self.postMessage({cmd:"addStructline",mult:e,source:{x:t-n,y:n,idx:r},target:{x:o-s,y:s,idx:l}})}self.max_int_deg=0;let l=performance.now(),f=l;function a(){return(performance.now()-l)/1e3}self.onmessage=e=>{if(!self.wasm)return void r.then(()=>self.onmessage(e));let n=e.data;n.cmd in i?(i[n.cmd](n),self.postMessage({cmd:"complete",data:n})):console.error(`Unknown command '${n.cmd}'`)};let i={resolve:function(e){self.p=e.p,self.algebra=self.wasm.WasmAlgebra.new_adem_algebra(e.p,2!=e.p),self.module=self.wasm.WasmModule.new_adem_module(self.algebra,e.module),self.cc=self.wasm.WasmCCDZ.new_ccdz(self.module),self.res_no_maps=self.wasm.WasmResolution.new(cc,e.maxDegree,s,o),self.res=self.wasm.WasmResolutionWithChainMaps.new(self.res_no_maps,self.res_no_maps,e.module),self.res.resolve_through_degree(e.maxDegree),console.log(`Total time : ${a()}`)},getCocycle:function(e){if(!self.res)return void console.log("No resolution yet, can't get cocycle");let n=e.class.y,t=e.class.x+e.class.y,r=self.res.get_cocycle_string(n,t,e.class.idx);2==self.p&&(r=r.replace(/P/g,"Sq")),self.postMessage({cmd:"cocycleResult",class:e.class,cocycle:r})}}}]);