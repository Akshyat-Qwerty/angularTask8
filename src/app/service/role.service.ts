import { Injectable } from '@angular/core';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private roles: Role[] = [
    new Role(1, 'admin'),
    new Role(2, 'supervisor'),
    // ... other mock roles
  ];

  getRoles(): Promise<Role[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.roles);
      }, 1000); // Simulated delay of 1 second
    });
  }

  getRoleById(id: number): Promise<Role | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const role = this.roles.find((r) => r.id === id);
        resolve(role);
      }, 500); // Simulated delay of 0.5 seconds
    });
  }
}
