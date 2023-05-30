// // first versino
// function fib(n) {
//     if (n <= 0) {
//         return 0;
//     }
//     if (n <= 1) {
//         return 1;
//     }
//     return fib(n - 1) + fib(n - 2)
// }



// arr record value;


// function fib(n) {
//     const arr = []
//     if (n <= 0) {
//         return 0;
//         arr[0] = 0;
//     }
//     if (n <= 1) {
//         return 1;
//         arr[1] = 1;
//     }
//     if (!arr[n - 1]) {
//         arr[n - 1] = fib(n - 1);
//     }
//     if (!arr[n - 2]) {
//         arr[n - 2] = fib(n - 2);
//     }
//     return arr[n-1] + arr[n-2]
// }

function arrFib(n) {
    const arr = [];
    arr[1] = 1;
    arr[2] = 1;
    for(let i= 3;i <= n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
}

const res = arrFib(10);
console.log(res);