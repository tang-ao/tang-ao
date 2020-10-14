console.log('进入ajax0005.js');
var divUser = document.getElementById('divUser');
var user = sessionStorage.getItem('login-user');
console.log('登录的用户信息：', user);
if (user) {
  user = JSON.parse(user);
  console.log('登陆的用户信息：', user);
  // 处理注册的时间
  var date = new Date();
  date.setTime(user.regDate);
  var regdate =
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  divUser.innerHTML =
    '欢迎：' + user.nickname + '(' + user.username + ')-' + regdate;
} else {
  location.href = 'ajax0004.html';
}

var btnLogout = document.getElementById('btnLogout');
btnLogout.addEventListener('click', function () {
  huhuiyu.ajax('post', '/user/logout', {}, function (resp) {
    console.log(resp);
    location.href = 'ajax0004.html';
  });
});

// 作业1：把参数测试三的功能补全
// 作业2：把登陆相关功能全部美化！！！