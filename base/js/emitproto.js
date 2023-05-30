function eventEmit() {
    const newY =  Symbol();
    const obj = {
        [newY]: {}
    };
    this._events = obj[newY];
    this.paused = false;
}


// 可以on多个函数
eventEmit.prototype.on = function (eventName, callback) {
    if (this._events[eventName]) {
        if (this.eventName !== "newListener") {
            this.emit("newListener", eventName);
        }
    }
    const callbacks = this._events[eventName] || [];
    callbacks.push(callback);
    this._events[eventName] = callbacks;
};

eventEmit.prototype.emit = function (eventName, ...args) {
    if (!this.paused) {
        const callbacks = this._events[eventName] || [];
        const pList = [];
        callbacks.forEach(cb => {
            const fn = async item => await item();
            const promise = fn(cb);
            pList.push(promise);
        });
        const pa = Promise.all(pList);
        pa.then(res=> console.log("palist--",res));
        // });
    }
};

eventEmit.prototype.pause = function () {
    // 暂停事件触发
    this.paused = true;
};

eventEmit.prototype.recover = function () {
    // 暂停事件触发
    this.paused = false;
};
eventEmit.prototype.destroy = function () {
    // 销毁事件监听
    this.events = {};
    this.paused = false;
};

eventEmit.prototype.off = function (eventName, callback) {
    console.log(eventName, callback);
    const callbacks = this._events[eventName] || [];
    // 删除数组里的回调函数
    const newCallbacks = callbacks.filter(fn => fn != callback && fn.initialCallback != callback /* 用于once的取消订阅 */);
    this._events[eventName] = newCallbacks;
};


const item = new eventEmit();


async function sleep(n, name = "test") {
    return new Promise(function (resolve, reject) {
        console.log(n, name, "start");
        setTimeout(() => {
            console.log(n, name, "end", "----");
            resolve({ n, name });
        }, n * 1000);
    });
}

item.on("test", () => sleep(5, "eat"));
item.on("test", () => sleep(3, "sleep"));
item.on("test", () => sleep(1, "play game"));

item.emit("test");