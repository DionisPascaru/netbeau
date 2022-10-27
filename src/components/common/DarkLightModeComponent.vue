<template>
  <div class="mode-switcher" @click="this.switcher">
    <i v-if="this.modeValue" class="icon-moon"></i>
    <i v-else class="icon-sun"></i>
  </div>
</template>

<script>
export default {
  name: 'DarkLightComponent',
  data() {
    return {
      modeValue: false,
      modeKey: 'mode',
    }
  },
  mounted() {
    if (localStorage.getItem('mode') === null) {
      this.storeMode(this.modeKey, this.modeValue);
    }

    this.modeValue = JSON.parse(localStorage.getItem(this.modeKey));

    this.switchThemeMode();
  },
  methods: {
    switcher() {
      this.modeValue = !this.modeValue;

      // save mode value in local storage
      this.storeMode(this.modeKey, this.modeValue)

      // send mode value in vuex store
      this.$store.dispatch('darkLightMode/setMode', this.modeValue);

      // set base and second color on root
      this.switchThemeMode();
    },
    switchThemeMode() {
      const baseColor = this.modeValue ? '#fff' : '#000';
      const secondColor = this.modeValue ? '#000' : '#fff';

      document.documentElement.style.setProperty('--base-color', baseColor);
      document.documentElement.style.setProperty('--second-color', secondColor);
    },
    storeMode(key, value) {
      localStorage.setItem(key, value);
    }
  }
}
</script>