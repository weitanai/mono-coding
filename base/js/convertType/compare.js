// 如果操作数具有相同的类型，那么进行严格相等比较（不进行类型转换）。
// 如果一个操作数是 null，另一个操作数是 undefined，则它们被认为是相等的。
// 如果一个操作数是数字，另一个操作数是字符串，将字符串转换为数字，然后再进行比较。
// 如果一个操作数是布尔值，将布尔值转换为数字（true 转换为 1，false 转换为 0），然后再进行比较。
// 如果一个操作数是对象（包括数组和函数），另一个操作数是原始类型（数字、字符串或布尔值），则尝试将对象转换为原始类型，然后再进行比较。

const toPrimitive = value => (value.valueOf().toString());

const obj1 =  {a: 'a'};
const obj2 = {a: 'a'};



console.log(toPrimitive(obj1) == '[object Object]');  