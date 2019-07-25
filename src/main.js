import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import bootstrap css framework
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

// Chage title page
router.beforeEach((to, from, next) => {
  document.title = to.meta.title + " | Mini Stock";
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
