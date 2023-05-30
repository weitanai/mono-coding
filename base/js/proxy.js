// 1.一次只能对一个属性进行监听，需要遍历来对所有属性监听。这个我们在上面已经解决了。
// 2. 在遇到一个对象的属性还是一个对象的情况下，需要递归监听。
// 3. 对于对象的新增属性，需要手动监听
// 4. 对于数组通过push、unshift方法增加的元素，也无法监听

// use  Object.defineProperty to observe an object;
// const target = {
//     foo: 'foo',
//     bar: 'bar',
//     children: {
//         name: 'wei'
//     }
// }
// function observer(obj) {
//     if (typeof obj !== 'object' || obj === null) return;
//     Object.keys(obj).forEach(key => {
//         defineProperty(obj, key, obj[key])
//     })
// }
// function defineProperty(obj, key, val) {
//     //如果某对象的属性也是一个对象，递归进入该对象，进行监听
//     if (typeof val === 'object') {
//         observer(val)
//     }
//     Object.defineProperty(obj, key, {
//         get() {
//             console.log(`访问了${key}属性`)
//             return val
//         },
//         set(newVal) {
//             if (typeof newVal === 'object') {
//                 console.log('newVal is obj')
//                 observer(newVal);
//             }
//             console.log(`${key}属性被修改为${newVal}了`)
//             val = newVal
//         }
//     });
// }

// use proxy to deep observe an object;
let person = {
    age: 0,
    school: "xdu",
    arr: [1, 2],
    children: {
        name: "小明"
    }
};

let handler = {
    get(obj, key) {
        console.log("触发了get", key);
        if (key === "length") return;
        let res = Reflect.get(obj, key);
        return typeof res === "object" ? new Proxy(res, handler) : res;

    },
    set(obj, key, val) {
        console.log("触发了set", val);
        obj[key] = val;
        return true;
    }
};


const proxy = new Proxy(person, handler);

proxy.arr.push(3);