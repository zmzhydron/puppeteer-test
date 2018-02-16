<template>
  <div>
   BBBBBBBBBBBBBBB
   {{this.name}}
   <button @click="this.change">change my name !!</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: "zmz"
    }
  },
  beforeUpdate: function(){
    console.log(this)
  },
  methods: {
    change() {
      this.name = new Date().valueOf() + " now !!"
    }
  },
  mounted: function() {
    console.log(this.$route)
  }
}
</script>

<style>

</style>