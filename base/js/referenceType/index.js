// const user = {
//     name: 'wei',
//     hi() {
//         console.log('hi', this.name);
//     }
// }
// //仔细看的话，我们可能注意到 obj.method() 语句中的两个操作：
// // 首先，点 '.' 取了属性 obj.method 的值。
// // 接着 () 执行了它。
// const userName =  user.name === 'ye'? user : user.hi;
// userName()

class User {
    constructor(name) {
        this.name = name;
        this.sayName = this.sayName.bind(this);
    }

    sayName() {
        return this.name + "hhhh";
    }
}

const user = new User();
const res = user.sayName();
console.log(res);