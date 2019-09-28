import {Item} from './Item'
export class Linea {
  private idItem: string;

  private cantidad: number;
  get Cantidad(): number {
    return this.cantidad;
  }
  constructor(idItem: string) {
    this.idItem = idItem;
    this.cantidad = 1;
  }
  Aumentar() {
    this.cantidad++;
  }
  Reducir() {
    this.cantidad--;
  }
  IsId(id : string){
    return this.idItem == id;
  }
}