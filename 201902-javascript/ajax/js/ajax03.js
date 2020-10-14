console.log('in ajax03.js...');
console.log('依赖对象：', Qs, axios, tangao);

let txtEcho = document.getElementById('txtEcho');
let btnEcho = document.getElementById('btnEcho');
let preResult = document.getElementById('preResult');

btnEcho.addEventListener('click', function () {
  tangao.ajax(
    '/',
    {
      echo: txtEcho.value,
    },
    function (data) {
      preResult.innerHTML = JSON.stringify(data, null, 2);
    }
  );
});
