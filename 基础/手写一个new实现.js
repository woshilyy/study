function create(fn, ...args) {
  var obj = new Object() // 创建一个新对象
  obj.__proto__ = fn.protype
  fn.apply(obj, ...args)
  return obj
}