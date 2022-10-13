<template>
  <div id="app">
    <el-container>
      <el-header>
        <header-component></header-component>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import HeaderComponent from './components/common/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Raleway', sans-serif;
}

.el-header {
  padding: 0;
  height: auto !important;
}
.el-main {
  padding: 0;
}
.el-footer {
  padding: 0;
}
</style>
