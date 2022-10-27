<template>
  <div id="app">
    <el-container>
      <el-header>
        <header-component></header-component>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <footer-component></footer-component>
      </el-footer>
    </el-container>
    <move-up-component></move-up-component>
  </div>
</template>

<script>
import HeaderComponent from './components/header/HeaderComponent.vue';
import FooterComponent from "@/components/footer/FooterComponent";
import MoveUpComponent from "@/components/common/MoveUpComponent";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    MoveUpComponent
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
