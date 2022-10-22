<template>
  <div class="container">
    <section class="border-bottom">
      <div class="page-heading">
        <h1>We create next generation websites.</h1>
      </div>
      <div class="section-mover">
        <span>About Us</span>
        <i class="icon-arrow-down"></i>
      </div>
    </section><!-- Page heading -->
    <section class="border-bottom">
      <div class="section">
        <div class="label">
          <span class="text-dark">About Us</span>
        </div>
        <div class="content">
          <el-row :gutter="20">
            <el-col :lg="8">
              <p class="text-normal">
                Our company provides its services on the Moldovan market since 2008, gaining already a reputation of an
                honest partner in more than 500 successful projects.
              </p>
              <button class="btn" v-if="!isMobile">
                Read more
                <i class="icon-arrow-right"></i>
              </button>
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
        <button class="btn" v-if="isMobile">Read more <i class="icon-arrow-right"></i></button>
      </div>
      <div class="section-mover">
        <span>Favorite works</span>
        <i class="icon-arrow-down"></i>
      </div>
    </section><!-- About us -->
    <section class="border-bottom">
      <div class="section">
        <div class="label">
          <span class="text-dark">Favorite Works</span>
        </div>
        <div class="portfolio-header">
          <div>
            <span>2008-2022</span>
            <p class="text-normal">
              Check out some of our selected works throughout history.
            </p>
          </div>
          <button class="btn">All works  <i class="icon-arrow-right"></i></button>
        </div>
        <div class="portfolio">
          <el-row :gutter="10">
            <el-col :lg="6" :span="12">
              <portfolio-item-component image-url="yammino.png"
                                        title="YAMMINO"
                                        description="Programming for Yammino.md">
              </portfolio-item-component>
            </el-col>
            <el-col :lg="6" :span="12">
              <portfolio-item-component image-url="iticket.png"
                                        title="ITICKET"
                                        description="Site for iTicket.md">
              </portfolio-item-component>
            </el-col>
            <el-col :lg="6" :span="12">
              <portfolio-item-component image-url="realadvent.png"
                                        title="REALADVENT"
                                        description="Site for Realadvent Imobil Grup">
              </portfolio-item-component>
            </el-col>
            <el-col :lg="6" :span="12">
              <portfolio-item-component image-url="mobias-banca.png"
                                        title="MOBIAS BANCA"
                                        description="Programming for Mobias banca">
              </portfolio-item-component>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="section-mover">
        <span>What we do</span>
        <i class="icon-arrow-down"></i>
      </div>
    </section><!-- Portfolio -->
    <section class="border-bottom">
      <div class="section">
        <div class="label">
          <span class="text-dark">What we do</span>
        </div>
        <el-row :gutter="20">
          <el-col :lg="8">
            <div>
              <h2>Our services</h2>
              <p class="text-deep">We leverage advanced technology to deliver solutions that exceed expectations.</p>
              <button class="btn">Read more  <i class="icon-arrow-right"></i></button>
            </div>
          </el-col>
          <el-col :lg="16">
            <items-list-component></items-list-component>
          </el-col>
        </el-row>
      </div>
      <div class="section-mover">
        <span>Our clients</span>
        <i class="icon-arrow-down"></i>
      </div>
    </section><!-- Services -->
    <section class="section">
      <div class="label">
        <span class="text-dark">Our client</span>
      </div>
      <el-row>
        <el-col :lg="8" :span="24">
          <p class="text-normal">the following companies have already chosen <strong>netbeau</strong></p>
        </el-col>
      </el-row>
      <clients-component></clients-component>
    </section><!-- Clients -->
  </div>
</template>

<script>
import PortfolioItemComponent from "@/components/portfolio/PortfolioItemComponent";
import ItemsListComponent from "@/components/common/ItemsListComponent";
import ClientsComponent from "@/components/common/ClientsComponent";

export default {
  name: 'HomeView',
  components: {
    PortfolioItemComponent,
    ItemsListComponent,
    ClientsComponent
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth < 1200;
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
}
</script>