function mySettimeout (fn, t) {
  let timer = null;
  function interval () {
    fn();
    timer = setTimeout(interval, t)
  }
  interval()
  return {
    cacel:()=>{
      clearTimeout(timer)
    }
  }
}
console.log('object');
// let a=mySettimeout(()=>{
//   console.log(111);
// },1000)