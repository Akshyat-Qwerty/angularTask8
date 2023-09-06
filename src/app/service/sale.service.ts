import { Injectable } from '@angular/core';
import { Sale } from '../models/sale.model';

@Injectable({
  providedIn: 'root',
})
export class SaleService {
  private sales: Sale[] = [];

  getSales(): Promise<Sale[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.sales);
      }, 1000); // Simulated delay of 1 second
    });
  }

  addSale(sale: Sale): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        sale.id = this.sales.length + 1;
        this.sales.push(sale);
        resolve();
      }, 1000); // Simulated delay of 1 second
    });
  }


}
