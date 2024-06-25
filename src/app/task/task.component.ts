import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Task } from '../dummy_tasks';
import { CardComponent } from "../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent, DatePipe]
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  private tasksService: TasksService = inject(TasksService);

  onCompleteTask(): void {
    this.tasksService.removeTask(this.task.id);
  }
}
