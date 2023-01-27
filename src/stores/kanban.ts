import { reactive } from 'vue';
import type { IKanbanItem } from '@/interfaces/kanbanItem';
import type { Task } from '@/interfaces/task';
import type { BoardArrays } from '@/interfaces/boardArrays';

interface IStore {
  backlog: IKanbanItem[];
  progress: IKanbanItem[];
  done: IKanbanItem[];
}

const data: IStore = JSON.parse(localStorage.getItem('store') || '{}');

export const store: IStore = reactive({
  backlog: data.backlog || [],
  progress: data.progress || [],
  done: data.done || [],
});

export const actions = {
  addTask(task: Task) {
    store.backlog.push({
      id: new Date().getTime(),
      title: task.title,
      description: task.description,
      priority: task.priority,
      dueDate: task.dueDate,
      assignee: task.assingee,
      created_at: new Date(),
    });

    actions.saveDataINLocalStorage();
  },
  removeItemFronIndex(index: number, arrayName: BoardArrays) {
    store[arrayName].splice(index, 1);
    this.saveDataINLocalStorage();
  },
  editTask: (task: Task, id: string, arrName: BoardArrays) => {
    const index = store[arrName].findIndex((item) => item.id === +id);
    store[arrName][index].title = task.title;
    store[arrName][index].description = task.description;
    store[arrName][index].priority = task.priority;
    store[arrName][index].dueDate = task.dueDate;
    store[arrName][index].assignee = task.assingee;
    actions.saveDataINLocalStorage();
  },
  //como tipar o event ?
  updateArray: (event: any, arrayName: BoardArrays) => {
    if (event.added !== undefined) {
      store[arrayName].push(event.added.element);

      if (arrayName === 'progress') {
        actions.itemInProgress(event.added.element);
      }

      if (arrayName === 'done') {
        actions.itemHasDone(event.added.element);
      }
    }

    if (event.removed !== undefined) {
      actions.removeItemFronIndex(event.removed.index, arrayName);
    }

    actions.saveDataINLocalStorage();
  },
  setDevInTask: (id: number) => {
    const index = store.backlog.findIndex((item) => item.id === id);
    actions.itemInProgress(store.backlog[index]);
    store.progress.push(store.backlog[index]);
    actions.removeItemFronIndex(index, 'backlog');
    actions.saveDataINLocalStorage();
  },
  itemInProgress: (item: IKanbanItem) => {
    item.inDevelementDate = new Date();
  },
  itemHasDone: (item: IKanbanItem) => {
    if (!item.inDevelementDate) {
      item.inDevelementDate = new Date();
    }

    item.finishDate = new Date();
    store.done.push(item);
  },
  saveDataINLocalStorage: () => {
    localStorage.removeItem('store');
    localStorage.setItem('store', JSON.stringify(store));
  },
};
