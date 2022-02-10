class EventEmitter {
  constructor () {
    this.events = {}
  }
  // 实现订阅
  on (type, callback) {
    if (!this.events[type]) {
      this.events[type] = [callback]
    } else {
      this.events[type].push(callback)
    }
  }
  // 删除订阅
  off (type, callback) {
    if (!this.events[type]) return
    this.events[type] = this.events[type].filter((item) => {
      return item !== callback
    }) 
  }

}