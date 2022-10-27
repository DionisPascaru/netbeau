import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import './assets/scss/main.scss'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import router from './router'
import store from './store';

Vue.config.productionTip = false

Vue.use(elementUi, locale)
Vue.use(Vuex);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
