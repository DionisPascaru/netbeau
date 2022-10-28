<template>
  <div class="logo">
    <router-link :to="{ name: 'HomeView' }">
      <img src="@/assets/images/logo-white.svg" alt="logo" v-if="!this.mode">
      <img src="@/assets/images/logo-black.svg" alt="logo" v-if="this.mode">
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'LogoComponent',
  computed: {
    mode() {
      return this.$store.getters['darkLightMode/getMode'];
    }
  },
}
</script>