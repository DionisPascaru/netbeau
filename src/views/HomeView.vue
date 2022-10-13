<template>
  <div class="container">
    <section>
      <div class="page-heading">
        <h1>We create next generation websites.</h1>
      </div>
      <div class="section-mover">
        <span>About Us</span>
      </div>
    </section><!-- Page heading -->
    <section class="section">
      <div>
        <div class="label">
          <span class="text-dark">About Us</span>
        </div>
        <div class="content">
          <el-row :gutter="50">
            <el-col :lg="8">
              <p class="text-normal">
                Our company provides its services on the Moldovan market since 2008, gaining already a reputation of an
                honest partner in more than 500 successful projects.
              </p>
            </el-col>
            <el-col :lg="16">
              <p class="text-obvious">
                We offer our clients the websites design, hosting and promotion.
              </p>
              <el-row>
                <el-col :lg="12">
                  <p class="text-deep">
                    We work not only with the customers from Moldova, but also with those from the CIS countries
                    (Ukraine, Russia, and Romania) and from Europe (UK, France). The core activity of our company is the
                    development of vibrant and colorful websites.
                  </p>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <button class="btn">Read more</button>
        <div class="section-mover">
          <span>Favorite works</span>
        </div>
      </div>
    </section><!-- About us -->
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>