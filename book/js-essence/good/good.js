// 函数是顶级
// 基于原型的继承
// 对象字面量与数组字面量，object literal & array literal

Promise.prototype.myRace= function(promise){
    return new  Promise((resolve, reject)=> {
        for(const item of promise) {
            if (item instanceof Promise) {
                item().then((iRes, iRej) => {
                    resolve(iRes);
                }).catch(reject(iRej));
            } else {
                resolve(item);
            }
        }
    });
}
function exch(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quick3(arr, lo, hi) {
    let lt = lo,
        i = lo + 1,
        gt = hi;
    if (hi < lo) return;
    let v = arr[lo];
    while (i <= gt) {
        if (arr[i] > v) exch(arr, lt++, i++);
        else if (arr[i] < v) exch(arr, i, gt--);
        else i++;
    }

    quick3(arr, lo, lt - 1);
    quick3(arr, gt + 1, hi);
    return arr;
}


const test= [2, 3, 3, 2, 5,1,4];
const sortArr = quick3(test, 0, test.length-1);
console.log('sortArr---', sortArr);
