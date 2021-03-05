import Vue from "vue";
import Router from "vue-router";
import MainPage from "@/components/main/Main";

const routes = [
    {
        path: "/",
        name: "main",
        component: MainPage
    }
];

    Vue.use(Router);

const router = new Router({routes});

export default router;
