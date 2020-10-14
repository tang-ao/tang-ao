console.log('in ajax01.js...');
console.log('axios对象:', axios);
// 文档地址
// https://huhuiyu.cn/teach-ajax-demo/docs.html
// 后端api服务地址
let server='https://huhuiyu.cn/teach-ajax-demo';

let preAjax = document.getElementById('preAjax');

// 发起post请求
// 教学用的后端请求需要token信息，错误一定次数会被服务器阻断
// 所以需要保存token信息，并每一个请求都要发送回服务器
// 使用本地存储保存token信息
let tokenSaveKey = 'server.token.info';
// 保存服务器发回的信息中的token信息
function saveToken(data) {
  // 如果有token信息就保存
  if (data && data.token) {
    localStorage.setItem(tokenSaveKey, data.token);
  }
}
// 获取本地保存的token值
function loadToken() {
  let token = localStorage.getItem(tokenSaveKey);
  return token ? token : '';
}

axios.post(server + '/', { echo: '测试首页'}).then(function (resp) {
  console.log('应答结果:', resp.data);
  preAjax.innerHTML = JSON.stringify(resp.data, null, 2);
  saveToken(resp.data);
});

console.log('保存到本地的token信息：', loadToken());