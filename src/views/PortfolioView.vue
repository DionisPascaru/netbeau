<template>
  <div class="container">
    <div class="page-heading">
      <h1>Portfolio</h1>
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
      <el-row :gutter="10">
        <el-col :lg="6" :span="24">
          <portfolio-item-component image-url="elite-car.png"
                                    title="ELITE CAR SERVICE"
                                    description="Programming and site for eliteblackcarservice.com">
          </portfolio-item-component>
        </el-col>
        <el-col :lg="12" :span="12">
          <portfolio-item-component image-url="megadon.png"
                                    title="MEGADON"
                                    description="Programming and site for MEGADOM">
          </portfolio-item-component>
        </el-col>
        <el-col :lg="6" :span="12">
          <portfolio-item-component image-url="broncs-taxi.png"
                                    title="BRONCS TAXI"
                                    description="Programming and site for Broncs Taxi">
          </portfolio-item-component>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :lg="12" :span="24">
          <el-row :gutter="10">
            <el-col :span="12">
              <portfolio-item-component image-url="jewishmuseum.png"
                                        title="JEWISHMUSEUM"
                                        description="Programming and site for jewishmuseum.md">
              </portfolio-item-component>
            </el-col>
            <el-col :span="12">
              <portfolio-item-component image-url="vladalina.png"
                                        title="VLADALINA"
                                        description="Programming for VLADALINA.MD">
              </portfolio-item-component>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <portfolio-item-component image-url="jackson-hole-maids.png"
                                        title="JACKSON HOLE MAIDS"
                                        description="Programming and site for jacksonholemaidservices.com">
              </portfolio-item-component>
            </el-col>
          </el-row>
        </el-col>
        <el-col :lg="12" :span="24">
          <portfolio-item-component class="portfolio-item_extra-height" image-url="urbanconstruct-tt.png"
                                    title="URBANCONSTRUCT-TT"
                                    description="Create a site for Urbanconstruct-TT">
          </portfolio-item-component>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import PortfolioItemComponent from "@/components/portfolio/PortfolioItemComponent";

export default {
  name: 'PortfolioView',
  components: {
    PortfolioItemComponent
  }
}
</script>