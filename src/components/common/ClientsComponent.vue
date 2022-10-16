<template>
  <div class="items-block">
    <div class="item" v-for="client in clients" :key="client.id">
      <img :src="getImgUrl(client.imgPath)" :alt="client.name">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientsComponent',
  data() {
    return {
      clients: [
        {
          id: 1,
          name: 'Cellhire',
          imgPath: 'cellhire.svg'
        },
        {
          id: 2,
          name: 'Exfactor',
          imgPath: 'exfactor.svg'
        },
        {
          id: 3,
          name: 'Gsmpress',
          imgPath: 'gsmpress.svg'
        },
        {
          id: 4,
          name: 'MICB',
          imgPath: 'micb.svg'
        },
        {
          id: 5,
          name: 'Mobias Banca',
          imgPath: 'mobias-banca.svg'
        },
        {
          id: 6,
          name: 'Totul',
          imgPath: 'totul.svg'
        },
        {
          id: 7,
          name: 'Vasigur',
          imgPath: 'vasigur.svg'
        },
        {
          id: 8,
          name: 'WM',
          imgPath: 'wm.svg'
        },
      ]
    }
  },
  methods: {
    getImgUrl(imgPath) {
      return require(`@/assets/images/${imgPath}`);
    }
  }
}
</script>