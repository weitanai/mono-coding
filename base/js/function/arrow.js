function privateValue(value) {
    let localValue = value;
    const obj = {
        get value() {
            console.log(this)
            return localValue;
        },
        set value(value) {
            localValue  = value;
        }
    }
    return obj;
}

const local = privateValue('how to use private');

console.log(local.value);

// not suit for arrow function;



const notSuitArrowObj = {
    local: 'not suit for arrow function',
    getValue: function() {
        console.log('getvalue---', this.local, this);
    }
}

notSuitArrowObj.getValue();

Function.prototype.MyCall = function (ctx) {
    const context = ctx || window || global;
    console.log(arguments,"-ar");
    let arg = [...arguments].slice(1);
    context.fn = this;
    console.log(arg, "---arg");
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