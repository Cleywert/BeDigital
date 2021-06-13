<template>
  <div id="app">
    <transition mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
.titulo {
  margin: 30px 0;
}
.v-enter,.v-leave-to{
  opacity: .5;
  transform: translate3d(-70px,0,0);
}
.v-enter-active,.v-leave-active{
  transition: all .8s;
}
</style>
