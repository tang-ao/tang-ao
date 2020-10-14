console.log('执行zy0001.js');

var btnIf = document.getElementById('btnIf');
var spIf = document.getElementById('spIf');
var txtIf = document.getElementById('txtIf');
var count = 0;

console.log(btnIf,spIf,count,btnIf.innerHTML);
// 动态修改属性
btnIf.setAttribute('title','动态修改属性-title');
txtIf.setAttribute('type','password');

btnIf.addEventListener('click', function() {
  // count++,count+=1,就是count = count + 1;
  count++;
  console.log('点击按钮的动作',count);
  // if(逻辑表达式，只有真和假两种情况){ //只有为真才会执行代码 }
  //else{ //如果if的结果为假才会执行的代码 }
  // % 取模运算 整除不尽余下的数
  // 100 % 3 = 1
  // == 是逻辑判断等值
  // 取模的结果一定是0-取模运算的第二值-1
  if(count % 2 == 1) {
    spIf.innerHTML='奇数次点击:' + count;
    spIf.setAttribute('class','v1');
  } else {
    spIf.innerHTML='偶数次点击：' + count;
    spIf.setAttribute('class','v2');
  }
  // 如果count是奇数就显示奇数次点击，且class变成v1
  // 否则就显示偶数次点击，且class变成v2
});

// 奇偶数判断的部分===================================
var txtNum = document.getElementById('txtNum');
var btnNum = document.getElementById('btnNum');

btnNum.addEventListener('click',function() {
  console.log(txtNum);
  // 获取txtNum的输入值
  var num = txtNum.value;
  console.log(num);
  // isNaN is not a number,是判断参数是不是不是一个数
  // 不是数就返回真(true),否则返回假(falsse)
  if(isNaN(num)) {
    spIf.innerHTML = '输入的不是数:';
    return;
  }
  console.log('继续判断是不是偶数。。。');
  // 转换为数
  num = parseFloat(num);
  if (num % 2 == 0) {
    spIf.innerHTML = num + '是偶数';
  } else {
    spIf.innerHTML = num + '是奇数';
  }
});
// 作业，以前+-/*%那个作业，加上是不是输入是不是数的判断
// 编写后期效果页面