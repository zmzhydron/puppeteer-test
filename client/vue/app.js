import Main from "./main.vue"
import Plugins from "./plugins.js"
import Vue from "vue"
import { name, aaa, saymyname } from "./router"
console.log(name, `name`);
console.log(saymyname());
Vue.use(Plugins);
var app = new Vue({
  el: "#app",
  data: {
    zmza: 'fuck you man!!'
  },
  components: {
    Main,
  },
  template: `<Main :zmz='zmza' />`,
})