console.log('执行demo0001.js');

var myimg = document.getElementById('myimg');
// js里面路径是由引用它的html位置决定
myimg.setAttribute('src','../imges/caomao.jpg');

setTimeout(function () {
  myimg.setAttribute('src','../imges/dashan.jpg');
},5000);