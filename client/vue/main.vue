<template>
  <div>
    <h2>22222222222222 {{name}} ~~~~~~~~~ {{asdf}} {{zmz}} </h2>
    <button @click="hello">hello fku</button>
    <h3>Count: {{count}} </h3>
    <Suba v-on:fuckyou="addCount" />
  </div>
</template>

<script>
import Sub1 from './sub1.vue'

// import Vue from "Vue"
console.log($);
console.log(Vue);
console.log("~~~~~~~~~~~~~~~~~");
var fku = new Vue({
  template: `<h1 style="color: green"> fuckyou</h1>`
})

export default {
  components: {
    Suba: Sub1
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
    }
  },
  methods: {
    hello() {
      console.log(this)
      console.log("----------------------")
      console.log(fku.$mount("#ele"))
      // this.$hello('zhangmingzhi')
    },
    addCount() {
      this.count++;
    }
  }
}
</script>

<style>

</style>
