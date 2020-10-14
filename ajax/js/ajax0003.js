console.log('进入ajax0003.js');

var txtUsername = document.getElementById('txtUsername');
var txtPwd = document.getElementById('txtPwd');
var txtNickname = document.getElementById('txtNickname');
var btnReg = document.getElementById('btnReg');
var divResult = document.getElementById('divResult');

var param = { tbUser: { nickname: '', password: '', username: '' } };
console.log(Qs.stringify(param, { allowDots: true }));

btnReg.addEventListener('click', function () {
  // 收集后端需要的信息
  param.tbUser.nickname = txtNickname.value;
  param.tbUser.password = txtPwd.value;
  param.tbUser.username = txtUsername.value;
  console.log(param);
  console.log(Qs.stringify(param, { allowDots: true }));
  // ajax调用后端api注册
  huhuiyu.ajax('post', '/user/reg', param, function (resp) {
    divResult.innerHTML = JSON.stringify(resp);
  });
});

document.getElementById('btnLogin').addEventListener('click', function () {
  location.href = 'ajax0004.html';
});
