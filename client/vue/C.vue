<template>
  <div>
    <button @click="ajax(name,$event)">ajax</button>
    <Trans>
      <h1 key='a' v-if="show">CCCCCCCCCCCCC</h1>
      <h1 key='b' v-if="!show">********************</h1>
    </Trans>
    <button @click="changeshow(name,$event)">change</button>
    <transition-group name="shuffle" tag='div' class="contain">
        <div v-for="v in list" :key="v" class="cell">{{v}}</div>              
    </transition-group>
    <button @click="shuff(name,$event)">change</button>
    <Sm></Sm>
  </div>
</template>

<script>
import _ from 'underscore'
export default {
  data: function() {
    return {
      show: true,
      name: 'zmz',
      list: Array.from({ length: 27 }).map((item, index) => index)
    }
  },
  methods: {
    ajax() {
      console.log(axios);
      axios.post("/api/aaa?name=sjb&age=30", {name: "zmz", age: 24, asdf: 'fuckyou'}).then(val => {
        console.log(val)
      })
    },
    changeshow(name, $event) {
      this.show = !this.show
      console.log(name, $event, '```````````')
    },
    shuff(name, $event) {
      this.list = _.shuffle(this.list)
    }
  }
}
</script>

<style>
.shuffle-move {
  transition: transform 1s;
}
.contain {
  display: flex;
  flex-flow: row wrap;
  width: 120px;
}
.cell {
  height: 30px;
  width: 30px;
}
</style>
