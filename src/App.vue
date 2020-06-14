<template>
  <div id="app">
   <sidebar></sidebar>
   <navbar></navbar>
   <page1></page1>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar';
import Page1 from './pages/Page1';

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    Page1
  }
}
</script>

<style>

</style>
