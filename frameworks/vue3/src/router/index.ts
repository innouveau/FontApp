import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Main from "@/components/main/Main.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
