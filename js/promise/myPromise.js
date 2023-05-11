class myPromise {
    constructor(excute) {
        this.init();
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
        try {
            excute(this.resolve, this.reject);
        } catch (error) {
            this.reject(error);
        }
    }

    init() {
        this.status = 'PENDGING';
        this.result = null;
        this.onFulfilledCallback = [];
        this.onRejectedCallback = [];
    }

    resolve(value) {
        console.log(this.status, '----------')
        if (this.status !== 'PENDGING') return;
        this.status = 'FULFILLED';
        console.log(this.status, 'after resolve');
        this.result = value;
        while (this.onFulfilledCallback.length) {
            console.log('onFulfilledCallback', this.onFulfilledCallback);
            const cb = this.onFulfilledCallback.shift();
            cb(this.result);
        }
    }

    reject(reason) {
        if (this.status !== 'PENDGING') return;
        this.status = 'REJECTED';
        this.result = reason;
    }


    // then接收两个回调，一个是成功回调，一个是失败回调
    // 当 Promise 状态为fulfilled执行成功回调，为rejected执行失败回调
    // 如 resolve 或 reject 在定时器里，则定时器结束后再执行then
    // then支持链式调用，下一次then执行受上一次then返回值的影响
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
        // ??why in myPromise this is undefined, arrow function can resolve it
        console.log('----------- coming then -----------');
        var thenPromise = new myPromise(  (resolve, reject)=> {
            const resolvePromise = cb => {
                try {
                    // 这步处理掉 第一次调用 fullfill or rejected
                    const x = cb(this.result);
                    console.log('result first callback ', x, x === thenPromise, thenPromise);
                    if (x === thenPromise && x) {
                        // 不能返回自身哦
                        throw new Error('不能返回自身。。。')
                    }
                    if (x instanceof myPromise) {
                        console.log(' -----------cb return value is promise instance')
                        // 如果返回值是Promise
                        // 如果返回值是promise对象，返回值为成功，新promise就是成功
                        // 如果返回值是promise对象，返回值为失败，新promise就是失败
                        // 谁知道返回的promise是失败成功？只有then知道
                        x.then(resolve, reject)
                    } else {
                        // 非Promise就直接成功
                        // 为下一个当前promise的下个then提供value
                        console.log('resolve next promise value-----')
                        resolve(x)
                    }
                } catch (err) {
                    // 处理报错
                    console.log('cath---error')
                    reject(err)
                    throw new Error(err)
                }
            }
            if (this.status === 'FULFILLED') {
                console.log('--0- this', this.status);
                resolvePromise(onFulfilled);
            } else if (this.status === 'REJECTED') {
                resolvePromise(onRejected)
            } else {
                console.log('this status pending---');
                this.onFulfilledCallback.push(resolvePromise.bind(this, onFulfilled));
                this.onRejectedCallback.push(resolvePromise.bind(this, onRejected));
            }

        })
        return thenPromise;
    }

    static all(promises) {
        const result = [];
        let count = 0;
        return new myPromise((resolve, reject) => {
            const addData = (index, value) => {
                result[index] = value;
                count++;
                if (count === promises.length) {
                    resolve(result)
                }
            }
            promises.forEach((p, index) => {
                if ( p instanceof myPromise) {
                    p.then(res=> {
                        addData(index, res);
                    }, err => reject(err));
                } else {
                    addData(index, p);
                }
            })
        })
    }

    static race(promises) {
        return new myPromise((resolve, reject) => {
            promises.forEach((p) => {
                if ( p instanceof myPromise) {
                    p.then(res=> resolve(res), err => reject(err))
                } else {
                    resolve(p);
                }
            })
        })
    }


}

// const test3 = new myPromise((resolve, reject) => {
//     setTimeout(() =>resolve(1))
//     // reject(100) // 输出 状态：成功 值：300
//   }).then(res => {
//     console.log(res * 2, res);
//   }, err => 3 * err)
    // .then(res => console.log('成功', res), err => console.log('失败', err))
  
// const p2 = new myPromise((resolve, reject) => {
//     // 解决方案， 事件队列,
//     resolve(2);
// });
// myPromise.all([3, p1, p2]).then(res=>console.log(res));

// myPromise.race([p1, p2, 3]).then(res=>console.log(res));

const module1 = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  const b = {
    x: 'bbb'
  }
  
  const unboundGetX = module1.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // Expected output: undefined
  
  const boundGetX = unboundGetX.bind(module1);
  console.log(boundGetX());
  // Expected output: 42
  