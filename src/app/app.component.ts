import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS, User } from './dummy_users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'easy-task-app';
  users = DUMMY_USERS;
  selectedUser?: User;

  onUserSelected(user: User): void {
    this.selectedUser = user;
  }
}
