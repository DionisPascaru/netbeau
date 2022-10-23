<template>
  <div class="portfolio-item">
      <div class="portfolio-item-img">
        <img :src="this.getImgUrl()">
      </div>
    <div class="portfolio-item-title">
      <router-link :to="{ name: 'ProjectDetailsComponent', params: { id: entityId, slug: slug } }">
        <h3>{{ this.title }}</h3>
        <i class="icon-arrow-right"></i>
      </router-link>
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
    entityId: {
      type: Number
    },
    slug: {
      type: String
    },
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