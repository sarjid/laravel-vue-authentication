import { createRouter, createWebHistory } from "vue-router";
import Index from "@/pages/Index.vue";
import { Login, Register } from "@/pages/Auth";

import Dashboard from "@/pages/User/Dashboard.vue";

//routes will be go here
const routes = [
  { path: "/", component: Index, name: "index" },
  { path: "/auth/login", component: Login, name: "user.login" },
  { path: "/auth/register", component: Register, name: "user.register" },
  { path: "/user/dashboard", component: Dashboard, name: "user.dashboard" },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
