// 进入执行上下文
// 执行代码

function foo(a) {
  var b = 2
  function c() {}
  var d = function() {}

  b = 3
}

foo(1)