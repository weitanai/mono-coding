const data = {
    text: 'hello vue3',
    ok: true,
    arr: [1, 2]

}

const bucket = new WeakMap();

const prxoyData = new Proxy(data, {
    get(target, key) {
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
        console.log('activeEffect', activeEffect.deps, bucket)

        return target[key];
    },
    set(target, key, value) {
        target[key] = value;
        let depsMap = bucket.get(target);
        console.log(depsMap);
        if (!depsMap) {
            return;
        }
        const effect = depsMap.get(key);
        console.log(effect, '---list');
        const effectsToRun = new Set(effect) // 新增
        console.log(effectsToRun, activeEffect)
        effectsToRun && effectsToRun.forEach(effectFn => effectFn()) 

        return true;
    }
});

let activeEffect;

function effect(fn) {
    const effectFn = ()=>{
    cleanUp(effectFn);
        activeEffect = effectFn;
        fn();
    }
    effectFn.deps = [];
    effectFn();
}
function cleanUp(effectFn) {
    console.log(effectFn.deps, 'cleanup');
    for (let i = 0; i < effectFn.deps.length; i++) {
        const deps = effectFn.deps[i];
        deps.delete(effectFn);
    }
}

effect(() => {
    document.body.innerHTML = prxoyData.arr;
    console.log('render html');
});

const btn = document.createElement('button');
btn.innerHTML='add proxy arr data';
document.body.appendChild(btn);

btn.addEventListener('click', () => {
    prxoyData.arr.push(Math.random()*100);
})