export type Task = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: Date;
};

export type NewTaskData = {
  title: string;
  summary: string;
  dueDate: Date;
};

export const DUMMY_TASKS: Task[] = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: new Date('2025-12-31'),
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: new Date('2024-05-31'),
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: new Date('2024-06-15'),
  },
];
