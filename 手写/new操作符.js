function myNew (fn, ...args) {
    let obj = Object.create(fn.prototype)
    let res = fn.call(ob, ...args)
    if (res && (typeof res === 'object' || typeof res === 'function')) {
        return res;
    }
    return obj;
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.say = () => {
    console.log(this.age)
}