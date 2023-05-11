//use strict;

function clone(target, map = new Map()) {
    if (isObject(target)) {
        // value is Object?
        let cloneTarget = Array.isArray(target) ? [] : {};
        if (map.get(target) !== undefined) {
            return map.get(target);
        }
        map.set(target, cloneTarget);
        for (const key in target) {
            // 对象前次的值 由后一次调用clone的返回值获得；
            if (isObject(target[key])) {
                cloneTarget[key] = clone(target[key], map);
            } else {
                cloneTarget[key] = target[key];
            }
        } 
        return cloneTarget;
    } else {
        return target;
    }
};

function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}
// const baseObj = {
//     name: 'wei', 
//     age: 11,
//     city: [1, 2]
// }
// baseObj.baseObj = baseObj;

// const res = clone(baseObj);

// console.log(res);


// custom new;
function Ttest(name) {
    this.name = name;
  }

  Ttest.prototype.get = ()=> {console.log('get--')}
function newP(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    console.log('first create obj', obj);
    const res = fn.apply(obj, arg);
    return res instanceof Object ? res : obj;
  }

  const t = new Ttest('ye');
  
//   console.log(t, t.name)

//   const nT = newP(Ttest, 'hello my new test');
//   console.log(nT); 


  // extend;

// 1 prototype chain

function SuperType() {
    this.property = true;
   }
   SuperType.prototype.getSuperValue = function() {
    return this.property;
   };
   function SubType() {
    this.subproperty = false;
   }
   // 继承 SuperType
   SubType.prototype = new SuperType(); 



class F {
    constructor(name) {
        this.name = name;
    }
    getName() { 
        return this.name;
    }
}

class Child extends F {
    constructor(age, name) {
        super(name);
        this.age = age;
    }
}


// proxy methods

const proxyTarget = {
    foo: 'foo', 
    name: 'name'
}


const hasProxy =  new Proxy(proxyTarget, {
    get(target, prop, receiver) {
        console.log(target, prop, receiver);
        return target[prop];
    },

    set (target, prop, value, receiver) {
        console.log(target, prop, value, receiver);
        return Reflect.set(...arguments);
    }
})



// function base 

function getG(...args) {
    //use strict;
    console.log(arguments, arguments.length, arguments[1]);
    arguments[1] = 20;
   
}


const callF = {
    nameCa: 'wei calf',
    say() {
        console.log(this.nameCa)
    }, 
    arrowFN: ()=>{
        console.log(...arguments, 'arrow')
        console.log(this, this.nameCa, 'arrow -----');
    }
}

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(
        student => console.log(this.title + ': ' + student)
      );
    }
  };
  
  group.showList();
// arrow fn

Function.prototype.myCall1 = function(context) {
    // 如果没有传或传的值为空对象 context指向window
    context = context || window
    let fn = mySymbol(context)
    context[fn] = this //给context添加一个方法 指向this
    // 处理参数 去除第一个参数this 其它传入fn函数
    let arg = [...arguments].slice(1) //[...xxx]把类数组变成数组，arguments为啥不是数组自行搜索 slice返回一个新数组
    context[fn](...arg) //执行fn
    delete context[fn] //删除方法
}



// 柯里昂
function curry(fn) {
    return function curried(...args) {
        console.log(fn.length, '----');
        if(args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...arg2) {
                return curried.apply(this, args.concat(arg2));
            }
        }
    }
}
function addT(a,b,c) {
    return a+b+c;
}


// 手写includes

Array.prototype.myIncludes = function(searchElement, fromIndex) {
    console.log('myIncludes', this, this.length);
    if (this === null) {
        throw new Error('undefined');
    }
    const len = this.length;
    if ( len === 0 || fromIndex >= len) return false;
    
    let beginIndex = fromIndex || 0;
    while (beginIndex < len) {
        if (this[beginIndex] === searchElement) {
            return true;
        }
        beginIndex++;
    }
    return false;
}

const arr = [1, 2, {name: 'wei'}];
const seacrhItem = {name: 'wei'}
console.log(arr.myIncludes(seacrhItem), arr.includes(seacrhItem) );
