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
  backlog: data.backlog || [],
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

  editTask: (
    task: ITask,
    id: string,
    arrName: 'backlog' | 'progress' | 'done'
  ) => {
    const index = store[arrName].findIndex((item) => item.id === +id);
    const currentTask = store[arrName][index];

    const newTask: IBacklogItem = {
      ...currentTask,
      title: task.title,
      description: task.description,
      priority: task.priority,
      dueDate: new Date(task.dueDate),
      assignee: task.assingee,
    };

    store[arrName][index] = newTask;
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
