import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

import router from './router'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueAxios, axios)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.prodcutionTip=false

axios.defaults.baseURL = 'http://localhost:8000/api'
axios.defaults.headers = {
    "Accept":"application/jsonp",
    "Content-Type":"application/jsonp",
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET',
    'Access-Control-Allow-Headers':'Origin, Content-Type, application/jsonp',
}

new Vue({
    store,
    router,              
    render: h => h(App),
}).$mount('#app');

