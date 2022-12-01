import { createRouter, createWebHistory } from 'vue-router';
import View from '../views/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: View,
    },
  ],
});

export default router;