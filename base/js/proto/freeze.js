const obj = new Object();

const obj2 = new Object();

Object.freeze(obj2.__proto__);

console.log(obj.__proto__, obj2.__proto__);;

obj.__proto__.hello = 'hello';

console.log(obj.__proto__, obj2.__proto__);;

obj2.__proto__.freeze = 'i am freeze';

console.log(obj.__proto__, obj2.__proto__);;



