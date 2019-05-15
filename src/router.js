import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/registered",
      name: "registered",
      component: () => import("./views/Registered.vue")
    }
  ]
});
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === "/login" || to.path === "/registered" || to.path === "/") {
    next();
  } else {
    let token = window.localStorage.getItem("user_token");
    if (!token) {
      next("/login");
    } else {
      next();
    }
  }
});
export default router;
