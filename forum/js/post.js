console.log('post.js');
var page = { pageNumber: 1, pageSize: 10 };
var secPost = document.getElementById('secPost');

// 转换时间  （数字）为我们指定的日期格式
function formatData(time) {
  // 创建日期时间对象
  var data = new Date();
  // setTime(时间)是修改日期对象的时间到时间
  data.setTime(time);
  var year = data.getFullYear();
  var month = data.getMonth() + 1;
  var day = data.getDay();
  var hour = data.getHours();
  var minute = data.getMinutes();
  var second = data.getSeconds();
  return (
    year + '年' + month + '月' + day + '日' + hour + ':' + minute + ':' + second
  );
}

function query() {
  huhuiyu.ajax('post', '/post/queryAll', { page: page }, function (data) {
    console.log(data);
    var list = data.resultData.list;
    secPost.innerHTML = '';
    // 原始版本
    for (var i = 0; i < list.length; i++) {
      var postinfo = list[i];
      console.log(postinfo);
      // 容器
      var div = document.createElement('div');
      // 第一行，发帖的标题和发帖人
      var line01 = document.createElement('div');
      line01.append(postinfo.title + '-' + postinfo.user.nickname);
      line01.classList.add('bg-primary');
      div.append(line01);
      var line02 = document.createElement('div');
      line02.append(formatData(postinfo.createDate));
      line02.classList.add('text-danger', 'text-right');
      div.append(line02);
      // 通过虚拟的属性记住postId,data-是html5的一个规范
      // 用于用户记住一些数据，-后至少要有一个字符，名称全小写
      div.setAttribute("data-post-id", postinfo.postId);
      // 点击的动作，跳转到详情页
      div.addEventListener('click', function () {
        var postId = this.getAttribute('data-post-id');
        console.log(postId);
        console.log(Qs.stringify({ postId: postId }));
        // 页面通过查询字符串传递数据到其它页面
        // 查询字符串的格式是？名称=值&名称2=值2
        location.href = 'detail.html?postId=' + postId;
      });

      secPost.append(div);
    }

    // 自定义格式版本
    var divList = document.getElementById('divList');
    divList.innerHTML = '';
    for (var i = 0; i < list.length; i++) {
      var post = list[i];
      // 面板内容
      var div01 = document.createElement('div');
      div01.classList.add('panel', 'panel-primary');
      var div02 = document.createElement('div');
      div01.append(div02);
      div02.classList.add('panel-heading');
      // 标题内容(用户名)
      var div03 = document.createElement('div');
      // 逻辑表达式？为真执行这个地方的代码：为假执行这个地方的代码
      // 如果用户昵称有就为用户昵称不变，否则就是改成匿名用户
      post.user.nickname = post.user.nickname ? post.user.nickname : '匿名用户';
      div03.append(post.user.nickname);
      div03.classList.add('panel-title');
      div02.append(div03);
      // body的内容（标题）
      var div04 = document.createElement('div');
      div04.classList.add('panel-body');
      div04.append(post.title);
      div01.append(div04);
      // footer的内容（发帖时间）
      var div05 = document.createElement('div');
      div05.classList.add('panel-footer', 'text-danger', 'text-right');
      div05.innerHTML = formatData(post.createDate);
      div01.append(div05);
      divList.append(div01);
    }
  });
}

query();

// 全部作业
// 论坛首页 带分页效果
// 图片墙美化
// 留言板带美化
// 用户登陆和注册，带美化