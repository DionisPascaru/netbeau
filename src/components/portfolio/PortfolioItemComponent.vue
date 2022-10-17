<template>
  <div class="portfolio-item">
      <div class="portfolio-item-img">
        <img :src="this.getImgUrl()">
      </div>
    <div class="portfolio-item-title">
      <h3>{{ this.title }}</h3>
      <i class="icon-arrow-right"></i>
    </div>
    <div class="portfolio-item-description">
      <p>{{ this.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioItemComponent',
  props: {
    imageUrl: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    }
  },
  methods: {
    getImgUrl() {
      return require(`@/assets/images/${this.imageUrl}`);
    }
  }
}
</script>