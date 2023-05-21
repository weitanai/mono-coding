'use strict';

// const syb = Symbol(1);

// const obj = {
//     arr:  [1, 2, 3],
//     sym: syb,
//     str: 'hello',
//     de: {
//         first: 'first',
//         arr: [1, 3,6],
//         objD: {
//             deepK: 'deep key',
//         }
//     }
// }

// const dep = Object.assign({}, obj);
// console.log(dep);
// obj.de.first= 'second';
// console.log(dep);
// console.log(obj)
// const ps = JSON.stringify(obj);
// console.log(ps, 'before --');

// console.log(JSON.parse(ps));

const deepCopy = function (obj) {
    if (typeof obj !== 'object' || Array.isArray(obj)) {
        return obj;
    }
    const resObj = {};
    for (let key of Object.keys(obj)) {
        if (typeof obj[key] !== 'object') {
            resObj[key] = obj[key];
        } else {
            resObj[key] = deepCopy(obj[key]);
        }
    }
    return resObj;
}

const res = deepCopy(obj);
console.log(res);



//console.log(Object.prototype === Array.prototype.__proto__);

// var p1 = new Promise((resolve, reject) => {
// 	resolve('p1');
// });
// var p2 = new Promise((resolve, reject) => {
// 	resolve('p2');
// })
// (async () => {
//     const fetchData = () => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve('fetch data is me')
//             }, 1000)
//         })
//     }

//     // 抽离成公共方法
//     const awaitWrap = (promise) => {
//         return promise
//             .then(data => [null, data])
//             .catch(err => [err, null])
//     }

//     const [err, data] = await awaitWrap(fetchData())
//     console.log('err', err)
//     console.log('data', data)
//     // err null
//     // data fetch data is me
// })()

// slice.call
// function sCall() {

//     console.log(Array.prototype.slice.call(arguments));
// }

// console.log(102);


// const p1 = p.then(res=>res);
// p1.then(res=>console.log(res, 'p1'))



// class Fath{
//     constructor() {
//         this.fa = 'father';
//     }
// }

// class Ch extends Fath{
//     constructor() {
//         super();
//         this.child = 'child';
//     }
// }
// const child = new Ch()
// console.log(child);
// for(var i = 0; i < 5; i++) {
//     (function(j){
//         setTimeout(() => {
//             console.log(j);
//         }, j * 1000);
//     })(i)
// }

// let obj  = 1;
// function hello() {
//     obj = 2;
//     return obj;
// }
// export {hello, obj};


// // module.exports = {
// //     obj: obj,
// //     hello
// // }

// write instanceof
function new_instance_of(leftVaule, rightVaule) {
    let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
    leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
    while (true) {
        if (leftVaule === null) {
            return false;
        }
        if (leftVaule === rightProto) {
            return true;
        }
        leftVaule = leftVaule.__proto__
    }
}

// const regValue = /rotate\((.*)deg\)/

// const formData = new FormData();
// formData.append('hello', 'daog')

// console.log(formData)




// custom new;
// function newP(fn, ...arg) {
//     const obj = Object.create(fn.prototype);
//     console.log('first create obj', obj);
//     const res = fn.apply(obj, arg);
//     return res instanceof Object ? res : obj;
//   }
//   function Ttest(name) {
//     this.name = name;
//   }
//   const t = new Ttest('ye');

//   console.log(t, t.name)

//   const nT = newP(Ttest, 'hello my new test');
//   console.log(nT); 


// use strict;


function curry(fn) {
    return function curried(...args) {
        console.log(fn.length, '----');
        if(args.length >= fn.fflength) {
            return fn.apply(this, args);
        } else {
            return function(...arg2) {
                return curried.apply(this, args.concat(arg2));
            }
        }
    }
}

// function sum1(a , b, c) {
//     return  a+b+c;
// }
// const res = curry(sum1);

// const a = res(1)(3)(2);
// console.log(a)
// const arr = [1, 2, 3, 4, 5];

// function doAsync(time, cb) {
// 	if (cb) {
// 		setTimeout(cb, time);
// 	} else {
// 		return new Promise(resolve => {
// 			setTimeout(resolve, time);
// 		});
// 	}
// }

// function print(el) {
// 	return function() {
// 		console.log(el);
// 	};
// }
// console.time("promise all in");
// Promise.all(
// 	arr.map(item => {
// 		return doAsync(item * 100).then(print(`${item}-promise`));
// 	})
// ).then(() => {
// 	console.timeEnd("promise all in");
// });

// console.log('Script开始')
// setTimeout(() => {
//   console.log('第一个回调函数，宏任务1')
//   Promise.resolve().then(function() {
//     console.log('第四个回调函数，微任务2')
//   })
// }, 0)
// setTimeout(() => {
//   console.log('第二个回调函数，宏任务2')
//   Promise.resolve().then(function() {
//     console.log('第五个回调函数，微任务3')
//   })
// }, 0)
// Promise.resolve().then(function() {
//   console.log('第三个回调函数，微任务1')
// })
// console.log('Script结束')


// vite bug
// Internal package reinstallation, no hot update for pre-building

// const arr= Array.from(10);
// console.log(arr) 

function strip(num, precision = 12) {
    return +parseFloat(num.toPrecision(precision));
}


function n