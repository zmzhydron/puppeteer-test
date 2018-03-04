import Main from "./main.vue"
import Plugins from "./plugins.js"
import routes from "./router"
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(Plugins);
var app = new Vue({
  el: "#app",
  router: routes,
  data: {
    zmza: 'fuck you man!!'
  },
  components: {
    Main,
  },
  // template: `<Main :zmz='zmza' />`,
  template: `<router-view></router-view>`,
  // render: function(createElement){
  //   return createElement('h1', {
  //     style: {
  //       color: 'red'
  //     }
  //   }, ['game sucks','your cowerd']);
  // }
  // render(h) {
  //   return (
  //     <h1>game sucks</h1>
  //   )
  // }
})