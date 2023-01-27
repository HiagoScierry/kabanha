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
  backlog: data.backlog || [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1',
      priority: 'baixa',
      dueDate: '2021-01-01',
      assignee: 1,
      created_at: new Date(),
      // inDevelementDate: new Date('2021-01-01'),
      // finishDate: new Date('2023-01-01'),
      finishDate: new Date('2021-01-01'),
      inDevelementDate: new Date('2023-01-02'),
    },
  ],
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
  },
  removeItemFronIndex(index: number, arrayName: BoardArrays) {
    store[arrayName].splice(index, 1);
  },
  editTask: (task: Task, id: string, arrName: BoardArrays) => {
    const index = store[arrName].findIndex((item) => item.id === +id);
    console.log('TASK ARMAZENADA', store[arrName][index]);

    store[arrName][index].title = task.title;
    store[arrName][index].description = task.description;
    store[arrName][index].priority = task.priority;
    store[arrName][index].dueDate = task.dueDate;
    store[arrName][index].assignee = task.assingee;
    console.log('TASK DEPOIS DE ALTERADA', store[arrName][index]);
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
  },
  setDevInTask: (id: number) => {
    const index = store.backlog.findIndex((item) => item.id === id);
    actions.itemInProgress(store.backlog[index]);
    store.progress.push(store.backlog[index]);
    actions.removeItemFronIndex(index, 'backlog');
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
    localStorage.setItem('store', JSON.stringify(store));
  },
};
