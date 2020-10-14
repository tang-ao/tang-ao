console.log('进入message.js');

// 显示消息对话框
var divMessage = document.getElementById('divMessage');
function showAlert(message) {
  divMessage.innerHTML = message;
  $('#alert-dialog').modal('show');
}

var btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click', function () {
  $('#add-dialog').modal('show');
});

// 保存的动作
var txtNoteInfo = document.getElementById('txtNoteInfo');
var btnAddInfo = document.getElementById('btnAddInfo');
btnAddInfo.addEventListener('click', function () {
  huhuiyu.ajax(
    'post',
    '/note/add',
    { tbNote: { noteInfo: txtNoteInfo.value } },
    function (data) {
      showAlert(data.message);
      if (data.success) {
        txtNoteInfo.value = '';
      }
    }
  );
});
