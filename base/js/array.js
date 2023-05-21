const arr = new Array(1);
console.log(arr.length, Array.from('hello'));

const  arrowF = ()=> {
    console.log(this, arguments[0]);
}
arrowF(1)

function cus(a, b, c){
    console.log( a, restA );
}

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    while ((line = await readline())) {
        let tokens = line.split(" ");
        console.log('tokens',tokens);
    }
})();

// function test() {
//   const tokens1 = ['h', 'he', 'hel', 'hell', 'hello'];
//   const tokens = ['b', 'fas', 'bw', 'bww', 'bwwl', 'bwwln', 'bwwlm'];
//   const arr = [];
//   for (let str of tokens) {
//     const set = new Set(tokens);
//     set.delete(str);
//     let strLen = str.length - 1;
//     while (strLen > 0) {
//       if (!set.has(str.substring(0, strLen))) {
//         break;
//       }
//       if (strLen === 1) {
//         arr.push(str);
//       }
//       strLen--;
//     }
//   }
//   const resArr = arr.sort();
//   const resLen = resArr.length;
//   const ans = resLen > 0 ? resArr[resLen - 1] : '';
//   console.log(ans);
//   return ans;
// }
// console.log(test(), '--test');