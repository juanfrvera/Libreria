import { Linea } from './Linea';

export class Carrito {
  private cantidad: number;
  Cantidad(): number {
    return this.cantidad;
  }

  private lineas: Array<Linea>;

  constructor() {
    this.lineas = new Array<Linea>(0);
    this.cantidad = 0;
  }

  Agregar(idItem: string) {
    this.cantidad++;
    var linea: Linea = this.LineaPorId(idItem);
    if (linea != null) {
      linea.Aumentar();
    }
    else {
      this.lineas.push(new Linea(idItem));
    }
  }
  Reducir(idItem: string) {
    this.cantidad--;

    var linea: Linea = this.LineaPorId(idItem);

    if (linea.Cantidad > 1) {
      linea.Reducir();
    }
    else//Sacar la linea del carrito
      this.lineas.splice(this.lineas.indexOf(linea), 1);
  }

  LineaPorId(id : string) : Linea{
    return this.lineas.find(x => x.IsId(id));
  }

  CantidadEnCarrito(itemId : string) {
    var linea: Linea = this.LineaPorId(itemId);
    if (linea != null)
      return linea.Cantidad;
    else
      return 0;
  }
}