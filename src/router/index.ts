import { createRouter, createWebHistory } from 'vue-router';
import Board from '../views/board.vue';
import Task from '../views/task.vue';
import EditTask from '../views/editTask.vue';

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
    },
    {
      path: '/taskEdit/:arrName/:id',
      name: 'taskEdit',
      component: EditTask,
      props: (route) => ({
        id: route.params.id,
        arrName: route.params.arrName,
      }),
    },
  ],
});

export default router;
