import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RulesView from "../views/RulesView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/rules",
    name: "rules",
    component: RulesView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
