<template>
  <div class="footer-layout">
    <div class="footer-column">
      <logo-component></logo-component>
    </div>
    <div class="footer-column">
      <social-media-component></social-media-component>
    </div>
    <div class="footer-column">
      <p class="text-deep">© 2008-2022 All rights reserved. netbeau</p>
    </div>
  </div>
</template>

<script>
import LogoComponent from "@/components/common/LogoComponent";
import SocialMediaComponent from "@/components/common/SocialMediaComponent";

export default {
  name: 'CopyrightComponent',
  components: {
    LogoComponent,
    SocialMediaComponent
  }
}
</script>