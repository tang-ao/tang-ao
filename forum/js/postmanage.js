console.log('进入postmanage.js');

// 添加的相关功能
var btnAdd = document.getElementById('btnAdd');
var btnAddPost = document.getElementById('btnAddPost');
var btnAddClose = document.getElementById('btnAddClose');

var txtTitle = document.getElementById('txtTitle');
var txtContent = document.getElementById('txtContent');

btnAdd.addEventListener('click', function () {
  // 显示对话框
  console.log($);
  $('#add-dialog').modal('show');
});
btnAddClose.addEventListener('click', function () {
  // 隐藏对话框
  $('#add-dialog').modal('hide');
});

btnAddPost.addEventListener('click', function () {
  var tbPost = { title: txtTitle.value, content: txtContent.value };
  huhuiyu.ajax('post', '/post/add', { tbPost: tbPost }, function (data) {
    alert(data.message);
    txtTitle.value = '';
    txtContent.value = '';
  });
});

// 查询相关功能
var page = { pageNumber: 1, pageSize: 5 };

function query() {
  huhuiyu.ajax('post', '/post/queryByUser', { page: page }, function (data) {
    console.log(data);
    // 单独页面的登陆校验功能
    if (data.code == 1000) {
      alert(data.message);
      location.href = '../ajax/ajax0004.html';
      return;
    }
    // api  应用编程接口 ide
    var list = data.resultData.list;
    page = data.resultData.page;
    var tbData = document.getElementById('tbData');
    tbData.innerHTML = '';
    for (var i = 0; i < list.length; i++) {
      var m = list[i];
      console.log(m);
      // 创建表格的行和单元格
      var tr = document.createElement('tr');
      var td = document.createElement('td');
      td.append(m.title);
      tr.append(td);
      // 内容
      td = document.createElement('td');
      td.append(m.content);
      tr.append(td);
      // 时间
      td = document.createElement('td');
      td.append(m.createDate);
      tr.append(td);
      // 操作按钮
      td = document.createElement('td');
      var btnDelete = document.createElement('span');
      btnDelete.classList.add('btn', 'btn-danger');
      btnDelete.append('删除');
      td.append(btnDelete);
      // 删除相关功能============================================================
      // 通过json字段的方式记住要删除的数据
      btnDelete.deleteInfo = m;
      btnDelete.addEventListener('click', function () {
        console.log(this.deleteInfo);
        deletePost = this.deleteInfo; //记住要删除的信息
        var spDelInfo = document.getElementById('spDelInfo');
        spDelInfo.innerHTML = this.deleteInfo.title;
        $('#delete-dialog').modal('show');
      });
      // 删除相关功能完毕=========================================================
      var btnModify = document.createElement('span');
      btnModify.classList.add('btn', 'btn-info');
      btnModify.append('修改');
      td.append(btnModify);
      // 修改的相关功能开始===========================================================
      btnModify.modifyInfo = m; //附加虚拟的json信息记录修改的对象
      btnModify.addEventListener('click', function () {
        deletePost = this.modifyInfo; //还是用删除的那个变量记录修改的值
        // 要在修改表单中填写原来的值
        txtMtitle.value = deletePost.title;
        txtMcontent.value = deletePost.content;
        $('#modify-dialog').modal('show');
      });
      // 修改的相关功能结束=======================================================
      tr.append(td);
      tbData.append(tr);
    }
  });
}

// 删除对话框功能
var deletePost; // 用于记录被选中要删除的信息
var btnDelInfo = document.getElementById('btnDelInfo');
var btnDelClose = document.getElementById('btnDelClose');

btnDelClose.addEventListener('click', function () {
  $('#delete-dialog').modal('show');
});

btnDelInfo.addEventListener('click', function () {
  console.log(deletePost);
  huhuiyu.ajax(
    'post',
    '/post/delete',
    { tbPost: { postId: deletePost.postId } },
    function (data) {
      alert(data.message);
      $('#delete-dialog').modal('show');
      query();
    }
  );
});

// 修改对话框功能
var txtMtitle = document.getElementById('txtMtitle');
var txtMcontent = document.getElementById('txtMcontent');
var btnSavePost = document.getElementById('btnSavePost');
var btnModifyClose = document.getElementById('btnModifyClose');

btnModifyClose.addEventListener('click', function () {
  $('#modify-dialog').modal('hide');
});

btnSavePost.addEventListener('click', function () {
  huhuiyu.ajax('post', '/post/update', {
    tbPost: {
      postId: deletePost.postId,
      title: txtMtitle.value,
      content: txtMcontent.value,
    }
  },function(data){
    alert(data.message);
    $('#modify-dialog').modal('hide');
    query();
  });
});

query();
