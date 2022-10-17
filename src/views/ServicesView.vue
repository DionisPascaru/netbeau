<template>
  <div class="services">
    <div class="container">
      <div class="page-heading">
        <h1>Our services</h1>
      </div>
      <section>
        <div class="section">
          <el-row :gutter="20">
            <el-col :lg="8">
              <p class="text-normal">In order to offer correctly and goodly the information about a product or service,
                you need experienced designers. </p>
            </el-col>
            <el-col :lg="16">
              <div class="services-layout">
                <p class="text-dingy">The creative staff of the netbeau company creates only vibrant, interesting and
                  stylish designs for the clients.</p>
                <div class="services-column">
                  <p class="text-deep">Please be assured that we will develop, especially for you, a unique design of
                    the
                    website to attract potential customers and buyers.</p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </section>
      <section>
        <div class="services-items">
          <items-list-component></items-list-component>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ItemsListComponent from "@/components/common/ItemsListComponent";

export default {
  name: 'ServicesView',
  components: {
    ItemsListComponent
  }
}
</script>