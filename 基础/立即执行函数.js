function makeCounter () {
  var i = 0
  return function () {
    console.log(++i);
  }
}