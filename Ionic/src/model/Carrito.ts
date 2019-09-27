import { Item } from './Item';
import { Linea } from './Linea';

export class Carrito {
  static cantidad: number;
  static Cantidad(): number {
    return Carrito.cantidad;
  }

  private static lineas: Array<Linea>;

  static Initialize() {
    alert("Inicializado");
    Carrito.lineas = new Array<Linea>(0);
    Carrito.cantidad = 0;
  }

  private static Linea(item: Item): Linea {
    return Carrito.lineas.find(x => x.Item == item);
  }

  static Agregar(item: Item) {
    Carrito.cantidad++;
    item.carrito++;//Informarle al item que tiene uno más en carrito
    var linea: Linea = Carrito.Linea(item);
    if (linea != null) {
      linea.Aumentar();
    }
    else {
      Carrito.lineas.push(new Linea(item));
    }
  }
  static Reducir(item: Item) {
    Carrito.cantidad--;
    item.carrito--;

    var linea: Linea = Carrito.Linea(item);

    if (linea.Cantidad > 1) {
      linea.Reducir();
    }
    else//Sacar la linea del carrito
      Carrito.lineas.splice(Carrito.lineas.indexOf(linea), 1);
  }
}