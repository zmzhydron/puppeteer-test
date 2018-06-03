<template>
  <div>
    sub1
    <button @click="asdf">sub1</button>
    <ul>
     <li v-for="(item, index) in list" :key="index">-----{{item}}-----</li> 
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data(){
    return {
      datas: this.list
    }
  },
  beforeUpdate(){
    console.log(this.list);
  },
  methods: {
    asdf(){
      this.$emit('fuckyou')
    }
  }
}
</script>

<style>

</style>
