const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    let tokens = line.split(" ");
    let s = tokens[0];
    let t = tokens[1];
    let a = tokens[2];
    let negativeA = - a;
    let b = tokens[3];
    let negativeB = - b;

    let poRes = 0;
    let neRes = 0;
    let amount = t - s;
    let poAmount = amount;
    while (poAmount > 0) {
      if (poAmount > b) {
        poAmount -= b;
      } else {
        if (poAmount > 0) {
          poAmount -= a;
          poRes++;
          if (poAmount === 0) {
            break;
          }
        }
      }
    }
    const res = poRes > neRes ? neRes : poRes;
    console.log(res);
    return res;

  }
})();


