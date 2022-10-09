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

// const deepCopy = function(obj) {
//     if(typeof obj !== 'object' || Array.isArray(obj)) {
//         return obj;
//     }
//     const resObj = {};
//     for(let key of Object.keys(obj)) {
//         if (typeof obj[key] !== 'object') {
//             resObj[key] = obj[key];
//         }else {
//             resObj[key] = deepCopy(obj[key]);
//         }
//     }
//     return resObj;
// }

// const res = deepCopy(obj);
// console.log(res);



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
class EventEmitter{
    constructor(){
        this._events = {};
    }
    // 可以on多个函数
    on(eventName, callback){
        if(this._events[eventName]){
            if(this.eventName !== "newListener"){
                this.emit("newListener", eventName)
            }
        }
        const callbacks = this._events[eventName] || [];
        callbacks.push(callback);
        this._events[eventName] = callbacks
    }

    emit(eventName, ...args){
        const callbacks = this._events[eventName] || [];
        callbacks.forEach(cb => cb(...args));
    }
    // how to use this,  make a once function, push in  function arr , add then  filter function
    once(eventName, callback){
        const one = (...args)=>{
            callback(...args)
            this.off(eventName, one)
        }
        one.initialCallback = callback;
        this.on(eventName, one)
    }
    off(eventName, callback){
        const callbacks = this._events[eventName] || []
        const newCallbacks = callbacks.filter(fn => fn != callback && fn.initialCallback != callback /* 用于once的取消订阅 */)
        this._events[eventName] = newCallbacks;
    }
}


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

const regValue = /rotate\((.*)deg\)/

const formData = new FormData();
formData.append('hello', 'daog')

console.log(formData)



