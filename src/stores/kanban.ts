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
  backlog: [],
  progress: [],
  done: [],
});

export const storeMethods = {
  addItem(task: ITask) {
    store.backlog.push({
      id: 1,
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
