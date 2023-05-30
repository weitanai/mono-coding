const obj = {
    name: "weitanai",
    sayName() {
        console.log("this.name", this.name);
    },
    setName(name="new name") {
        this.name = name;
    }
};

function hookFn(target, property) {
    return function() {
        console.log("function call", property, [...arguments]);
        return target[property].call(target, ...arguments);
    };
}

const moniterObjFn = new Proxy(obj, {
    get(target, property, receiver) {
        let value = Reflect.get(target, property, receiver);
        if (typeof value === "function") {
            return hookFn(target, property);
        }
    }
});

moniterObjFn.sayName();

moniterObjFn.setName("my name");

const encodedData = btoa("Hello, world"); // 编码字符串
const decodedData = atob(encodedData); // 解码字符串
