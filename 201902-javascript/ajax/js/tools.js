// tools.js ajax和工具相关公用js文件
// 依赖axios和Qs
(function () {
  let tangao = {
    // 后端api服务根地址
    server: 'https://huhuiyu.cn/teach-ajax-demo',
    // 本地保存token的key
    saveTokenKey: 'server.token.info',
    // 保存应答信息中的token信息
    saveToken: function (data) {
      if (data && data.token) {
        localStorage.setItem(tangao.saveTokenKey, data.token);
      }
    },
    // 加载本地保存的token信息
    loadToken: function () {
      let token = localStorage.getItem(tangao.saveTokenKey);
      return token ? token : '';
    },
    // ajax请求
    // url是请求的服务器api地址
    // params是发送的参数(json格式，没有就发空的json)
    // cb是应答回来后的处理function,且带有一个应答结果的参数
    // method可选参数，不给就是post
    ajax: function (url,params,cb,method){
       axios({
        //  url要带上服务器的根地址
         url: tangao.server + url,
        //  传送的参数要用Qs转换
         data:Qs.stringify(params, { allowDots: true }),
        //  method不存在就是post
        method: method ? method : 'post',
        // 通过头信息传递token
        headers:{
          token: tangao.loadToken()
        }
       }).then(function (resp) {
        //  服务器正常应答的情况
        // 保存token
        tangao.saveToken(resp.data);
        // 交给页面处理function
        cb(resp.data);
       }).catch(function(err) {
        //  请求失败的情况，伪造一个错误的应答结果
         cb({ code: 500, message: '请求失败！', error: err });
       });
    }
  };

  window.tangao = tangao;
})();
