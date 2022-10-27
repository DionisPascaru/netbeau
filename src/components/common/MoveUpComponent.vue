<template>
  <div class="move-up-button" @click="goToSection" v-if="!isMobile">
    <i class="icon-arrow-up"></i>
  </div>
</template>

<script>
export default {
  name: 'MoveUpComponent',
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
  methods: {
    goToSection() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
  }
}
</script>