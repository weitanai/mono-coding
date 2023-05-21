//  fformulaeunction sumAll(...args) { // 数组名为 args
// //     let sum = 0;
// //     console.log(Array.isArray(args));
// //     for (let arg of args) sum += arg;
  
// /// laelet i = 0;

// // setTimeout(() => console.log(i), 100); // ?
// // // 假设这段代码的运行时间 >100ms
// // for(let j = 0; j < 100000000; j++) {
// //   i++;
// // }

// // function profy() {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() =>resolve(1));
// //     })
// // }

// // async function testProfiling() {
// //     const res = await profy();
// //     console.log(res);
// // }

// // testProfiling();

// let user ={name :'wei'};

// function test (user) {
//     let res = 'ye' + user.name;
//     console.log(res)
// }

// let an = test.call(user);


 
function testNoArg(a, b) {
    console.log(arguments[0], '------- arg after');
    a = 1;
    console.log(arguments[0], '----b1');
    arguments[0] = 'change arg';
    console.log(arguments);
    console.log(a, b);
}

testNoArg('test', 'b');

function testStrictArg(a, b) {
    'use strict';
    console.log(arguments[0], '------- arg after');
    a = 1;
    console.log(arguments[0], '----b1');
    arguments[0] = 'change arg';
    console.log(arguments);
    console.log(a, b);
}

testStrictArg('strictTest', 'strictB');