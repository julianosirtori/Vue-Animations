<template>
 <transition name="slide">
  <div class="sidebar" v-show="$store.state.isOpenSidebar">
    <h1>Sidebar</h1>
  </div>
 </transition>
</template>

<script>
  export default {
    name: "Sidebar",
    
  }
</script>

<style scoped>
.sidebar{
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1040;
  left: 0;
  width: 240px;
  box-shadow: 5px 0 5px -2px #888;
  background: #575757;
}



.slide-enter-active {
  transition: .5s;
}

.slide-leave-active {
  transition: .5s ;
}

.slide-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-240px);
  /* opacity: 0; */
}

</style>