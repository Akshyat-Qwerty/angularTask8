import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items: Item[] = [
    new Item(1, 'Item 1', 10.0),
    new Item(2, 'Item 2', 20.0),
    // ... other mock items
  ];

  getItems(): Promise<Item[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.items);
      }, 1000); // Simulated delay of 1 second
    });
  }

  getItemById(id: number): Promise<Item | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const item = this.items.find((i) => i.id === id);
        resolve(item);
      }, 500); // Simulated delay of 0.5 seconds
    });
  }

  addItem(item: Item): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        item.id = this.items.length + 1;
        this.items.push(item);
        resolve();
      }, 1000); // Simulated delay of 1 second
    });
  }

  updateItem(item: Item): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.items.findIndex((i) => i.id === item.id);
        if (index !== -1) {
          this.items[index] = item;
        }
        resolve();
      }, 1000); // Simulated delay of 1 second
    });
  }

  deleteItem(id: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.items.findIndex((i) => i.id === id);
        if (index !== -1) {
          this.items.splice(index, 1);
        }
        resolve();
      }, 1000); // Simulated delay of 1 second
    });
  }
}
