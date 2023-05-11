let activeEffect;
const effectStack = [];
const bucket = new WeakMap();




export function effect(fn, options={}) {
    const effectFn = ()=>{
        cleanUp(effectFn);
        activeEffect = effectFn;
        // effectStack.push(effectFn);
        const res = fn();
        // effectStack.pop();
        // activeEffect = effectStack[effectStack.length - 1];
        return res;
    }
    effectFn.options = options;
    effectFn.deps = [];
    if (!options.lazy) {
        effectFn();
    }
    return effectFn;
}
export function cleanUp(effectFn) {
    for (let i = 0; i < effectFn.deps.length; i++) {
        const deps = effectFn.deps[i];
        deps.delete(effectFn);
    }
}

const data = {
    foo: 1,
    bar: 2,
}
const proxyData = new Proxy(data, {
    get(target, key) {
        console.log(target, key, target[key]);
        if (!activeEffect) {
            return;
        }
        let depsMap = bucket.get(target);
        if (!depsMap) {
            bucket.set(target, (depsMap = new Map()));
        }
        let deps = depsMap.get(key);
        if (!deps) {
            depsMap.set(key, (deps = new Set()));
        }
        deps.add(activeEffect);
        activeEffect.deps.push(deps);
        return target[key];
    },
    set(target, key, value) {
        target[key] = value;
        let depsMap = bucket.get(target);
        if (!depsMap) {
            return;
        }
        const effect = depsMap.get(key);

        const effectsToRun = new Set() // 新增

        effect && effect.forEach( effectFn => {
            // if (effectFn !== activeEffect) {
                effectsToRun.add(activeEffect);
            // }
        })
        console.log('before--runing--')
        effectsToRun.forEach(effectFn => {
            if (effectFn && effectFn.options.scheduler) {
                effectFn.options.scheduler(effectFn);
            } else {
                effectFn && effectFn();
            }
        }) 

        return true;
    }
});



const jobQueue = new Set();
const p = Promise.resolve();

let isFlushing = false;

function flushJob() {
    if (isFlushing) return;

    isFlushing = true;

    p.then(() => {
        jobQueue.forEach(job => job());
    }).finally(() => {
        isFlushing = false;
    })
}


// effect(() => {
//     console.log('some obj data');
// }, {
//     scheduler(fn) {
//         jobQueue.add(fn);
//         flushJob();
//     }
// })


function computed(getter) {
    const effectFn = effect(getter, {
        lazy: true,
        scheduler() {
            // 修改值时执行
            dirty = true;
        }
    });
    let dirty = true;
    let value;
    const obj = {
        get value() {
            if (dirty) {
                console.log('---dirty value', effectFn.options);
                value = effectFn();
                dirty = false;
            }
            return value;
        }
    }
    return obj;
}

const res = computed(()=>proxyData.foo + proxyData.bar)

console.log(res.value, 'computed res---');

proxyData.foo++;

console.log(proxyData.foo, 'proxy is work');
console.log(res.value, 'computed res---');