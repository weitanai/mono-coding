// function sumAll(...args) { // 数组名为 args
//     let sum = 0;
//     console.log(Array.isArray(args));
//     for (let arg of args) sum += arg;
  
//     return sum;
// }
// sumAll(1, 2, 3);
// let i = 0;

// setTimeout(() => console.log(i), 100); // ?

// // 假设这段代码的运行时间 >100ms
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }

// function profy() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>resolve(1));
//     })
// }

// async function testProfiling() {
//     const res = await profy();
//     console.log(res);
// }

// testProfiling();

let user ={name :'wei'};

function test (user) {
    let res = 'ye' + user.name;
    console.log(res)
}

let an = test.call(user);
