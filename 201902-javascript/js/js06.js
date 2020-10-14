console.log('in js06.js...');

// 图片的数组
let imgs = [
  'images/ai.jpg',
  'images/koudai.jpg',
  'images/shan.jpg',
  'images/koudai.jpg',
  'images/ai.jpg',
];

// 动态添加图片
let eimages = document.querySelector('.images');

for (let i = 0; i < imgs.length; i++) {
  // <div class="move-in">
  // <img src="images/koudai.jpg" alt="">
  // </div>
  let div = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute('src', imgs[i]);

  div.append(img);
  eimages.append(div);
}

// 获取所有的图片所在div
let imgDivs = document.querySelectorAll('.images > div');
console.log(imgDivs);
// 第一图片移出去
imgDivs[0].setAttribute('class', 'move-out');
// 第二个图片移进来
imgDivs[1].setAttribute('class', 'move-in');