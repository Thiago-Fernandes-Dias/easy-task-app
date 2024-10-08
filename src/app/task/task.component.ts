import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Task } from '../dummy_tasks';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  private tasksService: TasksService = inject(TasksService);

  onCompleteTask(): void {
    this.tasksService.removeTask(this.task.id);
  }
}
