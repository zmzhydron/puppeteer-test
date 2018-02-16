import Trans from "./components/trascomp.vue"
import Shitman from "./components/shitman.vue"

const compList = [{
  name: "Trans",
  comp: Trans
}, {
  name: "Sm",
  comp: Shitman
}]
export default {
  install: function(Vue, options) {
    compList.forEach((item, index) => {
      let { name, comp: Comp } = item;
      Vue.component(name, Comp)
    })
    Vue.prototype.$hello = function(name) {
      alert(`hello : ${name}`)
    }
  }
}