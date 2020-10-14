console.log('进入ajax0004.js');

var txtasaj = document.getElementById('txtasaj');
var txtwafh = document.getElementById('txtwafh');
var divskfjw = document.getElementById('divskfjw');
var btnano = document.getElementById('btnano');

var param = { tbUser: { password: '', username: '' } };

btnano.addEventListener('click', function () {
  param.tbUser.username = txtasaj.value;
  param.tbUser.password = txtwafh.value;
  huhuiyu.ajax('post', '/user/login', param, function (resp) {
    divskfjw.innerHTML = JSON.stringify(resp);
    if (resp.success) {
      // 提取服务器返回的用户信息
      console.log(resp.resultData.tbUser);
      sessionStorage.setItem(
        'login-user',
        JSON.stringify(resp.resultData.tbUser)
      );
      location.href = 'ajax0005.html';
    }
  });
});
// var test='a b';
// console.log(test);
// console.log(encodeURI(test));
// console.log(decodeURI(encodeURI(test)));

// var json = {
// code: 200,
// message: '登陆成功！',
// success: true,
// token: '979020a3-33f4-49f2-84a2-756ec0ae755f',
// resultData: {
// tbUser: { username: 'tangao', nickname: '阿萨', regDate: 1588901630000 },
// },
// };
