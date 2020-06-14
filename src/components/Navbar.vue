<template>
  <div class="header">
    <img src="../assets/linux.svg" />
    <h1>Linux</h1>
    <menu-icon class="btnMenu" fillColor="#fff" />
  </div>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue';


  export default {
    name: "Navbar",
    components: {
      MenuIcon,
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
