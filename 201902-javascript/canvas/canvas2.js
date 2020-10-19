let maxWidth = document.body.clientWidth;
let maxHeight = document.body.clientHeight;

let mycanvas2 = document.getElementById('mycanvas2');
let context = mycanvas2.getContext('2d');

mycanvas2.setAttribute('width', maxWidth);
mycanvas2.setAttribute('height', maxHeight);

// 按键移动图片
// 坐标
let topx = 10;
let lefty = 10;
// 图片加载状态
let imgloaded = false;
// 移动方向（就是按键的code）
let dir = 'ArrowDown';

document.body.addEventListener('keydown', function (event) {
  console.log(event.code);
  // 通过方向键控制绘图坐标位置
  dir = event.code;
  // 重绘图片
  drawImg();
});

// 加载图片
let img = new Image();

img.addEventListener('load', function () {
  imgloaded = true;
  drawImg();
});

img.setAttribute('src', '../images/ai.jpg');

// 绘制图片
function drawImg() {
  if (!imgloaded) {
    return;
  }
  // 清除背景
  context.fillStyle = 'rgb(255,255,255)';
  context.fillRect(0, 0, maxWidth, maxHeight);

  context.drawImage(img, lefty, topx, 50, 50);
  if (dir == 'ArrowUp') {
    // 方向上键，top坐标减少，上移
    topx -= 10;
  } else if (dir == 'ArrowDown') {
    // 方向下键，top坐标增加，下移
    topx += 10;
  } else if (dir == 'ArrowLeft') {
    // 方向左键，left坐标减少，左移
    lefty -= 10;
  } else if (dir == 'ArrowRight') {
    // 方向右键，left坐标增加，右移
    lefty += 10;
  }
}

// 自动绘制图片
setInterval(drawImg, 500);