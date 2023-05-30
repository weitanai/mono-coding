const strategies = {
    isNonEmpty: function (value, errorMsg) {
        if (value === "") {
            return errorMsg;
        }
    },
    minLength: function (value, length, errorMsg) {
        if (value.length < length) {
            return errorMsg;
        }
    },
    isMobile: function (value, errorMsg) {
        if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
            return errorMsg;
        }
    }
};


var validataFunc = function () {
    var validator = new Validator(); // 创建一个 validator 对象
    /***************添加一些校验规则****************/
    validator.add(registerForm.userName, "isNonEmpty", "用户名不能为空");
    validator.add(registerForm.password, "minLength:6", "密码长度不能少于 6 位");
    validator.add(registerForm.phoneNumber, "isMobile", "手机号码格式不正确");
    var errorMsg = validator.start(); // 获得校验结果
    return errorMsg; // 返回校验结果
};
var registerForm = document.getElementById("registerForm");
registerForm.onsubmit = function () {
    var errorMsg = validataFunc(); // 如果 errorMsg 有确切的返回值，说明未通过校验
    if (errorMsg) {
        alert(errorMsg);
        return false; // 阻止表单提交
    }
};

const Validator = function () {
    this.cache = [];
};


Validator.prototype.add = function (dom, rule, errorMsg) {
    let ary = rule.split(":");
    this.cache.push(function () {
        const strategy = ary.shift();
        ary.unshift(dom.value);
        ary.push(errorMsg);
        return strategies[strategy].apply(dom, ary);
    });
};

Validator.prototype.start = function () {
    for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
        var msg = validatorFunc(); // 开始校验，并取得校验后的返回信息
        if (msg) { // 如果有确切的返回值，说明校验没有通过
            return msg;
        }
    }
}; 