let mycanvas = document.getElementById('mycanvas');
// canvas特有的方法，绘图上下文对象
let context = mycanvas.getContext('2d');
// 获取浏览器的可视区域的高宽
let maxWidth = document.body.clientWidth;
let maxHeight = document.body.clientHeight;
console.log('绘图相关：', context, maxHeight, maxWidth);
// 将canvas放大到全屏
mycanvas.setAttribute('width', maxWidth);
mycanvas.setAttribute('height', maxHeight);
// 绘图，填充区域
context.fillStyle = 'rgba(224,0,0,0.5)';
// fillRect是填充区域
// 参数1：left值， 参数2：top值
// 参数3：宽度，参数4：高度
context.fillRect(0, 0, maxWidth, maxHeight);
context.fillStyle = 'rgb(255,0,0)';
context.fillRect(10, 10, 50, 50);

context.fillRect(64, 10, 50, 50);
// 清除区域
context.fillStyle = 'rgb(0, 0, 0)';
context.fillRect(69, 15, 40, 40);
// 清除区域效果
context.fillRect(125, 10, 50, 50);
context.clearRect(130, 15, 40, 40);
// 路径绘制（其实就是多边形）
context.beginPath();
// 起点
context.moveTo(190, 10);
context.lineTo(215, 40);
context.lineTo(208, 57);
context.fillStyle = 'rgb(0, 255, 0)';
context.fill();

// 等腰三角形
context.moveTo(240, 10);
context.lineTo(225, 30);
context.lineTo(255, 30);
context.fill();

// 只有边框的多边形
context.moveTo(260, 10);
context.lineTo(278, 30);
context.lineTo(267, 40);
context.lineTo(260, 10);
// 关闭路径
context.closePath();
// 线条路径
context.stroke();

// 绘制字符
// 字体
context.font = '24px Cascadia';
// 绘制字符的基准线
context.textBaseline = 'top';
context.fillStyle = 'rgb(170,170,0)';
// 绘制字符，1：要显示的字符串
// ，2：起点left值，3：起点的top值
context.fillText('baseline text', 10, 70);
// 绘制线条风格字符
context.font = '48px Cascadia';
context.strokeText('黑暗骑士', 200, 70);

// 绘制图片
// 通过js获取图片
let myimg = new Image();
// 监听图片加载是否完成
myimg.addEventListener('load', function () {
  console.log('图片加载完成');
  // 绘制图片
  context.drawImage(myimg, 50, 120, 600, 400);
});
console.log('加载图片');
// 通过src属性加载图片
myimg.setAttribute('src', '../images/ai.jpg');
