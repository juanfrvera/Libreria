import {Item} from './Item'
export class Linea {
  private item: Item;

  get Item(): Item {
    return this.item;
  }

  private cantidad: number;
  get Cantidad(): number {
    return this.cantidad;
  }
  constructor(item: Item) {
    this.item = item;
    this.cantidad = 1;
  }
  Aumentar() {
    this.cantidad++;
  }
  Reducir() {
    this.cantidad--;
  }
}