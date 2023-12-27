const A = require('./common-a.js');
console.log(A.message); // 输出：Hello

A.updateMessage('Hello, world!');
console.log(A.message); // 输出：Hello