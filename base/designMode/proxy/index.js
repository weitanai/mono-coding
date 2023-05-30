const localPath = "../..//assets/prototype.jpg";

const urlPath = "https://static.runoob.com/images/demo/demo1.jpg";

// var MyImage = (function () {
//     var imgNode = document.createElement('img');
//     document.body.appendChild(imgNode);
//     var img = new Image;
//     img.onload = function () {
//         imgNode.src = img.src;
//     };

//     return {
//         setSrc: function (src) {
//             imgNode.src = '../..//assets/prototype.jpg';
//             img.src = src;
//         }
//     }
// })();
// MyImage.setSrc('https://static.runoob.com/images/demo/demo1.jpg');

const myImage = (function () {
    const imgNode = document.createElement("img");
    document.body.appendChild(imgNode);
    return function (src) {
        imgNode.src = src;
    };
})();

// 不耦合
const proxyImage = (function () {
    const img = new Image();
    img.onload = function () {
        this.fn(this.src);
    };
    return function (fn, src, localPath) {
        img.src = src;
        img.fn = fn;
        fn(localPath);
    };
})();

proxyImage(myImage, urlPath, localPath);


// var mult = function () {
//     console.log('开始计算乘积');
//     var a = 1;
//     for (var i = 0, l = arguments.length; i < l; i++) {
//         a = a * arguments[i];
//     }
//     return a;
// };
// var proxyMult = (function () {
//     var cache = {};
//     return function () {
//         var args = Array.prototype.join.call(arguments, ',');
//         console.log(args);
//         if (args in cache) {
//             console.log('cache--');
//             return cache[args];
//         }
//         return cache[args] = mult.apply(this, arguments);
//     }
// })();
// proxyMult(1, 2, 3);
// proxyMult(3, 1, 2 )