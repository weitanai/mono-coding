// 柯里昂
function curry(fn) {
    return function curried(...args) {
        console.log(fn.length, "----");
        if(args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...arg2) {
                return curried.apply(this, args.concat(arg2));
            };
        }
    };
}
function sum(a, b, c, d) {
    return a + b + c + d;
}

const c = curry(sum);

const res = c(2)(4)(5)(7);
console.log(res, 'resx')