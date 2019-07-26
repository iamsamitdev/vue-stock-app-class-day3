import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Validate form library
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

// Import bootstrap css framework
import "bootstrap/dist/css/bootstrap.min.css";

// Font-Awesome
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
Vue.component("v-icon", Icon);

Vue.config.productionTip = false;

// Change title page
router.beforeEach((to, from, next) => {
  document.title = to.meta.title + " | MINI STOCK";
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
