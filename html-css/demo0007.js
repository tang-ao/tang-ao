console.log('进入demo0007.js');
var names = [
  '钢铁侠',
  '吕佳龙',
  '唐剑',
  '唐澳',
  '胡帆',
  '全菲',
  '赵一鲡',
  '段家昂',
];
// 随机数 Math.random()返回[0-1)
var sjs = Math.random();
console.log(sjs);
// 如果结果乘上一个整数，就会产生【0-整数)之间随机数
sjs = Math.random() * 10;
console.log(sjs);
// 取整的运算 Math.floor:去尾取整，Math.round:四舍五入，Math.ceil：进一取值
console.log(Math.floor(sjs), Math.round(sjs), Math.ceil(sjs));
// 随机范围整数公式 Math.floor(Math.random() * (上界 - 下界 + 1) + 下界）
console.log('随机范围整数===>');
var max = 6;
var min = 1;
sjs = Math.floor(Math.random() * (max - min + 1) + min);
console.log(sjs);
// 数组是通过下标访问数据，下标的范围0-数组长度减一
// 下标是固定范围整数，就可以做到随机挑选一个
max = names.length - 1;
min = 0;
var index = Math.floor(Math.random() * (max - min + 1) + min);
// Math.floor(Math.random() * names.length);
console.log(names[index]);

// 模拟随机点名一
var btn01 = document.getElementById('btn01');
var sp01 = document.getElementById('sp01');

btn01.addEventListener('click', function () {
  index = Math.floor(Math.random() * (max - min + 1) + min);
  sp01.innerHTML = names[index];
});

// 模拟随机点名二
var btn02 = document.getElementById('btn02');
var sp02 = document.getElementById('sp02');
var timer; // 计时器对象
var inexec = false; //是否正在执行随机功能
// execute ceo首席执行官 cto首席技术官
btn02.addEventListener('click', function () {
  if (inexec) {
    // 如果在执行中，直接中断点击后续的执行
    return;
  }
  inexec = true; //切换到正在执行的状态
  sp01.innerHTML = '开始随机点名';
  // 定时循环执行
  timer = setInterval(function () {
    index = Math.floor(Math.random() * (max - min + 1) + min);
    sp02.innerHTML = names[index];
  }, 200);
  // 延时执行
  setTimeout(function () {
    // 终止指定定时器
    clearInterval(timer);
    inexec = false; //切换到执行完毕的状态
    sp01.innerHTML = '抽奖完毕';
  }, 5000);
});

// 作业1：设计一个漂亮的随机抽奖程序，抽奖的内容自己决定,样式也自己决定
// 作业2：思考题，选作，抽奖的过程带有动画效果