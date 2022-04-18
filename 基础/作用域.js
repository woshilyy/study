// var scope = 'global'

// function checkscope () {
//   var scope = 'local scope'

//   function f() {
//     return console.log(scope)
//   }
//   return f()
// }
// var foo = checkscope()
// foo()

// 1、进入全局代码，创建全局执行上下文，全局执行上下文压入执行上下文栈
// 2、全局执行上下文初始化
// 3、执行checkscope函数，创建checkscope执行上下文，checkscope执行上下文被压入执行上下文栈
// 4、checkscope执行上下文初始化，创建变量，作用域链，this
// 5、checkscope函数执行完毕，checkscope执行上下文从执行上下文栈弹出
// 6、执行f函数，创建f函数执行上下文，f执行上下文被压入上下文执行栈
// 7、f执行上下文初始化，创建变量对象，作用域链，this等
// 8、f函数执行完毕，f函数上下文从执行上下文栈弹出



  // var data = []

  // for(var i = 0 ;i<3;i++) {
  //   data[i] = function(i){
  //     return function () {
  //       console.log(i)
  //     }
  //   }(i)
  // }

  // data[0]()
  // data[1]()
  // data[2]()



  