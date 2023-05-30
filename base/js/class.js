// const obj = {
//     name: 'weitanai',
//     say() {
//         console.log(this.name)
//     }
// }

// obj.say()

// setTimeout(()=>{
//     obj.say();
// }, 100);


const p = new Promise((resolve, reject) =>{
    reject("hhh");
});
p.then().catch((err) =>console.log(err));