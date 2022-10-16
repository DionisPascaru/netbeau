<template>
  <div class="footer">
    <div class="container">
      <section class="footer-section">
        <div class="footer-layout">
          <div class="footer-column">
            <el-menu
                class="nav-menu-footer-items"
                :router="true">
              <el-menu-item index="AboutView" :route="{ name: 'AboutView'}">
                <span>About us</span>
              </el-menu-item>
              <el-menu-item index="ServicesView" :route="{ name: 'ServicesView'}">
                <span>Our services</span>
              </el-menu-item>
              <el-menu-item index="TechnologiesView" :route="{ name: 'TechnologiesView'}">
                <span>Technologies</span>
              </el-menu-item>
              <el-menu-item index="PortfolioView" :route="{ name: 'PortfolioView'}">
                <span>Portfolio</span>
              </el-menu-item>
              <el-menu-item index="ContactView" :route="{ name: 'ContactView'}">
                <span>Contact</span>
              </el-menu-item>
            </el-menu>
          </div>
          <div class="footer-column">
            <p class="text-deep">If you have any questions, don’t hesitate to call us or send an email to the email address.
              We are ready to answer your calls!</p>
          </div>
          <div class="footer-column">
            <div class="footer-contact">
              <h3>+373 69 762 235</h3>
              <span>webstudiose@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
      <section class="copyright">
        <copyright-component></copyright-component>
      </section>
    </div>
  </div>
</template>

<script>
import CopyrightComponent from "@/components/footer/CopyrightComponent";

export default {
  name: 'FooterComponent',
  components: {
    CopyrightComponent
  }
}
</script>