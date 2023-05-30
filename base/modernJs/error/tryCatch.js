// 学习地址  https://zh.javascript.info/try-catch#trycatch-yu-fa 
// 如果在“计划的（scheduled）”代码中发生异常，例如在 setTimeout 中，则 try...catch 不会捕获到异常：

function syncTry() {
    try {
        setTimeout(() => {
            console.log(notExist);
        }, 100);
    } catch (e) {
        console.log("-------------------------------- sync console");
        console.log(e);
    }
}
// syncTry();

//  throw 处理具体错误

function handleError() {
    try {
        json = "{\"age\": 20}";
        const parseJsonRes = JSON.parse(json);
        if (!parseJsonRes.name) {
            throw new Error("Incomplete data: no name");
        }
    } catch (e) {
        console.log("handle error", e.message, e);
    }
}
// handleError();


// “再次抛出（rethrowing）”技术可以被更详细地解释为：
// Catch 捕获所有 error。
// 在 catch (err) {...} 块中，我们对 error 对象 err 进行分析。
// 如果我们不知道如何处理它，那我们就 throw err。
function readData() {
    let json = "{ \"age\": 30 }";

    try {
        // ...
        blabla(); // error!
    } catch (err) {
        // ...
        if (!(err instanceof SyntaxError)) {
            throw err; // 再次抛出（不知道如何处理它）
        }
    }
}

readData();


message;
// Error 信息。
// url
// 发生 error 的脚本的 URL。
// line，col
// 发生 error 处的代码的行号和列号。
// error
// Error 对象。

