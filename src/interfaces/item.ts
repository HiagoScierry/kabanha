export interface IBacklogItem {
  id: number;
  title: string;
  description: string;
  priority: string;
  inDevelementDate?: Date;
  finishDate?: Date;
  dueDate: Date;
  assignee: string;
  created_at: Date;
}
