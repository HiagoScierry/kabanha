import { reactive } from 'vue';
import type { IBacklogItem } from '@/interfaces/item';
import type { ITask } from '@/interfaces/task';

interface IStore {
  backlog: IBacklogItem[];
  progress: IBacklogItem[];
  done: IBacklogItem[];
}

const data: IStore = JSON.parse(localStorage.getItem('store') || '{}');

export const store: IStore = reactive({
  backlog: data.backlog || [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1',
      priority: 'baixa',
      dueDate: new Date(),
      assignee: 1,
      created_at: new Date(),
    },
  ],
  progress: data.progress || [],
  done: data.done || [],
});

export const storeMethods = {
  addTask(task: ITask) {
    store.backlog.push({
      id: new Date().getTime(),
      title: task.title,
      description: task.description,
      priority: task.priority,
      dueDate: new Date(task.dueDate),
      assignee: task.assingee,
      created_at: new Date(),
    });
  },
  removeItemFronIndex(
    index: number,
    arrayName: 'backlog' | 'progress' | 'done'
  ) {
    store[arrayName].splice(index, 1);
  },
  editTask: (
    task: ITask,
    id: string,
    arrName: 'backlog' | 'progress' | 'done'
  ) => {
    const index = store[arrName].findIndex((item) => item.id === +id);
    console.log('TASK ARMAZENADA', store[arrName][index]);

    store[arrName][index].title = task.title;
    store[arrName][index].description = task.description;
    store[arrName][index].priority = task.priority;
    store[arrName][index].dueDate = new Date(task.dueDate);
    store[arrName][index].assignee = task.assingee;
    console.log('TASK DEPOIS DE ALTERADA', store[arrName][index]);
  },
  //como tipar o event ?
  updateArray: (event: any, arrayName: 'backlog' | 'progress' | 'done') => {
    if (event.added !== undefined) {
      store[arrayName].push(event.added.element);

      if (arrayName === 'progress') {
        storeMethods.itemInProgress(event.added.element);
      }

      if (arrayName === 'done') {
        storeMethods.itemHasDone(event.added.element);
      }
    }

    if (event.removed !== undefined) {
      storeMethods.removeItemFronIndex(event.removed.index, arrayName);
    }
  },
  itemInProgress: (item: IBacklogItem) => {
    item.inDevelementDate = new Date();
  },
  itemHasDone: (item: IBacklogItem) => {
    item.finishDate = new Date();
    store.done.push(item);
  },
  saveDataINLocalStorage: () => {
    localStorage.setItem('store', JSON.stringify(store));
  },
};
