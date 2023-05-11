## html event

- 第一个问题是时机问题。
- HTML 与 JavaScript 强耦合





## dom2 event

- 通过 addEventListener()添加的事件处理程序只能使用 removeEventListener()并传入与添 加时同样的参数来移除

- 事件处理程序会被添加到事export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890件流的冒泡阶段，主要原因是跨浏览器兼容性好



```js
let btn = document.getElementById("myBtn");
let handler = function() {
 console.log(this.id);
};
btn.addEventListener("click", handler, false);
// 其他代码
btn.removeEventListener("click", handler, false); // 有效果！
```



# question



- JavaScript 中如何取消请求

- ## 怎么实现大型文件上传？
