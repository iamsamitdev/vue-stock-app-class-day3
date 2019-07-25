import Vue from "vue";
import Router from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CreateComponent from "./components/CreateComponent.vue";
import ShowComponent from "./components/ShowComponent.vue";
import EditComponent from "./components/EditComponent.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeComponent,
      meta: { title: "Home" }
    },
    {
      path: "/create",
      name: "create",
      component: CreateComponent,
      meta: { title: "Create" }
    },
    {
      path: "/show",
      name: "show",
      component: ShowComponent,
      meta: { title: "Show" }
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: EditComponent,
      meta: { title: "Edit" }
    }
  ]
});
