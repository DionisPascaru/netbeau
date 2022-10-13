<template>
    <div>
        <div class="nav-header-mobile">
            <div class="hamburger-lines" 
                :class="{active: this.isActive}"
                @click="this.collapseMenu">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
            <logo-component @click="this.collapseMenu"></logo-component>
            <dark-light-mode-component></dark-light-mode-component>
        </div>
        <div class="nav-wrapper-mobile" :class="{active: this.isActive}">
            <el-menu
                :default-active="activeMenuItem"
                class="nav-menu-items"
                :router="true">
                <el-menu-item index="AboutView" :route="{ name: 'AboutView'}" @click="this.collapseMenu">
                    <span>About us</span>
                </el-menu-item>
                <el-menu-item index="ServicesView" :route="{ name: 'ServicesView'}" @click="this.collapseMenu">
                    <span>Our services</span>
                </el-menu-item>
                <el-menu-item index="TechnologiesView" :route="{ name: 'TechnologiesView'}" @click="this.collapseMenu">
                    <span>Technologies</span>
                </el-menu-item>
                <el-menu-item index="PortfolioView" :route="{ name: 'PortfolioView'}" @click="this.collapseMenu">
                    <span>Portfolio</span>
                </el-menu-item>
                <el-menu-item index="ContactView" :route="{ name: 'ContactView'}" @click="this.collapseMenu">
                    <span>Contact</span>
                </el-menu-item>
            </el-menu>
            <div class="nav-footer">
                <p>If you have any questions, don’t hesitate to call us or send an email to the email address. We are ready to answer your calls!</p>
                <h3>+373 69 762 235</h3>
                <span>webstudiose@gmail.com</span>
            </div>
        </div>
    </div>
</template>

<script>
import LogoComponent from '../common/LogoComponent.vue';
import DarkLightModeComponent from '../common/DarkLightModeComponent.vue';

export default {
    name: 'MobileMenuComponent',
    components: {
        LogoComponent,
        DarkLightModeComponent
    },
    data() {
        return {
            isActive: false
        }
    },
    computed: {
        activeMenuItem() {
            return this.$route.name;
        },
    },
    methods: {
        collapseMenu() {
            this.isActive = !this.isActive;
        },
    }
}
</script>