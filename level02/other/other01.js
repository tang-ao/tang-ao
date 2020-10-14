console.log('全屏的任意移动效果');
//记住位置索引
var index = 1;
// 移动样式的前缀
var classPrefix = 'move';
// 上一页下一页
var btnPre = document.getElementById('btnPre');
var btnNext = document.getElementById('btnNext');
// 获取所有的全屏子div
var divs = document.querySelectorAll('.container>div');
console.log(divs, btnPre, btnNext);

// 下一页点击
btnNext.addEventListener('click', function () {
  index++;
  // 防止后翻超出范围，技巧在于范围是动态决定的，取决于第一级的div的数量
  index = index > divs.length ? divs.length : index;
  changeMoveClass();
});

// 上一页点击
btnPre.addEventListener('click', function () {
  index--;
  //防范前翻超出范围
  index = index < 1 ? 1 : index;
  changeMoveClass();
});

// 重复的代码不要重复复制粘贴，而是放到function中，可以重复调用
function changeMoveClass() {
  var className = classPrefix + index;
  // 通过循环更换样式
  for (var i = 0; i < divs.length; i++) {
    // setAttribute替换样式
    divs[i].setAttribute('class', className);
  } 
}

// 下拉列表导航方式
var selPage = document.getElementById('selPage');
// div的数量不确定，所以导航的列表是循环产生
for (var i = 0; i < divs.length; i++) {
  var op = document.createElement('option');
  op.setAttribute('value', i + 1);
  op.append('第' + (i + 1) + '页');
  selPage.append(op);
}

// select变化直接跳转页面
selPage.addEventListener('change', function () {
  index = selPage.value; //索引直接切换成选择值
  changeMoveClass();
});

// 自动切换
var chkAute = document.getElementById('chkAute');

var interval = 5000; //切换时间间隔
setInterval(function () {
  if(!chkAute.checked) {
    // 没有选中就中断后续代码执行
    return;
  }
  index++;
  // 超出就回到第一页
  index = index > divs.length ? 1 : index;
  changeMoveClass();
}, interval);

// 事件的其它写法(强烈的不推荐，被addEventListener替代了)
var btn04 = document.getElementById('btn04');
btn04.onclick = function () {
  index = 4;
  changeMoveClass();
};

// 作业：把上课的效果扩展成横排的数量超过两个的样子
