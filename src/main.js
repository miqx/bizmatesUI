import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
Vue.config.productionTip = false;

axios.defaults.baseURL = process.env.VUE_APP_BACKEND_BASE_URL;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
