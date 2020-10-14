console.log('执行js04.js');

let txt01 = document.getElementById('txt01');
let btn01 = document.getElementById('btn01');
let sp01 = document.getElementById('sp01');
console.log(txt01, btn01, sp01);

btn01.addEventListener('click', function () {
  let vtxt01 = txt01.value.trim();
  console.log(vtxt01);
  sp01.innerHTML = '';
  // if(逻辑表达式){
  // 如果逻辑表达式结果为真(true)就会执行{}中的代码
  // return表示中断所在function的执行
  // }
  if (vtxt01 == '') {
    sp01.innerHTML = '必须输入';
    return;
  }
  // 长度6-16
  // 逻辑或前后表达式只要一个是真，结果就是真
  if (vtxt01.length < 6 || vtxt01.length > 16) {
    sp01.innerHTML = '长度必须在6-16';
    txt01.focus();
    return;
  }
});

let txt02 = document.getElementById('txt02');
let txt03 = document.getElementById('txt03');
let btn02 = document.getElementById('btn02');
let sp02 = document.getElementById('sp02');
console.log(txt02, txt03, btn02, sp02);

btn02.addEventListener('click', function () {
  let nian = txt02.value;
  let yue = txt03.value;
  // 闰年判断
  // && 逻辑与前后的表达式都要为真才返回真
  // ！逻辑非表达式取反
  let run = nian % 400 == 0 || (nian % 4 == 0 && nian % 100 != 0);
  if (
    yue == 1 ||
    yue == 3 ||
    yue == 5 ||
    yue == 7 ||
    yue == 8 ||
    yue == 10 ||
    yue == 12
  ) {
    sp02.innerHTML = '31天';
  } else if (yue == 4 || yeu == 6 || yue == 9 || yue == 11) {
    sp02.innerHTML = '30天';
  } else if (run && yue == 2) {
    sp02.innerHTML = '29天';
  } else {
    sp02.innerHTML = '28天';
  }
  //阶梯式if
  // if（逻辑表达式1）{ 为真执行 }
  // else if（逻辑表达式2）{为真执行}
  // else if（逻辑表达式n）{为真执行}...
  // else { 全部表达式都为假执行 }
  // 注意事项，阶梯式是从上到下
  // 任意一个if里面的表达式为真，后续的判断都会跳过
  // 除了第一个if是必须写的，其它都可以省略
});
