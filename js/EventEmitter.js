class EventEmitter {
    constructor() {
        this._events = {};
    }
    // 可以on多个函数
    on(eventName, callback) {
        if (this._events[eventName]) {
            if (this.eventName !== "newListener") {
                this.emit("newListener", eventName)
            }
        }
        const callbacks = this._events[eventName] || [];
        callbacks.push(callback);
        this._events[eventName] = callbacks
    }

    emit(eventName, ...args) {
        const callbacks = this._events[eventName] || [];
        callbacks.forEach(cb =>{
            console.log(args, 'arg');
            cb(...args)
        });
    }
    // how to use this,  make a once function, push in  function arr , add then  filter function
    once(eventName, callback) {
        const one = (...args) => {
            callback(...args)
            this.off(eventName, one)
        }
        one.initialCallback = callback;
        this.on(eventName, one)
    }
    off(eventName, callback) {
        console.log(eventName, callback);
        const callbacks = this._events[eventName] || []
        // 删除数组里的回调函数
        const newCallbacks = callbacks.filter(fn => fn != callback && fn.initialCallback != callback /* 用于once的取消订阅 */)
        this._events[eventName] = newCallbacks;
    }
}
