console.log('进入zy0001.js');

var imgcode = document.getElementById('imgcode');
var btnImgcode = document.getElementById('btnImgcode');
var serviceRaseUrl = 'https://huhuiyu.cn/teach-ajax-demo';
var tokenKey = 'token-123';

btnImgcode.addEventListener('click', function () {
  var promise = axios({
    method: 'get',
    url: serviceRaseUrl + '/test/imageCode',
    headers: {
      token: localStorage.getItem(tokenKey)
    }
  });
  
  promise.then(function (resp) {
    if (resp.data.token) {
      localStorage.setItem(tokenKey, resp.data.token);
    }
    console.log(resp.data);
    imgcode.setAttribute('src', resp.data.message);
  });
});


var txtImgcode = document.getElementById('txtImgcode');
var btnCheck = document.getElementById('btnCheck');
var divResult = document.getElementById('divResult');

btnCheck.addEventListener('click', function() {
  var promise = axios({
    method: 'post',
    url: serviceRaseUrl + '/test/checkImageCode',
    headers: {
      token: localStorage.getItem(tokenKey)
    },
    data: 'imageCode=' + txtImgcode.value
  });
  
  promise.then(function (resp) {
    if (resp.data.token) {
      localStorage.setItem(tokenKey, resp.data.token);
    }
    divResult.innerHTML = JSON.stringify(resp.data);
    if (!resp.data.success) {
      btnImgcode.click();
    }
  });
});