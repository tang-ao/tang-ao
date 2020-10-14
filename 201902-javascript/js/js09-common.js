console.log('in js09-common.js');
// 通过一个个性化名称的json变量来定义全局使用的对象！！！
var huhuiyu = {
  abc: '钢铁侠',
  isInt: function (str) {
    if (!str || isNaN(str)) {
      return false;
    }
    let numi = parseInt(str);
    let numf = parseFloat(str);
    if (numi == numf) {
      return numi;
    }
    return false;
  }
};

console.log(huhuiyu.isInt('abc'));
console.log(huhuiyu.isInt('123'));
console.log(huhuiyu.isInt('123.45'));

// 自运行function和let控制变量作用范围
(function() {
  console.log('自运行的function');
  // let声明的变量被控制在自运行的function范围里面
  let vfun = '钢铁侠';
  console.log(vfun);
  // 使用window对象将变量提升到全局可见级别
  let abc = { info: '绿甲龙'};
  window.huhuiyuAbc = abc;
})();

// 下面这个会报错，vfun这个变量离开作用域无法访问
// console.log(vfun);

// 使用自运行function中提升到全局的变量
console.log(huhuiyuAbc.info);

(function(){
  let vfun = '小丑';
  console.log(vfun);
})();