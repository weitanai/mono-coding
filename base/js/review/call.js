Function.prototype.MyCall = function (ctx) {
    const context = ctx || window || global;
    console.log(arguments,"-ar");
    let arg = [...arguments].slice(1);
    context.fn = this;
    console.log(arg, "---arg", this);
    const result = context.fn(...arg);
    delete context.fn;
    return result;
};

function testMyCall() {
    console.log("---test mycall", this.callName);
}

const testCallObj = {
    callName: "test for my call",
};

testMyCall.MyCall(testCallObj);