<template>
  <div>
    <h1>{{objs}}</h1>
    <h3>{{refobjs}}</h3>
    <p v-for="(item, index) in list" :key="item.name">{{item.name}}</p>
    <!-- <h2>22222222222222 {{name}} ~~~~~~~~~ {{asdf}} {{zmz}} </h2> -->
    <button @click="add">add</button>
    <button @click="change">change</button>
    <ASDF v-model="name" />
    ****{{name}}****
    <img src="./router/4.png" alt="">
  </div>
</template>

<script>
import Sub1 from './sub1.vue'
import ASDF from './olala.vue'

// import Vue from "Vue"
console.log($)
console.log(Vue)
console.log('~~~~~~~~~~~~~~~~~')
var fku = new Vue({
  template: `<h1 style="color: green"> fuckyou</h1>`
})

export default {
  components: {
    Suba: Sub1,
    ASDF
  },
  beforeUpdate() {
    console.log(`beforesadasd$$$`, this.list)
  },
  props: {
    zmz: {
      type: String,
      default: 'zmz default !!'
    },
    asdf: {
      type: String,
      default: '.!!!!!!!!!!!'
    }
  },
  data: function() {
    return {
      name: 'zhangmingzhi',
      count: 0,
      objs: {
        age: 27
      },
      list: [
        {
          name: 'zmz'
        }
      ]
    }
  },
  computed: {
    refobjs() {
      return this.objs
    }
  },
  methods: {
    change() {
      this.list[0].name = 'sjb'
    },
    add() {
      delete this.objs.age
      this.objs.name = 'sjb'
      console.log(this.objs)
      let hehe = 'oops'
      // this.$set(this.objs, hehe, `pussy`)

      // this.$forceUpdate();
      this.objs = { ...this.objs }
    },
    hello() {
      console.log(this)
      console.log('----------------------')
      console.log(fku.$mount('#ele'))
      // this.$hello('zhangmingzhi')
    },
    addCount() {
      this.count++
    }
  }
}
</script>

<style>

</style>
