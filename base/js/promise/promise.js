// try {
//     throw new Error('hhh')
//  }catch (err) {
//     console.log(err)
//  }
// new Promise(function (resolve, reject) {
//     reject(new Error('hhh'))
// }).catch(err=>console.log(err))

// new Promise((resolve, reject) => {

//     throw new Error("Whoops!");

//   }).catch(function(error) { // (*)

//     if (error instanceof URIError) {
//       // 处理它
//     } else {
//       console.log("Can't handle such error");

//       throw error; // 再次抛出此 error 或另外一个 error，执行将跳转至下一个 catch
//     }

//   }).then(function() {
//     console.log("--then")
//     /* 不在这里运行 */
//   }).catch(error => { // (**)

//     console.log(`The unknown error has occurred: ${error}`);
//     // 不会返回任何内容 => 执行正常进行

//   });


//   new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       reject(new Error("wh---"));
//     }, 100);
//   }).catch(err=>{
//     console.log(err.name, '--name');
//     console.log(err.message, '--message');
//     console.log(err.stack);
//     console.log(err, '---err')
//   });


//   new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         throw new Error("wh")

//     }, 100);
//   }).catch(console.log);

function proError() {

    try {
        // 工作
        console.log("workin g---");
        return 1;
    } catch (err) {
        // 处理 error
    } finally {
        // 清理工作空间
        console.log("finnaly");
    }
}



let urls = [
    "https://api.github.com/users/iliakan",
    "https://api.github.com/users/remy",
    "https://noshchurl"
];

//   // 将每个 url 映射（map）到 fetch 的 promise 中
//   let requests = urls.map(url => fetch(url));

//   // Promise.all 等待所有任务都 resolved
//   Promise.all(requests)
//     .then(responses => responses.forEach(
//       response => console.log(`${response.url}: ${response.status}`)
//     )).catch(err=>console.log(err, '--'));

// promisify


function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}


let loadProsise = function (src, callback) {
    return new Promise((resolve, reject) => {
        loadScript(src, (err, script) => {
            if (err) {
                reject(err);
            } else {
                resolve(script);
            }
        });
    });
};