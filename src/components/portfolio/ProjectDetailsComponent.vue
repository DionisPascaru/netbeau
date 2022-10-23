<template>
  <div class="container">
    <div class="btn-back" @click="$router.back()">
      <i class="icon-arrow-left"></i> Back/Main
    </div>
    <div class="project-heading">
      <h1>{{ this.project.name }}</h1>
    </div>
    <div class="project-banner">
      <img :src="getImgUrl(this.project.banner)">
    </div>
    <div class="project-description">
      <div class="section border-bottom">
        <el-row>
          <el-col :lg="8">
            <h2>About project</h2>
          </el-col>
          <el-col :lg="16">
            <p class="text-normal">{{ this.project.description }}</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="project-section" v-if="project.macbookImages">
      <div class="project-images">
        <div class="project-full-image" v-for="image in project.macbookImages" :key="image">
          <img :src="getImgUrl(image)">
        </div>
      </div>
    </div>
    <div class="project-section" v-if="project.iphoneImages">
      <div class="project-images">
        <div class="project-small-image" v-for="image in project.iphoneImages" :key="image">
          <img :src="getImgUrl(image)">
        </div>
      </div>
    </div>
    <div class="project-section" v-if="project.desktopImages">
      <div class="project-images">
        <div class="project-full-image" v-for="image in project.desktopImages" :key="image">
          <img :src="getImgUrl(image)">
        </div>
      </div>
    </div>
    <div class="contact-us-section">
      <h1>Want something similar?</h1>
      <p class="text-deep">Fill in the form below and our staff will call you back within 24 hours.</p>
      <button class="btn">
        <router-link :to="{ name: 'ContactView' }">
          Contact us <i class="icon-arrow-right"></i>
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
import { items } from '../../data/projects.json';

export default {
  name: 'ProjectDetailsComponent',
  data() {
    return {
      project: {}
    }
  },
  mounted() {
    this.project = items.find(item => item.id == this.$route.params.id);
  },
  methods: {
    getImgUrl(imgPath) {
      if (imgPath) {
        return require(`@/assets/images/${imgPath}`);
      }
    }
  }
}
</script>