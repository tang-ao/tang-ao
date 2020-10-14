console.log('in ajax02.js...');
console.log('第三方库Qs对象：', Qs);
// Qs可以将json格式数据转换成表单提交需要的格式
// {echo:'abc'} ==> echo=abc
let formdata = { echo: 'abc' };
console.log(formdata);
console.log(JSON.stringify(formdata));
console.log(Qs.stringify(formdata));

formdata = { userinfo: { name: '吕佳龙', id: 100 } };
// 多级json转换
console.log(Qs.stringify(formdata));
// 多级json转换需要.做分割符
console.log(Qs.stringify(formdata, { allowDots: true }));

// 配合axios发起ajax请求
axios({
  method: 'post',
  url: 'https://huhuiyu.cn/teach-ajax-demo/',
  data: Qs.stringify({ echo: Math.random() }, { allowDots: true }),
})
  .then(function (resp) {
    console.log(resp.data);
    document.getElementById('preResult').innerHTML = JSON.stringify(
      resp.data,
      null,
      2
    );
  })
  .catch(function (error) {
    console.log(error);
  });
