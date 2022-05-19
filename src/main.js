import Vue from 'vue'
import App from './App.vue'
import "./assets/css/global.less";
import router from './router'
import Vuex from 'vuex'
import { store } from './store/store'

Vue.use(Vuex)
Vue.config.productionTip = false

//importação do axios e configuração do vue-api-query com o axios
// import axios from "axios";
// import { Model } from "vue-api-query";
// Model.$http = axios;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')