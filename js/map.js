const oo = {
    name: 'ye',
    say() {
        console.log('this name', this.name);
    },
    get getName() { 
        console.log('get name');
    }
}
let o = { x: 1, y: 2, arr: [1, 2] }; // An object with two properties

class Person {
    constructor(name) {
        // 添加到 this 的所有内容都会存在于不同的实例上
        this.name = name;
        this.age = 11;
    };
    sayAge() {
        console.log('say person age', this.name, '--');
    }
}
class child extends Person {
    constructor(name) {
        super(name)
    }
    sayName() {
        console.log('child---', this.name);
    }
}
const cl = new child('wei');


console.log( "\u00A9" ); // ©, 等同于 \xA9，只是使用了四位十六进制数表示而已
console.log( "\u044F" ); // я（西里尔字母）
console.log( "\u2191" ); // ↑（上箭头符号）

console.log( '𝒳'[0] ); // 显示出了一个奇怪的符号...
console.log( '𝒳'[1] ); // ...代理对的片段