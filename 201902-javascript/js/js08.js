console.log('in js08.js...');

// function的两种格式
// 第一种，仅仅执行一段代码
function fun01() {
  console.log('第一个function');
}

// 通过function的名称就能执行对应的代码
fun01(); //不要忘记function名称后面的()

// 第二种，执行function后可以得到数据，正规说法叫带返回值的
function fun02() {
  // 获取系统时间，并告诉调用function的人，秒数是否为奇数
  let now = new Date();
  console.log('当前时间', now);
  let sec = now.getSeconds();
  // return 值；
  // return表示中断前function的执行
  // 如果return后面有值，那么调用function的地方可以获取到该值！
  if (sec % 2 == 1) {
    return '是';
  } else {
    return '否';
  }
}
// 可以不获取返回值
fun02();
// 如果需要返回值，声明变量即可
let result = fun02();
console.log(result);

let txtNum = document.getElementById('txtNum');
let btnNum = document.getElementById('btnNum');
let spNum = document.getElementById('spNum');
btnNum.addEventListener('click', function() {
  let num = txtNum.value;
  let check = checkInt(num);
  spNum.innerHTML = '输入是否为整数的检测结果' + check;
});

// 任务，编写一个function，可以判断给入的值是否为整数
// 如果是，返回整数值，否则返回false
// 带参数的function
// 格式：function 名称(形式参数名称...) {
// 通过形式参数名称就可以获取到调用function传入的实际参数值
// }
function checkInt(str) {
  console.log('传入的str参数值是', str);
  if (!str) {
    // str参数值必须存在
    return false;
  }
  if (isNaN(str)) {
    return false;
  }
  let numf = parseFloat(str);//parseFloat 转换成浮点型小数
  let numi = parseInt(str);//parseInt 转换成整数
  if (numf == numi) {
    // 如果转换整数和小数的结果相同，那么输入就是整数
    return numi;
  }
  return false;
}

checkInt();
// 调用带参数的function时，需要传入具体的值（实际参数）
checkInt('abc');
checkInt(false);
