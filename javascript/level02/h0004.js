console.log('执行h0004.js');
// 获取表单元素
var txtPwd = document.getElementById('txtPwd');
var divInfo = document.getElementById('divInfo');
var btnOk = document.getElementById('btnOk');
// radio一组互斥
var rdoYue = document.getElementById('rdoYue');
var rdoNian = document.getElementById('rdoNian');
var rdoYJ = document.getElementById('rdoYJ');

console.log(txtPwd,divInfo,btnOk,rdoYue,rdoNian,rdoYJ);

btnOk.addEventListener('click',function() {
  console.log('点击确定事件');
  divInfo.innerHTML = '输入的密码：' + txtPwd.value;
  // 判断开卡模式（radio互斥效果的判断）
  var mode = '';
  // radio的checked属性只有真假二态，选中时为ture
  if (rdoYue.checked) {
    mode = rdoYue.value;
  }
  if (rdoNian.checked) {
    mode = rdoNian.value;
  }
  if (rdoYJ.checked) {
    mode = rdoYJ.value;
  }
  divInfo.innerHTML += '<br>开卡模式是：' + mode;
});

var chkShow = document.getElementById('chkShow');
var spShow = document.getElementById('spShow');

chkShow.addEventListener('click',function() {
  if (chkShow.checked) {
    // 如果是选中状态就显示spShow
    spShow.style.display = 'inline';
  } else {
    spShow.style.display = 'none';
  }
});
// 设计一个注册的表单！！！要求用到上课所有学到表单元素
// 带上一些自己觉得合理的效验