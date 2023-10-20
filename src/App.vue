<template>
  <div id="app">
    <NavBar/>
    <div class="main">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>

import NavBar from './NavBar';

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
.main {
  align-items: center;
  display: flex;
  justify-content: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
