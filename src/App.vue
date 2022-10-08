<template>
  <div id="app">
    <dark-light-component></dark-light-component>
    <router-view></router-view>
  </div>
</template>

<script>
import DarkLightComponent from './components/common/DarkLightModeComponent.vue';

export default {
  name: 'App',
  components: {
    DarkLightComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
