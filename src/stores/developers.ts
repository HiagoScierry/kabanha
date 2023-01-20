import { Ocupation } from '@/constants/ocupation';
import type { IDeveloper } from '@/interfaces/develpment';
import { reactive } from 'vue';

export const store: {
  developers: IDeveloper[];
} = reactive({
  developers: [
    {
      id: 1,
      name: 'Hiago',
      email: 'hiago@mail.com',
      ocupation: Ocupation.Developer,
    },
  ],
});

export const storeMethods = {
  addDeveloper(developer: IDeveloper) {
    store.developers.push(developer);
  },
};
