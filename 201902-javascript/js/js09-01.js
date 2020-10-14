console.log('in js09-01.js...');
var abc = 'js09-01';
// let声明的变量，在同一级别内不可以出现同名！！！更加严谨
// 下面的let代码必须注释，否则浏览器会报错，拒绝执行本js中的内容！！！
// let letabc = 'let js09-01';
console.log(abc, letabc);
// 通过顶级json避免变量冲突
console.log('全局json变量',huhuiyu.abc);