<template>
  <div class="clients-items">
    <div class="items-block" v-if="!this.mode">
      <div class="item" v-for="client in clientsWithe" :key="client.id">
        <img :src="getImgUrl(client.imgPath)" :alt="client.name">
      </div>
    </div>
    <div class="items-block" v-if="this.mode">
      <div class="item" v-for="client in clientsBlack" :key="client.id">
        <img :src="getImgUrl(client.imgPath)" :alt="client.name">
      </div>
    </div>
  </div>
</template>

<script>
import clientsData from './../../data/clients.json';

export default {
  name: 'ClientsComponent',
  data() {
    return {
      clientsWithe: clientsData.clientsWithe,
      clientsBlack: clientsData.clientsBlack
    }
  },
  computed: {
    mode() {
      return this.$store.getters['darkLightMode/getMode'];
    }
  },
  methods: {
    getImgUrl(imgPath) {
      return require(`@/assets/images/clients/${imgPath}`);
    }
  }
}
</script>