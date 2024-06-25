import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Input({required: true}) userId!: string;

  private tasksService = inject(TasksService);

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel(): void {
    this.close.emit();
  }

  onAdd() {
    let newTaskData = {
      summary: this.enteredSummary,
      title: this.enteredTitle,
      dueDate: new Date(this.enteredDate),
    };
    this.tasksService.addTask(newTaskData, this.userId);
    this.close.emit();
  }
}
