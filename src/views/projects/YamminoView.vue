<template>
  <div class="container">
    <div class="project-heading">
      <h1>YAMMINO</h1>
    </div>
    <div class="project-banner">
      <img :src="require('@/assets/images/yammino.png')">
    </div>
    <div class="project-description">
      <div class="section border-bottom">
        <el-row>
          <el-col :lg="8">
            <h2>About project</h2>
          </el-col>
          <el-col :lg="16">
            <p class="text-normal">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="project-section">
      <div class="project-images">
        <div class="project-full-image">
          <img :src="require('@/assets/images/yammino/yammino-mac-book.png')">
        </div>
      </div>
    </div>
    <div class="project-section">
      <div class="project-images">
        <div class="project-small-image">
          <img :src="require('@/assets/images/yammino/iphone1.png')">
        </div>
        <div class="project-small-image">
          <img :src="require('@/assets/images/yammino/iphone2.png')">
        </div>
        <div class="project-small-image">
          <img :src="require('@/assets/images/yammino/iphone3.png')">
        </div>
        <div class="project-small-image">
          <img :src="require('@/assets/images/yammino/iphone4.png')">
        </div>
      </div>
    </div>
    <div class="project-section">
      <div class="project-images">
        <div class="project-full-image">
          <img :src="require('@/assets/images/yammino/index1.png')">
        </div>
        <div class="project-full-image">
          <img :src="require('@/assets/images/yammino/index2.png')">
        </div>
      </div>
    </div>
    <div class="contact-us-section">
      <h1>Want something similar?</h1>
      <p class="text-deep">Fill in the form below and our staff will call you back within 24 hours.</p>
      <button class="btn">Contact us <i class="icon-arrow-right"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YamminoView',
}
</script>