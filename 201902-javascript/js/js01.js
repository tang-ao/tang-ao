// console.log('在浏览器的console中输出信息');
// console.error('在浏览器的console中输出红色错误信息');
// console.info输出重要信息
console.log('in js01.js....');
console.error('输出错误用的');
// 获取页面元素
// document.getElementById('页面元素的id')
// 表示获取页面中属性id="txt01"的元素，id必须唯一
let txt01 = document.getElementById('txt01');
let btn01 = document.getElementById('btn01');
let div01 = document.getElementById('div01');
console.log(txt01, btn01, div01);
// dom元素的操作
// 处理事件（也就是用户操作动作）
// 元素.addEventListener('事件名称', function(){
//    事件对应的动作触发后要执行的代码
// });
// click是点击事件
btn01.addEventListener('click', function () {
  // 获取表单元素特有的属性value（表单元素的输入值）
  let vtxt01 = txt01.value;
  console.log('txt01输入的值是', vtxt01);
  // 直接修改元素里面的内容(不常用)
  div01.innerHTML = vtxt01;
});

// dom创建元素
let div02 = document.getElementById('div02');
console.log(div02);
// document.createElement('元素的标记名称')
// 表示创建标记对应的元素
// document.createElement('input')表示创建一个input元素
// 等同于页面上的<input>
let einput = document.createElement('input');
console.log('dom动态创建的元素：', einput);
// 将动态创建的元素添加到页面指定位置的元素中
// 元素.append(添加的元素)表示将添加的元素放到元素中
div02.append(einput);
// 对元素的属性做修改
let einput02 = document.createElement('input');
einput02.setAttribute('type', 'checkbox');
einput02.setAttribute('checked', 'checked');
div02.append(einput02);
// 多层级元素组合添加
let elabel = document.createElement('label');
elabel.append('男生');
div02.append(elabel);
// 第二级input radio
let einput03 = document.createElement('input');
einput03.setAttribute('type', 'radio');
elabel.append(einput03);