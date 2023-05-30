const data = {
    foo: "foo",
    bar: "bar",
    age: 1
};

const bucket = new WeakMap();
let activeEffect;
const effectStack = [];

export function ProxyData(data) {
    return  new Proxy(data, {
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
    
            const effectsToRun = new Set(); // 新增
    
            effect && effect.forEach( effectFn => {
                if (effectFn !== activeEffect) {
                    effectsToRun.add(activeEffect);
                }
            });
            effectsToRun.forEach(effectFn => {
                if (effectFn && effectFn.options.scheduler) {
                    effectFn.options.scheduler(effectFn);
                } else {
                    effectFn && effectFn();
                }
            }); 
    
            return true;
        }
    });
}
export const proxyData = ProxyData(data);


"";
export function effect(fn, options={}) {
    const effectFn = ()=>{
        cleanUp(effectFn);
        activeEffect = effectFn;
        effectStack.push(effectFn);
        const res = fn();
        effectStack.pop();
        activeEffect = effectStack[effectStack.length - 1];
        return res;
    };
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


// effect(()=> {
//     console.log('excute fn1');
//     effect(()=> {
//         console.log('excute fn2');
//         temp2 = proxyData.bar;
//     });
//     temp1 = proxyData.foo;
// });
