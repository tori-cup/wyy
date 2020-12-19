import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: "/",
    redirect: "shouye",
  },
  {
    path: "/shouye",
    name: "shouye",
    component: () => import("../views/shouye/index"),
  },
  {
    path: "/boke",
    name: "boke",
    component: () => import("../views/boke/index"),
  },
  {
    path: "/wode",
    name: "wode",
    component: () => import("../views/wode/index"),
  },
  {
    path: "/kge",
    name: "kge",
    component: () => import("../views/kge/index"),
  },
  {
    path: "/yuncun",
    name: "yuncun",
    component: () => import("../views/yun/index"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
