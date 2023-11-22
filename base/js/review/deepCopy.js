const syb = Symbol(1);

const obj = {
    arr:  [1, 2, 3],
    sym: syb,
    str: 'hello',
    de: {
        first: 'first',
        arr: [1, 3,6],
    objD: {
            deepK: 'deep key',
        }
    }
}
const dep = Object.assign({}, obj);
console.log(dep);
obj.de.first= 'second';
console.log(dep);
console.log(obj)
const ps = JSON.stringify(obj);
console.log(ps, 'before --');

console.log(JSON.parse(ps));

const deepCopy = function (obj) {
    if (typeof obj !== 'object' || Array.isArray(obj)) {
        return obj;
    }
    const resObj = {};
    for (let key of Object.keys(obj)) {
        if (typeof obj[key] !== 'object') {
            resObj[key] = obj[key];
        } else {
            resObj[key] = deepCopy(obj[key]);
        }
    }
    return resObj;
}

const res = deepCopy(obj);
console.log(res);
