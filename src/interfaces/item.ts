export interface IBacklogItem {
  id: number;
  title: string;
  description: string;
  priority: string;
  inDevelementDate?: Date;
  finishDate?: Date;
  dueDate: string;
  assignee: number;
  created_at: Date;
}
