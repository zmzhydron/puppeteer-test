import VueRouter from 'vue-router'
import A from "../A.vue"
import B from "../B.vue"
import C from "../C.vue"
import AA from "../components/aa.vue"
import AAA from "../components/aaa.vue"
import Main from "../main.vue"

const asdf = {
  template: "<router-view></router-view>"
}

export default new VueRouter({
  routes: [
    {path: "/", component: Main},
    {path: "/A", component: A, children: [
      {
        path: "aa",
        component: AA,
        children: [
          {
            path: "aaa",
            component: AAA
          }
        ]
      }
    ]},
    {path: "/B", component: B},
    {path: "/C", component: C}
  ]
})