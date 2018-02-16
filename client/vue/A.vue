<template>
  <div>
   AAAAAAAAAA
   <button @click="goto">GO TO BBB</button>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: "zmz"
    }
  },
  methods: {
    goto() {
      this.$router.push({path: "C", query: { name: this.name}})
    }
  }
}
</script>

<style>

</style>