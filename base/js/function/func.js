function debounce(fn, delay) {
    let timer;
    if (timer) {
        clearTimeout(timer);
    } else {
        timer = setTimeout(fn, delay);
    }
}
// 定义一个防抖函数
function debounce(fn, delay = 500) {
    let timer = null;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }
const d = debounce(()=>console.log('debounce'), 300);
for (let i = 0; i< 10; i++) {
    d()
}

// 节流
function throttle (fn, delay) {
    let prev = 0;
    return  (...args)=> {
        let now = new Date().getTime();
        if  (now - prev > delay) {
            fn.apply(...args);
            pre = now;
        } 
    }
}

const t =  throttle(()=>console.log('throttle,----------'), 300);

for (let i = 0; i< 10; i++) {
    t();
}