// function getOuter () {
//   var date = '815'
//   function getDate (str) {
//     console.log(date + str);
//   }
//   return getDate
// }
// var today = getOuter()('今天');


// function createClosure () {
//   var name = 'jack'
//   return {
//     setStr:function () {
//       name = 'rose'
//     },
//     getStr:function () {
//       return name + ': hello'
//     }
//   }
// }
// var builder = new createClosure()
// builder.setStr()

// console.log( builder.getStr())

// var data = []

// for(var i = 0; i<3;i++) {
//   data[i] = (function (num) {
//     return function() {
//       console.log(num);
//     }
//   })(i)
// }
// data[0]()
// data[1]()
// data[2]()

// for (var i = 0; i < 3; i++ ){
//   (function(num){
//     setTimeout(() => {
//       console.log(num);
//     }, 1000);
//   })(i)
// }