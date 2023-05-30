// const event = {
//     clientList: [],
//     listen: function (key, fn) {
//         if (!this.clientList[key]) {
//             this.clientList[key] = [];
//         }
//         this.clientList[key].push(fn);
//     },
//     trigger: function (key, fn) {
//         const key = Array.prototype.shift.call(arguments);
//         fns = this.clientList[key];

//         if (!fns) return false;

//         for (let fn of fns) {
//             fn.apply(this, arguments);
//         }
//     },
//     remove: function (key, fn) {
//         const fns = this.clientList[key];
//         if (!fns) return false;

//         if (!fn) {
//             fns.length = 0;
//         } else {
//             for (const i = 0; i < fns.length; i++) {
//                 if (fns[i] === fn) {
//                     fns.splice(i, 1);
//                 }
//             }
//         }

//     }
// }

// const inStallEvent = function (obj) {
//     for (const i in events) {
//         obj[i] = events[i];
//     }
// }



// global event listen;

var Event = (function () {
    var clientList = {},
        listen,
        trigger,
        remove;
    listen = function (key, fn) {
        if (!clientList[key]) {
            clientList[key] = [];
        }
        clientList[key].push(fn);
    };
    trigger = function () {
        var key = Array.prototype.shift.call(arguments),
            fns = clientList[key];
        if (!fns || fns.length === 0) {
            return false;
        }
        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments);
        }
    };
    remove = function (key, fn) {
        var fns = clientList[key];
        if (!fns) {
            return false;
        }
        if (!fn) {
            fns && (fns.length = 0);
        } else {
            for (var l = fns.length - 1; l >= 0; l--) {
                var _fn = fns[l];
                if (_fn === fn) {
                    fns.splice(l, 1);
                }
            }
        }
    };
    return {
        listen: listen,
        trigger: trigger,
        remove: remove
    };
})();