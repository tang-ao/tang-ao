console.log('音乐播放器');
var myaudio = document.getElementById('myaudio');
var divList = document.getElementById('divList');
// 歌曲信息
var musicList = [];
// 当前音乐的索引
var index = 0;

myaudio.volume = 0.5;

// 查询音乐
function query() {
  huhuiyu.ajax(
    '/media/queryAudio',
    { page: { pageSize: 50, pageNumber: 1 } },
    function (data) {
      console.log(data);
      if (!data.success) {
        alert(data.message);
        return;
      }
      // 测试音乐播放器是否正确
      // myaudio.setAttribute('src', data.resultData.list[1].url);
      // myaudio.play();
      musicList = data.resultData.list;
      console.log('后台获取的音乐列表（数组）', musicList);
      showList();
    }
  );
}

// 显示歌曲名称列表
function showList() {
  for (var i = 0; i < musicList.length; i++) {
    var music = musicList[i];
    console.log('音乐信息', music);
    var span = document.createElement('span');
    // bootstrap的样式版本
    // span.classList.add('btn', i % 2 == 0 ? 'btn-danger' : 'btn-primary');
    // 自定义样式版本
    span.classList.add('mybutton');
    span.append(music.name);
    divList.append(span);
    // 记住span对应的歌曲索引
    span.setAttribute('data-audio-index', i);
    span.addEventListener('click', playAudio);
  }
}

// 播放音乐
function playAudio() {
  // 获取索引对应的音乐
  index = this.getAttribute('data-audio-index');
  var music = musicList[index];
  console.log('点击的音乐索引', index, music);
  // 显示歌词
  showLylic();
  // 播放音乐
  myaudio.setAttribute('src', music.url);
  myaudio.play();
}

// 显示歌词
var divLylic = document.getElementById('divLylic');
function showLylic() {
  var music = musicList[index];
  console.log('当前的歌词', music.lylic);
  // divLylic.innerHTML = music.lylic;
  // 歌词是行为单位
  var lines = music.lylic.split('\n');
  divLylic.innerHTML = '';
  for (var i = 0; i < lines.length; i++) {
    // 字符串.trim()是去掉头尾的空白字符
    var line = lines[i].trim();
    console.log('行歌词', line);
    // 提取时间信息（要求歌词的每一行都带有固定格式的时间信息：【00：01.11】Leave Out All The Rest）
    // 时间分秒信息在2开始的位置，5个字符
    var time = line.substr(1, 5); // 数据是01:39
    var times = time.split(':'); // 分割成两个01 39
    // 计算成秒数
    time = parseInt(times[0]) * 60 + parseInt(times[1]);
    console.log('时间信息', time);
    var div = document.createElement('div');
    // 把时间信息记录到div上，方便做时间的特效
    div.setAttribute('data-time-info', time);
    div.append(line);
    divLylic.append(div);
  }
}

// 音频播放的进度处理（歌词效果）
var timer = null;
var playing = false;
var duration = 0; //播放进度秒数
var progress = 0; //播放进度秒数
myaudio.addEventListener('loadedmetadata', function () {
  // 清除计时器
  if (timer) {
    progress = 0;
    clearInterval(timer);
  }
  playing = true;
  duration = parseInt(myaudio.duration);
  // 开始计时器处理播放特效，进度什么的
  timer = setInterval(processDuration, 1000);
});
// 播放进度实时处理
var current = 0; //当前播放时间div索引，默认是第一个
function processDuration() {
  progress++;
  console.log('播放进度', duration, progress);
  var divs = document.querySelectorAll('#divLylic > div');
  console.log(divs);
  for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    div.classList.remove('active'); //清除掉特效
    var time = parseInt(div.getAttribute('data-time-info'));
    if (progress == time) {
      // 时间和当前进度相同就是要做特效的div
      current = i;
    }
  }
  // 当前进度的div加上特效
  divs[current].classList.add('active');
}

// 字符串的知识点信息
var strInfo = '430702197406115231';
console.log(strInfo, '的长度：', strInfo.length);
// 获取字符串中的一部分,substr(开始的索引，字符数量),substring(开始的索引，结果索引)
console.log('字符串截取', strInfo.substr(6, 8), strInfo.substring(6, 14));
// 转义字符 \\==>\ \'==> ' \==>" \n==>换行
console.log('转义字符', 'ab\\c"\'1\n23');
// 特别字符分割
strInfo = 'abc||123||唐澳';
var strs = strInfo.split('||');
console.log(strInfo, '用||分割后的结果', strs);
// 查找字符串所在位置
strInfo = 'abc钢铁侠，钢铁侠，bbb';
console.log('钢铁侠在', strInfo, '中的位置', strInfo.indexOf('钢铁侠'));
console.log('小丑在', strInfo, '中的位置', strInfo.indexOf('小丑'));

huhuiyu.autoLogin(query);

// 作业，视频管理功能
// 音乐播放新版本，依赖后端数据
