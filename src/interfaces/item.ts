import type { status as StatusEnum } from '../constants/status';

export interface IBacklogItem {
  id: number;
  title: string;
  description: string;
  status: StatusEnum;
  priority: string;
  createdDate: Date;
  updatedDate: Date;
  dueDate: Date;
  assignee: string;
}
