console.log('in js07.js...');
// 完整的信息
let info = '做个人，好不好？？？';
// 显示字符的div容器
let divInfo = document.getElementById('divInfo');
//字符索引值，决定获取第几个字符
let index = 0;
// 延时执行（无限次）
let timer = setInterval(function () {
  // 预防字符串超出
  if (index >= info.length) {
    index = 0;
    divInfo.innerHTML = '';
  }
  divInfo.append(info.substr(index, 1));
  // 变量来控制追加的字符
  index++;
}, 100);

// 控制延时执行
let btnInfo = document.getElementById('btnInfo');
btnInfo.addEventListener('click', function () {
  clearInterval(timer);
  divInfo.innerHTML = info;
});

// 一次延时执行
let btnOpen = document.getElementById('btnOpen');
let spOpen = document.getElementById('spOpen');

btnOpen.addEventListener('click', function () {
  spOpen.innerHTML = '页面会在5秒后跳转';
  setTimeout(function () {
    location.href = 'https://huhuiyu.top';
  }, 5000);
});

// setInterval(function() {
// 要反复延时执行的代码
// }，延时的毫秒数);
// 这个方法的返回值是计时器对象
// 通过clearInterval(计时器对象)停止延时执行
// setTimeout有一组相同的方法，只延时执行一次