import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "test",
    component: import('../views/test'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
