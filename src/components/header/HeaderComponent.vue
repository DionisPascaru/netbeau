<template>
  <div class="container header">
    <menu-component v-if="!this.isMobile"></menu-component>
    <mobile-menu-component v-if="this.isMobile"></mobile-menu-component>
  </div>
</template>

<script>
import MenuComponent from './MenuComponent.vue';
import MobileMenuComponent from './MobileMenuComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    MenuComponent,
    MobileMenuComponent
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth < 992;
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
}
</script>