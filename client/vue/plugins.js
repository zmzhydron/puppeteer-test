export default {
  install:function(Vue, options){
    Vue.prototype.$hello = function(name) {
      alert(`hello : ${name}`)
    }
  }
}