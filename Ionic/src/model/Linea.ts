export class Linea {
  private idMaterial: string;
  private cantidad: number;

  //Propiedades
  get IdMaterial() : string{return this.idMaterial;}
  get Cantidad(): number {return this.cantidad;}

  //Constructores
  constructor(idItem: string) {
    this.idMaterial = idItem;
    this.cantidad = 1;
  }

  //Métodos
  Aumentar() {
    this.cantidad++;
  }
  Reducir() {
    this.cantidad--;
  }
}