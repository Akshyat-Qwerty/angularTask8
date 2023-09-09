
export class Sale {
    id: number;
    itemId: number;
    quantity: number;
    date: Date;
  
    constructor(id: number, itemId: number, quantity: number, date: Date) {
      this.id = id;
      this.itemId = itemId;
      this.quantity = quantity;
      this.date = date;
    }
  }
  