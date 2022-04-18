// console.log(['1','2','3'].map(parseInt));

// 第N次写防抖，只执行一次

// function debounce (func, time) {
//     let timer = null
//     return () => {
//         clearTimeout(timer)
//         setTimeout(() => {
//            func.apply(this, arguments) 
//         }, time);
//     }
// }


// 节流，一段时间执行一次，下次接着执行

// function throttle (func, time) {
//     let activeTime = 0
//     return () => {
//         const current = Date.now()
//         if (current - activeTime > time) {
//             func.apply(this, arguments);
//             activeTime = Date.now()
//         }
//     }
// }

// set是一种集合，map是字典


var b = 10
(function b(){
    var b = 20
    console.log(this.b);
    console.log(b)
})()
