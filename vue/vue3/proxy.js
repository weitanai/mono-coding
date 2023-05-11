const data = {
    text: 'hello vue3'
}

const set = new Set();

const prxoyData = new Proxy(data, {
    get(target, key) {
        if (activeEffect) {
            set.add(activeEffect);
        }
        return target[key];
    },
    set(target, key, value) {
        target[key] = value;
        set.forEach(fn => fn());
        return true;
    }
});

let activeEffect;

function effect(fn) {
    activeEffect = fn;
    fn();
}

effect(() => {
    document.body.innerHTML = prxoyData.text;
    console.log('render html');
});

prxoyData.notExist = 'new vue3'
