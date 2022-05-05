// module.exports 与 exports 指向同一个对象
// require 时引入module.exports的对象， exports={} 也无法改变
module.exports.cat = 'cat';
exports.dog = 'dog';
exports.cat = 'not cat' // { cat: 'not cat', dog: 'dog' }
exports = {}; // console.log { cat: 'cat', dog: 'dog' }
module.exports = {}; // console.log {}


// 导出的counter是值， 而不是引用
let counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};


