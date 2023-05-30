// 点击按钮，就执行一次函数，申请一块内存;
const ele = document.querySelector("#btn");

const arr = [];
ele.addEventListener("click", function() {
	var a = new Array(100000).fill(1);
  console.log(b);
	var b = new Array(20000).fill(1);
  arr.push(a);
});