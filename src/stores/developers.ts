import type { IDeveloper } from '@/interfaces/develpment';
import { reactive } from 'vue';

export const store: {
  developers: IDeveloper[];
} = reactive({
  developers: [
    {
      id: 0,
      name: '',
      ocupation: '',
    },
    {
      id: 1,
      name: 'Hiago',
      ocupation: 'developer',
    },
    {
      id: 2,
      name: 'João',
      ocupation: 'designer',
    },
    {
      id: 3,
      name: 'Maria',
      ocupation: 'tester',
    },
  ],
});

export const actions = {
  addDeveloper(developer: IDeveloper) {
    store.developers.push(developer);
  },
};
