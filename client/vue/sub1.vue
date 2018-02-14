<template>
  <div>
    sub1
    <button @click="asdf">sub1</button>
  </div>
</template>

<script>
export default {
  methods: {
    asdf(){
      this.$emit('fuckyou')
    }
  }
}
</script>

<style>

</style>
