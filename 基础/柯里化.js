function add(x, y) {
  return x + y
}

function curryingAdd (x) {
  return function (y) {
    return x+y
  }
}

console.log(curryingAdd(2)(3));