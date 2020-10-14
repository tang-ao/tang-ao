console.log('进入ajax0009.js');

var page = { pageNumber: 1, pageSize: 5 };
var divResult = document.getElementById('divResult');
var divImages = document.getElementById('divImages');

function query() {
  huhuiyu.ajax('post', '/util/queryAllImage', { page: page }, function (data) {
    console.log(data);
    divResult.innerHTML = JSON.stringify(data);
    // console.log(data.code, data.success);
    // console.log(data.resultData.page);
    // console.log(data.resultData.list);
    // 服务器返回的图片地址信息的数组
    var list = data.resultData.list;
    divImages.innerHTML = ''; //清理掉原有的内容
    for (var i = 0; i < list.length; i++) {
      // 每个数据就是一个页面的图片元素
      var imginfo = list[i];
      console.log(imginfo);
      // <div>
      // <img src="https://upfile2.asqql.com/upfile/hdimg/wmtp/wmtp/2016-9/10/0227BeSOeATwcp.jpg" alt="">
      // </div>
      var div = document.createElement('div'); // 外层有个div
      var img = document.createElement('img'); // 里面是图片
      img.setAttribute('src', imginfo.content); // 后端数据中content就是图片的地址
      div.append(img); // 图片放到div中
      divImages.append(div); //div放到容器中
    }

    // 分页信息
    page = data.resultData.page; // 更新为服务器端的分页信息
    spPage.innerHTML =
      '当前页/总页数/记录数：' +
      page.pageNumber +
      '/' +
      page.pageCount +
      '/' +
      page.total;
  });
}

// 分页相关==========================================================================
var btnPre = document.getElementById('btnPre');
var spPage = document.getElementById('spPage');
var btnNext = document.getElementById('btnNext');
var txtPageNumber = document.getElementById('txtPageNumber');
var btnGo = document.getElementById('btnGo');

var ps = document.getElementById('ps');
ps.addEventListener('change', function () {
  page.pageSize = ps.value;
  query();
});

// 按回车键进入指定页面
txtPageNumber.addEventListener('keyup', function (event) {
  if (event.keyCode == 13) {
    toPage();
  }
});

// 直接进入指定页面
btnGo.addEventListener('click', function () {
  toPage();
});
function toPage() {
  // 将页码设置成txtPageNumber的值
  page.pageNumber = txtPageNumber.value;
  query();
}

btnNext.addEventListener('click', function () {
  // 页码加一再调用查询
  page.pageNumber++;
  query();
});

btnPre.addEventListener('click', function () {
  // 页码减一再调用查询
  page.pageNumber--;
  query();
});

query();

// 服务器端应答的json样本
var resultData = {
  code: 200,
  message: '',
  success: true,
  token: 'd468c607-9881-40ef-afe0-64fd4afc3805',
  resultData: {
    page: { pageSize: 2, pageNumber: 1, pageCount: 64, total: 127 },
    list: [
      {
        iid: 824,
        content:
          'https://m.qpic.cn/psc?/V13RxqEM4e0Kc0/MoK.EY8GiNN2Kt4U8x1aWADwqN*1O8ZYDI0HtN*W0naIP4erl32*I*IlfwCqHkiEuR90.W3nYS6pp4SvobuWvw!!/b&bo=sgKyAgAAAAARBzA!&rf=viewer_4',
      },
      {
        iid: 820,
        content:
          'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=516&tbOssInfo.obid=9',
      },
    ],
  },
};
