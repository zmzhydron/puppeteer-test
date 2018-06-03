<template>
  <input :value="shit" @input="change" />
</template>

<script>
export default {
  model: {
    prop: 'shit',
    event: 'fuck'
  },
  props: {
    value: {
      type: [String, Number]
    },
    shit: {
      type: [String, Number]
    }
  },
  data(){
    return {

    }
  },
  methods: {
    change(e){
      console.log(e.target.value);
      this.$emit("fuck",e.target.value);
    }
  }
}
</script>

<style>

</style>
