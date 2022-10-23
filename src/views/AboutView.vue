<template>
  <div class="about">
    <div class="container">
      <div class="btn-back" @click="$router.back()">
        <i class="icon-arrow-left"></i> Back/Main
      </div>
      <div class="page-heading">
        <h1>About us</h1>
      </div>
      <section>
        <el-row :gutter="20">
          <el-col :lg="8" >
            <div class="about-description-left">
              <p class="text-normal">Our company provides its services on the Moldovan market since 2008, gaining
                already
                a reputation of an honest partner in more than 500 successful projects.</p>
            </div>
          </el-col>
          <el-col :lg="16" >
            <div class="about-description-right border-bottom">
              <div class="about-layout">
                <p class="text-obvious">We offer our clients the websites design, hosting and promotion. </p>
                <div class="about-column">
                  <p class="text-deep">We work not only with the customers from Moldova, but also with those from the
                    CIS
                    countries (Ukraine, Russia, and Romania) and from Europe (UK, France). The core activity of our
                    company is the development of vibrant and colorful websites.</p>
                </div>
                <div class="about-column">
                  <p class="text-deep">We develop exclusive, dynamic design, set up a personalized, easy-to-use Control
                    Panel, optimize the website for search engines, adapt the websites to all possible mobile
                    devices,all
                    using the latest technology.</p>
                </div>
              </div>
            </div>
            <div class="about-statistics border-bottom">
              <span>500</span>
              <p class="text-normal">more than 500 successful projects</p>
            </div>
          </el-col>
        </el-row>
      </section>
      <section>
        <el-row :gutter="20">
          <el-col :lg="8" >
            <div class="about-team">
              <teams-component></teams-component>
            </div>
          </el-col>
          <el-col :lg="16" >
            <div class="about-team-description border-bottom">
              <div class="about-layout">
                <p class="text-dingy">Our team consists of young, dynamic designers and programmers <strong>who find an
                  individual approach to each
                  client, offering creative ideas and unusual concepts, ideal for a particular website.</strong></p>
                <div class="about-column">
                  <p class="text-deep">Online advertising, these days, is an integral and perhaps even essential part of
                    any business, and, of course, our objective when dealing with a client is to achieve profitability
                    of
                    the website and the influx of new customers.</p>
                </div>
                <div class="about-column">
                  <p class="text-deep">To achieve this, as well as for the greatest attendance of your resource, we use
                    the most advanced technology, the latest technical advances and developments in advertising and
                    design.</p>
                </div>
              </div>
            </div>
            <div class="about-team-description border-bottom">
              <p class="text-deep">Are you ready to break new ground and ride the wave to success?</p>
              <p class="text-obvious">We are waiting for you!</p>
            </div>
          </el-col>
        </el-row>
      </section>
      <section>
        <el-row :gutter="20">
          <el-col :lg="8" >
            <div class="about-clients">
              <div class="label">
                <span class="text-dark">Our client</span>
              </div>
              <p class="text-normal">the following companies have already chosen <strong>netbeau</strong></p>
            </div>
          </el-col>
          <el-col :lg="16" >
            <div class="about-clients-items">
              <clients-component></clients-component>
            </div>
          </el-col>
        </el-row>
      </section>
    </div>
  </div>
</template>

<script>
import TeamsComponent from "@/components/common/TeamsComponent";
import ClientsComponent from "@/components/common/ClientsComponent";

export default {
  name: 'AboutView',
  components: {
    TeamsComponent,
    ClientsComponent
  }
}
</script>