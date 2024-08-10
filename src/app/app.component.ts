import { Component } from '@angular/core';
import { DUMMY_USERS, User } from './dummy_users';

@Component({
  selector: 'app-root',
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
