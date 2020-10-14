console.log('进入demo0004.js');
// 控制背景颜色的表单元素
var txtRed = document.getElementById('txtRed');
var txtGreen = document.getElementById('txtGreen');
var txtBlue = document.getElementById('txtBlue');
var txtAlpha = document.getElementById('txtAlpha');
var btnColor = document.getElementById('btnColor');
var paBuletion = document.getElementById('paBuletion');
// 通过css样式的选择器获取页面元素(如果有多个匹配的，只返回第一个)
// 下面的这个表达就是获取class='container'的元素
var container = document.querySelector('.container');
console.log(
  txtRed,
  txtGreen,
  txtBlue,
  txtAlpha,
  btnColor,
  container,
  paBuletion
);
// 点击按钮将容器的样式中的背景颜色替换成表单元素的输入值
btnColor.addEventListener('click', function () {
  console.log('确定按钮点击事件');
  // 收集表单的输入值
  var red = txtRed.value;
  var green = txtGreen.value;
  var blue = txtBlue.value;
  var alpha = txtAlpha.value;
  // var vrename = txtAlpha.value;
  // background-color: rgba(0, 0, 0, 0.6);
  var bc = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
  console.log(bc);
  // js指定style的时候，如果样式名称是有减号的，需要去掉减号，然后将减号后面的字母转大写
  container.style.backgroundColor = bc;
  // 保存样式到本地
  localStorage.setItem('backgroundColor', bc);
  // 一下是判断框=======================================
  // 第一个输入框
  console.log('第一个框输入值是:' + red + '!');
  // 去掉头尾空格的方法
  red = red.replace(/(^\s*)|(\s*$)/g, '');
  console.log('去掉头尾空格之后的值：' + red + '!');
  // 判断有没有输入值
  if (red == '') {
    paBuletion.innerHTML = '第一个框请输入值：';
    return;
  }
  // 判断是不是数
  if (isNaN(red)) {
    paBuletion.innerHTML = '请输入数字';
    return;
  }
  var ired = parseInt(red);
  console.log(ired);
  if (ired >= 0 && ired <= 255) {
    paBuletion.innerHTML = '第一个输入的值是：' + ired;
    return;
  }
  paBuletion.innerHTML = '请输入0-255的数';
  paBuletion.innerHTML = '输入的数是：' + ired;
  // 第二个输入框
  console.log('第二个框输入值是:' + green + '!');
  // 去掉头尾空格的方法
  green = green.replace(/(^\s*)|(\s*$)/g, '');
  console.log('去掉头尾空格之后的值：' + green + '!');
  // 判断有没有输入值
  if (green == '') {
    paBuletion.innerHTML = '第二个框请输入值：';
    return;
  }
  // 判断是不是数
  if (isNaN(green)) {
    paBuletion.innerHTML = '请输入数字';
    return;
  }
  var igreen = parseInt(green);
  console.log(igreen);
  if (igreen >= 0 && igreen <= 255) {
    paBuletion.innerHTML = '第一个输入的值是：' + igreen;
    return;
  }
  paBuletion.innerHTML = '请输入0-255的数';
  paBuletion.innerHTML = '输入的数是：' + igreen;
  // 第三个输入框
  console.log('第三个框输入值是:' + blue + '!');
  // 去掉头尾空格的方法
  blue = blue.replace(/(^\s*)|(\s*$)/g, '');
  console.log('去掉头尾空格之后的值：' + blue + '!');
  // 判断有没有输入值
  if (blue == '') {
    paBuletion.innerHTML = '第三个框请输入值：';
    return;
  }
  // 判断是不是数
  if (isNaN(blue)) {
    paBuletion.innerHTML = '请输入数字';
    return;
  }
  var iblue = parseInt(blue);
  console.log(iblue);
  if (iblue >= 0 && iblue <= 255) {
    paBuletion.innerHTML = '第一个输入的值是：' + iblue;
    return;
  }
  paBuletion.innerHTML = '请输入0-255的数';
  paBuletion.innerHTML = '输入的数是：' + iblue;
  // 第四个输入框
  console.log('第四个框输入值是:' + alpha + '!');
  // 去掉头尾空格的方法
  alpha = alpha.replace(/(^\s*)|(\s*$)/g, '');
  console.log('去掉头尾空格之后的值：' + alpha + '!');
  // 判断有没有输入值
  if (alpha == '') {
    paBuletion.innerHTML = '第四个框请输入值：';
    return;
  }
  // 判断是不是数
  if (isNaN(alpha)) {
    paBuletion.innerHTML = '请输入数字';
    return;
  }
  var ialpha = parseInt(alpha);
  console.log(ialpha);
  if (ialpha >= 0 && ialpha <= 255) {
    paBuletion.innerHTML = '第一个输入的值是：' + ialpha;
    return;
  }
  paBuletion.innerHTML = '请输入0-255的数';
  paBuletion.innerHTML = '输入的数是：' + ialpha;
});

// 页面尝试加载背景颜色
var backgroundColor = localStorage.getItem('backgroundColor');
if (backgroundColor) {
  container.style.backgroundColor = backgroundColor;
}

// 通过select切换背景图片
var selImg = document.getElementById('selImg');
// 监听select的选择项变化
selImg.addEventListener('change', function () {
  console.log(selImg.value);
  // background-image: url('../javascript/images/lizhi\(1\).jpg');
  // 获取body元素
  document.body.style.backgroundImage = 'url(' + selImg.value + ')';
  localStorage.setItem('back-image', selImg.value);
});

var backimg = localStorage.getItem('back-image');
if (backimg) {
  document.body.style.backgroundImage = 'url(' + backimg + ')';
}

// 切换动画
var selAnimate = document.getElementById('selAnimate');
var divAnimate = document.getElementById('divAnimate');

selAnimate.addEventListener('change', function () {
  // class="animated fadeIn"
  divAnimate.setAttribute('class', 'animated ' + selAnimate.value);
  setTimeout(function () {
    divAnimate.setAttribute('class', '');
  }, 1000);
});

divAnimate.setAttribute('class', 'animated ' + selAnimate.value);
setTimeout(function () {
  divAnimate.setAttribute('class', '');
}, 1000);


