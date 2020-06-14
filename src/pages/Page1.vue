<template>
  <div class="container" :class="this.$store.state.isOpenSidebar && 'open-sidebar'">
    <h1>Pagina 1</h1>
  </div>
</template>

<script>
  export default {
    name: "Page1"
  }
</script>

<style  scoped>
.container{
  
  padding-top: 68px;
  width: 100%;
  height: 100%;
  background: rgb(131, 131, 131);
}

.open-sidebar{
  padding-left: 248px;
}


</style>