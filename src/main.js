import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Routes from './Routes.js'
import VueLocalStorage from 'vue-localstorage'


Vue.use(VueRouter);
Vue.use(VueLocalStorage)

const router = new VueRouter({
  routes: Routes
})

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app');
