<template>
  <transition name="puss" :duration="1000" mode="out-in" class="hahaha">
    <slot></slot>
  </transition>
</template>

<script>
export default {}
</script>

<style>

.puss-enter-active{
  transition: all 1s linear;
  position: relative;
}
.puss-leave-active{
  position: relative;
  transition: all 0.5s linear;
}
.puss-enter-to, .puss-leave {
  left: 0px;
  /* opacity: 1; */
}

.puss-enter, .puss-leave-to{
  /* opacity: 0; */
  left: 300px;
}
.hahaha{
  font-size: 72px;
}
.shuffle-move{
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
.shitbird-enter-active {
  animation: shitbird-animate 1s;
}
.shitbird-leave-active {
  animation: shitbird-animate 1s reverse;
}
@keyframes shitbird-animate {
  0% {
    position: relative;
    left: -1000px;
    font-size: 12px;
    opacity: 0;
  }
  100% {
    position: relative;
    left: 0px;
    font-size: 72px;
    opacity: 1;
  }
}
</style>