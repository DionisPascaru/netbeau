<template>
  <div class="contact">
    <div class="container">
      <div class="btn-back" @click="$router.back()">
        <i class="icon-arrow-left"></i> Back/Main
      </div>
      <div class="page-heading border-bottom">
        <h1>Contact us</h1>
      </div>
      <section>
        <div class="contact-section">
          <el-row :gutter="20">
            <el-col :sm="8">
              <div class="contact-address">
                <p class="contact-text-dingy">Chişinău</p>
                <p class="contact-text-deep">Str. Feredeului 4, et.1</p>
              </div>
            </el-col>
            <el-col :sm="16">
              <div class="contact-data">
                <div class="contact-phone">
                  <p class="contact-text-deep">Phone</p>
                  <p class="contact-text-normal">+373 69 762 235</p>
                </div>
                <div class="contact-email">
                  <p class="contact-text-deep">Email</p>
                  <p class="contact-text-normal">webstudiose@gmail.com</p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </section>
      <section>
        <div class="contact-section">
          <el-row :gutter="20" class="reversible-section">
            <el-col :md="8">
              <div class="contact-description">
                <p class="text-deep">Dear customer! We work daily from 09:00 till 18:00</p>
                <p class="text-normal">If you have any questions, don’t hesitate to call us or send an email to the email
                  address. We are ready to answer your calls!</p>
              </div>
            </el-col>
            <el-col :md="16">
              <div class="contact-img">
                <img src="@/assets/images/contact.png">
              </div>
            </el-col>
          </el-row>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView'
}
</script>