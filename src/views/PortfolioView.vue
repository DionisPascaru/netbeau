<template>
  <div class="container">
    <div class="page-heading">
      <h1>Portfolio</h1>
    </div>
    <div class="portfolio">
      <el-row :gutter="10">
        <el-col :lg="6" :span="12">
          <portfolio-item-component :entityId="1"
                                    slug="yammino"
                                    image-url="yammino/yammino.png"
                                    title="YAMMINO"
                                    description="Programming for Yammino.md">
          </portfolio-item-component>
        </el-col>
        <el-col :lg="6" :span="12">
          <portfolio-item-component :entityId="2"
                                    slug="iticket"
                                    image-url="iticket/iticket.png"
                                    title="ITICKET"
                                    description="Site for iTicket.md">
          </portfolio-item-component>
        </el-col>
        <el-col :lg="6" :span="12">
          <portfolio-item-component :entityId="3"
                                    slug="realadvent"
                                    image-url="realadvent/realadvent.png"
                                    title="REALADVENT"
                                    description="Site for Realadvent Imobil Grup">
          </portfolio-item-component>
        </el-col>
        <el-col :lg="6" :span="12">
          <portfolio-item-component :entityId="4"
                                    slug="mobias-banca"
                                    image-url="mobias-banca/mobias-banca.png"
                                    title="MOBIAS BANCA"
                                    description="Programming for Mobias banca">
          </portfolio-item-component>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :lg="6" :span="24">
          <portfolio-item-component :entityId="5"
                                    slug="elite-car-service"
                                    image-url="elite-car-service/elite-car.png"
                                    title="ELITE CAR SERVICE"
                                    description="Programming and site for eliteblackcarservice.com">
          </portfolio-item-component>
        </el-col>
        <el-col :lg="12" :span="12">
          <portfolio-item-component :entityId="6"
                                    slug="megadon"
                                    image-url="megadon/megadon.png"
                                    title="MEGADON"
                                    description="Programming and site for MEGADOM">
          </portfolio-item-component>
        </el-col>
        <el-col :lg="6" :span="12">
          <portfolio-item-component :entityId="7"
                                    slug="bronks-taxi"
                                    image-url="bronks-taxi/bronks-taxi.png"
                                    title="BRONCS TAXI"
                                    description="Programming and site for Broncs Taxi">
          </portfolio-item-component>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :lg="12" :span="24">
          <el-row :gutter="10">
            <el-col :span="12">
              <portfolio-item-component :entityId="8"
                                        slug="jeweishmuseum"
                                        image-url="jewishmuseum/jewishmuseum.png"
                                        title="JEWISHMUSEUM"
                                        description="Programming and site for jewishmuseum.md">
              </portfolio-item-component>
            </el-col>
            <el-col :span="12">
              <portfolio-item-component :entityId="9"
                                        slug="vladalina"
                                        image-url="vladalina/vladalina.png"
                                        title="VLADALINA"
                                        description="Programming for VLADALINA.MD">
              </portfolio-item-component>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <portfolio-item-component :entityId="10"
                                        slug="jackson-hole-maids"
                                        image-url="jackson-hole-maids/jackson-hole-maids.png"
                                        title="JACKSON HOLE MAIDS"
                                        description="Programming and site for jacksonholemaidservices.com">
              </portfolio-item-component>
            </el-col>
          </el-row>
        </el-col>
        <el-col :lg="12" :span="24">
          <portfolio-item-component class="portfolio-item_extra-height"
                                    :entityId="11"
                                    slug="urbanconstruct"
                                    image-url="urbanconstruct/urbanconstruct-tt.png"
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