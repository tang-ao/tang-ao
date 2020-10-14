console.log('in js02.js...');
// 字符串类型,字面量用单（双）引号界定
let varString = 'abc';
let txt01 = document.getElementById('txt01');
// keyup, 按键释放
txt01.addEventListener('keyup', function () {
  // 文本框中获取字符串变量
  let strInput = txt01.value;
  // 常见方法
  console.log('输入的字符长度', strInput.length);
  console.log('去掉头尾空格后的字符', strInput.trim());
  console.log('查找abc在字符串中的位置', strInput.indexOf('abc'));
  console.log('截取', strInput.substr(1, 3));
});

// 日期类型
let now = new Date();
// 可以和时间戳（数）转换
let time = now.getTime();
console.log('当前时间戳', time, now);
time = time - 2000;
now.setTime(time);
console.log('转换后的结果', time, now);
// 获取时间的部分
console.log(
  '获取日期的一部分：',
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  now.getHours(),
  now.getMinutes(),
  now.getSeconds()
);

// 数值
let info = '123.45';
// alt shift f
console.log('字符串转换数值的结果', parseFloat(info), parseInt(info));
let num = 1234.5678;
console.log('小数转换成字符串并截取小数位', num.toFixed(2));
console.log('随机数', Math.random());