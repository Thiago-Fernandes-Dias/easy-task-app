import { Injectable } from "@angular/core";
import { NewTaskData, type Task } from "../dummy_tasks";

const TASKS_LOCAL_STORAGE_KEY = 'tasks';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = [];

  constructor() {
    const localTasks = localStorage.getItem(TASKS_LOCAL_STORAGE_KEY);
    if (localTasks) {
      this.tasks = JSON.parse(localTasks);
    }
  }

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter(task => task.userId == userId);
  }

  addTask(newTaskData: NewTaskData, userId: string): void {
    let newTask = <Task>{
      ...newTaskData,
      id: `${Math.random() * 10}`,
      userId: userId
    };
    this.tasks = [...this.tasks, newTask];
    this.saveTasks();
  }

  removeTask(taskId: string): void {
    this.tasks = this.tasks.filter((task) => task.id != taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem(TASKS_LOCAL_STORAGE_KEY, JSON.stringify(this.tasks));
  }
}