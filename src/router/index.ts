import { createRouter, createWebHistory } from 'vue-router';
import Board from '../views/board.vue';
import Task from '../views/task.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Board,
    },
    {
      path: '/task',
      name: 'task',
      component: Task,
    }
  ],
});

export default router;
