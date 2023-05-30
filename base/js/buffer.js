const fs = require("fs");



async function readSource() {
    const rs = fs.createReadStream("./file.md", { highWaterMark: 11 });
    // rs.setEncoding('utf8');
    let size = 0;
    const data = [];
    return new Promise((resolve, reject) => {
        rs.on("data", (chunk) => {
            size += chunk.length;
            data.push(Buffer.from(chunk));
        });
        rs.on("end", () => {
            const buf = Buffer.concat(data, size);
            resolve(buf.toString());
        });
        rs.on("error", (err) => reject(err));
    });
}

async function read() {
    const res = await readSource();
    console.log(res, "---");
}




// console.log('str--', str.valueOf().toString())
// console.log('num--', numStr.valueOf().toString())
// console.log(arr.valueOf(), obj(arr), 'arr--', o.valueOf().toString())
// console.log(1 - obj(numStr), 'mi');



let uri = "http://www.wrox.com/illegal value.js<srcipt></srcipt>";
// "http://www.wrox.com/illegal%20value.js#start"
// console.log(encodeURI(uri));
// "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start"
// console.log(encodeURIComponent(uri));

const ob = {
    key: 1,
    arr: [1, 2, 3]
};
const deepCopy = function (obj) {
    if (typeof obj !== "object") {
        return obj;
    }
    if (Array.isArray(obj)) {
        return [...obj];
    }
    const resObj = {};
    for (let key of Object.keys(obj)) {
        if (typeof obj[key] !== "object") {
            resObj[key] = obj[key];
        } else {
            resObj[key] = deepCopy(obj[key]);
        }
    }
    return resObj;
};

function SuperType() {
    this.property = true;
}
SuperType.prototype.getSuperValue = function () {
    return this.property;
};
function SubType() {
    this.subproperty = false;
}
// 继承 SuperType
SubType.prototype = new SuperType();

// function defineActive(obj, key) {
//     const property = Object.getOwnPropertyDescriptor(obj, key);
//     const getter = property && property.get;
//     let val = obj[key];

//     return Object.defineProperty(obj, key, {
//         enumerable: true,
//         configurable: true,
//         get() {
//             console.log(getter, '---', 'val', val);;
//             return getter ? getter.call(obj) : val;
//         },
//         set(newVal) {
//             console.log(newval,'---newvalu')
//             return newVal;
//         }
//     })
// }
// const dobj = {
//     str: 'hello',
//     arr: [1, 2, 3]
// }

// const res = defineActive(dobj, 'arr');
// console.log(res.arr)
function Ttest(name) {
    this.name = name;
  }
  Ttest.prototype.hello = ()=>console.log("say hello");
  Ttest.prototype.get = ()=> console.log("get--");

function newP(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    console.log("first create obj", obj);
    const res = fn.apply(obj, arg);
    return res instanceof Object ? res : obj;
  }



const str = "hello";
const o = { k: 1 };
const emptyObj = {};
const oneArr = [];
const emptyArr = [];
const numStr = "23";

