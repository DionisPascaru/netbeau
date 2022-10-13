<template>
    <div>
        <div class="nav-menu-desktop">
            <div class="nav-menu-left">
                <logo-component></logo-component>
            </div>
            <div class="nav-menu-right">
                <el-menu
                    :default-active="activeMenuItem"
                    class="nav-menu-items"
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
                <dark-light-mode-component></dark-light-mode-component>
            </div>
        </div>
    </div>
</template>

<script>
import LogoComponent from '../common/LogoComponent.vue';
import DarkLightModeComponent from '../common/DarkLightModeComponent.vue';

export default {
    name: 'MenuComponent',
    components: {
        LogoComponent,
        DarkLightModeComponent
    },
    computed: {
        activeMenuItem() {
            return this.$route.name;
        },
    }
}
</script>