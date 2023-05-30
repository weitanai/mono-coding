// // goal:  manege a promise list;

// let pending = false;
// let callbacks = [];
// const p = Promise.resolve();

// function timeFn() {
//     p.then(flushCallbacks())
// }

// function flushCallbacks() {
//     pending = false;
//     const copies = callbacks.slice(0);
//     callbacks.length = 0;
//     for (let fn of copies) {
//         fn();
//     }
// }


// function nextP(fn) {
//     if (!fn) return;

//     const cb = function () {
//         try {
//             fn.call(this)
//         } catch (error) {
//             console.error(error);
//         }
//     }
//     callbacks.push(cb);
//     console.log(fn.name, pending);
//     if (!pending) {
//         timeFn();
//         pending = true;
//     }

// }

// function f1(){
//     setTimeout(()=> {
//         console.log('f1---','2000' );
//     }, 2000)
// }

// function f2(){
//     setTimeout(()=> {
//         console.log('f22---','2000' );
//     }, 2000)
// }

// nextP(f1);
// nextP(f2);



async function sleep(n, name = "test") {
    return new Promise(function (resolve, reject) {
        console.log(n, name, "start");
        setTimeout(() => {
            console.log(n, name, "end", "----");
            resolve({ n, name });
        }, n * 1000);
    });
}

// limit 并发数,  item 是async fn；
//  包装一个异步函数函数， 
// 怎么控制事件池 数量， 通过set的size，
// 当超过limit时， 先要pool的数量减少（里面的事件执行完毕），才能继续遍历事件数组，

async function asyncPoll({ limit = 2, items }) {
    const promises = [];
    const pool = new Set();

    for (const item of items) {
        const fn = async item => await item();
        const promise = fn(item);
        promises.push(promise);
        pool.add(promise);
        const clean = () => pool.delete(promise);
        promise.then(clean, clean);

        if (pool.size >= limit) {
            await Promise.race(pool);
        }
    }
    return Promise.all(promises);

}


async function start() {
    await asyncPoll({
        items: [
            () => sleep(1, "eat"),
            () => sleep(3, "sleep"),
            () => sleep(5, "play game"),
            () => sleep(2, "learn alg"),
            () => sleep(4, "learn vue and react")
        ]
    });
    console.log("end--- ");
}
start().then(res => console.log("res", res));
