import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  // signup to make it root page /
  {
    path: '/',
    name: 'signup',
    component: () => import('../components/Signup.vue')
  },

  // login
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },

  // forgot password 
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  }


];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
