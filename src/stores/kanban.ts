import { reactive } from 'vue';
import type { IBacklogItem } from '@/interfaces/item';
import { status } from '@/constants/status';
import type { ITask } from '@/interfaces/task';

interface IStore {
  backlog: IBacklogItem[];
  progress: IBacklogItem[];
  done: IBacklogItem[];
}

export const store: IStore = reactive({
  backlog: [
    {
      id: new Date().getTime(),
      title: 'Ajustar css do board',
      description: 'DESCRICAO',
      status: status.NEW,
      priority: 'high',
      createdDate: new Date(),
      updatedDate: new Date(),
      dueDate: new Date(),
      assignee: 'user1',
    },
    {
      id: new Date().getTime(),
      title: 'Ajustar css do board',
      description: 'DESCRICAO',
      status: status.NEW,
      priority: 'high',
      createdDate: new Date(),
      updatedDate: new Date(),
      dueDate: new Date(),
      assignee: 'user1',
    },
    {
      id: new Date().getTime(),
      title: 'Ajustar css do board',
      description: 'DESCRICAO',
      status: status.NEW,
      priority: 'high',
      createdDate: new Date(),
      updatedDate: new Date(),
      dueDate: new Date(),
      assignee: 'user1',
    },
    {
      id: new Date().getTime(),
      title: 'Ajustar css do board',
      description: 'DESCRICAO',
      status: status.NEW,
      priority: 'high',
      createdDate: new Date(),
      updatedDate: new Date(),
      dueDate: new Date(),
      assignee: 'user1',
    },
    {
      id: new Date().getTime(),
      title: 'Ajustar css do board',
      description: 'DESCRICAO',
      status: status.NEW,
      priority: 'high',
      createdDate: new Date(),
      updatedDate: new Date(),
      dueDate: new Date(),
      assignee: 'user1',
    },
    {
      id: new Date().getTime(),
      title: 'Ajustar css do board',
      description: 'DESCRICAO',
      status: status.NEW,
      priority: 'high',
      createdDate: new Date(),
      updatedDate: new Date(),
      dueDate: new Date(),
      assignee: 'user1',
    },
    {
      id: new Date().getTime(),
      title: 'Ajustar css do board',
      description: 'DESCRICAO',
      status: status.NEW,
      priority: 'high',
      createdDate: new Date(),
      updatedDate: new Date(),
      dueDate: new Date(),
      assignee: 'user1',
    },
    {
      id: new Date().getTime(),
      title: 'Ajustar css do board',
      description: 'DESCRICAO',
      status: status.NEW,
      priority: 'high',
      createdDate: new Date(),
      updatedDate: new Date(),
      dueDate: new Date(),
      assignee: 'user1',
    },
    {
      id: new Date().getTime(),
      title: 'Ajustar css do board',
      description: 'DESCRICAO',
      status: status.NEW,
      priority: 'high',
      createdDate: new Date(),
      updatedDate: new Date(),
      dueDate: new Date(),
      assignee: 'user1',
    },
  ],
  progress: [],
  done: [],
});

export const storeMethods = {
  addItem(task: ITask) {
    store.backlog.push({
      id: new Date().getTime(),
      title: task.title,
      description: task.description,
      priority: task.priority,
      dueDate: task.dueDate,
      status: status.NEW,
      assignee: '',
      createdDate: new Date(),
      updatedDate: new Date(),
    });
  },
  removeItemFronIndex(index: number) {
    store.backlog.splice(index, 1);
  },
};
