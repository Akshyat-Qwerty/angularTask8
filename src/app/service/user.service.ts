import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    new User(1, 'admin', 'password123', 'admin'),
    new User(2, 'supervisor', 'password456', 'supervisor'),
    // ... other mock users
  ];

  getUsers(): Promise<User[]> {
    // Simulate an API delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.users);
      }, 1000); // Simulated delay of 1 second
    });
  }

  getUserById(id: number): Promise<User | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = this.users.find((u) => u.id === id);
        resolve(user);
      }, 500); // Simulated delay of 0.5 seconds
    });
  }

  addUser(user: User): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        user.id = this.users.length + 1;
        this.users.push(user);
        resolve();
      }, 1000); // Simulated delay of 1 second
    });
  }

  updateUser(user: User): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.users.findIndex((u) => u.id === user.id);
        if (index !== -1) {
          this.users[index] = user;
        }
        resolve();
      }, 1000); // Simulated delay of 1 second
    });
  }

  deleteUser(id: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.users.findIndex((u) => u.id === id);
        if (index !== -1) {
          this.users.splice(index, 1);
        }
        resolve();
      }, 1000); // Simulated delay of 1 second
    });
  }
}
