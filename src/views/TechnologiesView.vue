<template>
  <div class="technologies">
    <div class="container">
      <div class="page-heading">
        <h1>Technologies</h1>
      </div>
      <section>
        <div class="section border-bottom">
          <el-row :gutter="20">
            <el-col :lg="8">
              <p class="text-normal">A 100% commitment to building trust and transparency.</p>
            </el-col>
            <el-col :lg="16">
              <div class="technologies-layout">
                <p class="text-dingy">Developing high-quality digital products requires trust and transparency. </p>
                <div class="technologies-column">
                  <p class="text-deep">That’s what we work with each customer to define mutual account abilities and
                    focus the whole team on “getting the job done.” We call this our Collaboration Framework, a
                    continuously evolving set of good practices that meet and exceed industry standards.</p>
                </div>
                <div class="technologies-column">
                  <p class="text-deep">By establishing high-performing collaborations with customers, we’ve learned how
                    to increase velocity (the delivery of project value) while reducing the waste that can impede
                    successful project delivery.</p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </section>
      <section>
        <div class="section">
          <el-row :gutter="20">
            <el-col :lg="8">
              <p class="text-normal">Technologies we use in our work</p>
            </el-col>
            <el-col :lg="16">
              <technologies-items-component></technologies-items-component>
            </el-col>
          </el-row>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import TechnologiesItemsComponent from "@/components/common/TechnologiesItemsComponent";

export default {
  name: 'TechnologiesView',
  components: {
    TechnologiesItemsComponent
  }
}
</script>