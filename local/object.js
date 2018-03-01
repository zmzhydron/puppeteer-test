'use strict'
var me = {
  name: `zmz`,
  valu1eOf: () => {
    return `fuckyou`
  }
}
Object.defineProperties(me, {
  "age": {
    configurable: false,
    value: 29,
    writable: true,
    enumerable: true,
  },
  job: {
    enumerable: true,
    configurable: true,
    get() {
      console.log("111111111")
      return `none`
    },
    set(val) {

    }
  }
})
class Notify {
  constructor() {
    this.watcher = {};
  }
  notify(before, current, o, key, ) {
    if (this.watcher[key]) {
      this.watcher[key].forEach(item => {
        item(before, current, o, key);
      })
    }
  }
  addWatch(key, fn) {
    if (this.watcher(key)) {
      this.watcher[key].push(fn);
    } else {
      this.watcher[key] = [fn];
    }
  }
  removeWatch(key, fn) {

  }
}
var nauthy = new Notify();

function addProps(o, key) {
  var val;
  var init = () => {};
  Object.defineProperty(o, key, {
    enumerable: true,
    configurable: true,
    set(value) {
      if (val !== value) {
        console.log("binggo", value, val);
        nauthy.notify(val, value, o, key);
      }
      val = value;
    },
    get() {
      return val;
    }
  })
}

function watch(key, callback) {
  nauthy.addWatch(key, callback);
}
addProps(me, 'sex');
addProps(me, 'salary');
watch(`sex`, (a, b, o, key) => {
  console.log(`before`, a, ` after`, b, o, key);
})
watch(`salary`, (a, b, o, key) => {
  console.log(`before`, a, ` after`, b, o, key);
})
me.sex = 'male';