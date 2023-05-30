const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

const f =  async function () {
    // Write your code here
    while(line = await readline()){
        let tokens = line.split(" ");
        console.log(tokens, tokens.length, [...tokens]);
        const set  = new Set(tokens[0].split(""));
        console.log(set.size);
        return set.size;
    }
};

const arr =[];
arr["c"] = 1;
console.log(arr, arr.length, arr["c"]++, arr, arr.length);