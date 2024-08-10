import { Component, input } from '@angular/core';
import { type User } from '../dummy_users';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  constructor(private tasksService: TasksService) { }

  user = input.required<User>();
  isAddingTask = false;

  get userTasks() {
    return this.tasksService.getUserTasks(this.user().id);
  }

  onStartAddingTask(): void {
    this.isAddingTask = true;
  }

  onClose(): void {
    this.isAddingTask = false;
  }
}
