console.log('测试页面');
// ajax测试部分
var txtEcho = document.getElementById('txtEcho');
var btnAjax = document.getElementById('btnAjax');
var divResult = document.getElementById('divResult');
var btnAjaxError = document.getElementById('btnAjaxError');
console.log(txtEcho, btnAjax, divResult, btnAjaxError);

btnAjax.addEventListener('click', function () {
  huhuiyu.ajax('/', { echo: txtEcho.value }, function (data) {
    divResult.innerHTML = JSON.stringify(data);
  });
});

btnAjaxError.addEventListener('click', function () {
  // 搞一个错的请求来测试
  huhuiyu.ajax('/abc', {}, function (data) {
    divResult.innerHTML = JSON.stringify(data);
  });
});
