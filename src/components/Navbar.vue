<template>
  <div class="header">
    <img src="../assets/linux.svg" />
    <transition name="slide-fade">
      <h1 v-show="this.$store.state.isOpenSidebar" >Linux</h1>
    </transition>
    <menu-icon @click="changeStateSidebar" class="btnMenu" :class="this.$store.state.isOpenSidebar && 'open-sidebar-effet'" fillColor="#fff" />
  </div>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue';


  export default {
    name: "Navbar",
    components: {
      MenuIcon,
    },
    methods: {
      changeStateSidebar() {
        this.$store.commit('changeOpenSidebar');
      }
    },
  }
</script>

<style  scoped lang="scss">
.header{
  width: 100%;
  background: #3b9486;
  padding: 8px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  left: 0;
  position: absolute;
  z-index: 1049;

  span{
    position: absolute;
    left: 56px;
    transition: 1s;
  }

  .open-sidebar-effet{
    left: 146px;
    transition: 0.5s;
  }
  
  img{
    width: 48px;
    margin-right: 16px;
  }

  h1{
    color: #fff;
  }

  .btnMenu{
    margin-left: 16px;

    &:hover{
      cursor: pointer;
    }
  }

}

</style>
