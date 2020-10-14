console.log('in js09.js...');
var abc = 'js09.js';
let letabc = 'let js09.js';

console.log(abc, letabc);
// js顶级的var变量会被提升到浏览器顶级！！！
console.log(window.abc, window.letabc);
// 通过顶级json避免变量冲突
console.log('全局json变量',huhuiyu.abc);

