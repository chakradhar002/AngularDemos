import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../shared/user.model';

@Injectable()
export class UsersService {
  public newUserSelected: EventEmitter<number> = new EventEmitter<number>();
  private users: User[] = [
    new User("Max", "madmax567"),
    new User("Anna", "anna_banana892"),
    new User("Chris", "chrisTheRock123"),
  ]
  private selectedUserIndex: number;

  constructor() { }

  getUsers(): User[] {
    return this.users.slice();
  }

  getUserById(id: string): User {
    return this.users.find(
      (element: User) => { return element.id === id; }
    );
  }
}
