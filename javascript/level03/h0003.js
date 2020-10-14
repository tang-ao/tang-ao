console.log('进入h0003.js');

var chkXy = document.getElementById('chkXy');
var btn01 = document.getElementById('btn01');
console.log(btn01.classList);
// change事件表示checkbox的选中状态发生变化（radio, select）
chkXy.addEventListener('change', function () {
  if (chkXy.checked) {
    btn01.classList.remove('btn-disable');
  } else {
    btn01.classList.add('btn-disable');
  }
});

var chkXy02 = document.getElementById('chkXy02');
var btn02 = document.getElementById('btn02');

chkXy02.addEventListener('change', function () {
  if (chkXy02.checked) {
    btn02.setAttribute('class', 'btn btn-danger');
  } else {
    btn02.setAttribute('class', 'btn btn-danger btn-disable');
  }
});

// 选择器级联可以简化js工作室
var btnOk = document.getElementById('btnOk');
var divName = document.getElementById('divName');
// 通过选择器获取divName里面的input
// querySelector也是通过css选择器获取元素，但是最多只会返回一个
// querySelectorAll是返回一组
var txtName = document.querySelector('#divName input');
console.log(txtName);
btnOk.addEventListener('click', function() {
  if (!txtName.value) {
    // 没有输入值的情况
    divName.classList.add('error');
    return;
  }
  divName.classList.remove('error');
});
