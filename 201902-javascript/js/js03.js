console.log('in js03.js...');
// 数组，是一组数据的意思
// 特征，有大小限制，通过下标（索引数）访问内容
// 声明数组并给出初始数据
let arr01 = [1, '张三', 123.45];
// 获取页面上一组特定的元素，返回的就是数组
let arr02 = document.querySelectorAll('.test');
console.log(arr01, arr02);
// 下标访问
console.log(arr01[1], arr02[2], arr02.length);
// 动态添加元素
arr01.push('新添加元素');
console.log('添加后的数组', arr01);
// 特定字符串和数组的转换
let arr03 = [1, 22, 333, 4444, 55555];
console.log('数组join成字符串', arr03.join('==='), arr03.join(''));
let strInfo = '1===22===333';
console.log('字符转数组', strInfo.split('==='));

// json 复合型数据类型，可以组合任意数据成为一个单一变量
// 格式为：{key:value},key是字符类型，value可以是任意数据类型
let json01 = { sno: 190201, name: '吕佳龙' };
// 通过key可以获取到对应的值
console.log('姓名', json01.name);
// 复杂的json
let json02 = {
  code: 200,
  message: '应答成功',
  resultData:{
    time: 12345678,
    list: [1, 22, 33]
  }
};
// 多级就用.链接
console.log('多层级的json值', json02.resultData.time);
let list = json02.resultData.list;
console.log('单独取值', list.join('=='));
// 字符串和json的转换
console.log('json转字符串', JSON.stringify(json02));
let strJson = '{"son": 100,"name": "钢铁侠" }';
let json03 = JSON.parse(strJson);
console.log('字符串转json', json03.name, strJson.name);

