// 原型链继承
// 原型继承

// function Parent () {
//   this.name = ['kevien']
// }
// Parent.prototype.getName = function () {
//   console.log(this.name)
// }

// function Child () {}

// Child.prototype = new Parent()

// var child1 = new Child ()

// child1.name.push('yumi')
// console.log(child1.name);

//  var child2 = new Child()

//  console.log(child2.name);

 // 问题，创建Child实例的时候，不能像Parent传参

 


 // 借用构造函数
//  function Parent () {
//    this.names = ['kevien']
//  }
//  function Child () {
//    Parent.call(this)
//  }
//  var child1 = new Child()

//  child1.names.push('yumi')

//  console.log(child1.names)

//  var child2 = new Child()
//  console.log(child2.names);

 // 避免了实例共享，可以在child中对parent传参


// function Parent (name) {
//   this.name = name
// }

// function Child (name) {
//   Parent.call(this, name)
// }
// var child1 = new Child('kevin')
// console.log(child1.name);

// var child2 = new Child('yumi')
// console.log(child2.name)

//组合继承 原型链和经典继承双剑合璧

// function Parent (name) {
//   this.name = name
// }

// Parent.prototype.getName = function () {
//   console.log(this.name);
// }

// function Child (name, age) {
//   Parent.call(this, name)
//   this.age = age
// }

// Child.prototype = new Parent()

// Child.prototype.constructor = child

// 原型式继承

// function createObj (o) {
//   function F () {}
//   F.prototype = o
//   return new F()
// }


// function Parent (name) {
//   this.name = name
//   this.colors = ['blue', 'green']
// }

// Parent.prototype.getName = function () {
//   console.log(this.name)
// }

// function Child(name, age) {
//   Parent.call(this, name)
//   this.age = age
// }
// // 关键的三步

// var F = function () {}

// F.prototype = Parent.prototype

// Child.prototype = new F()

// var child1 = new Child('kevien', '18')

// console.log(child1)

// 封装方法

// function createObj (o) {
//   function F () {}
//   F.prototype = o
//   return new F()
// }

// function prototype(parent, child) {
//   var prototype = createObj(parent)
//   prototype.constructor = child
//   child.prototype = prototype
// }

