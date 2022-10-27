import Vuex from 'vuex';
import darkLightMode from './darkLightMode';
import Vue from "vue";
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        darkLightMode
    }
})