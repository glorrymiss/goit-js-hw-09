function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},l=o.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var l={id:e,exports:{}};return n[e]=l,o.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},o.parcelRequired7c6=l);var r=l("7Y9D8");l("iQIUW");function i(o,n){setTimeout((()=>{Math.random()>.3?e(r).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`):e(r).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`)}),n)}document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:o,step:n,amount:t}}=e.currentTarget;console.log(o.value);let l=+o.value;for(let e=1;e<=t.value;e++)1!==e?(l+=+n.value,i(e,l)):(l=+o.value,i(e,l));console.log(l)}));
//# sourceMappingURL=03-promises.afb6b00c.js.map
