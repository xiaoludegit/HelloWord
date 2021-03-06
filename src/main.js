import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/common.css";
import $http from "./http/index";

Vue.prototype.$http = $http;

Vue.config.productionTip = false;
Vue.use(Element);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
