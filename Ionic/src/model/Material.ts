export class Material {
  private id: string;
  private titulo: string;
  private autor: string;
  private proveedor: string;
  private precio: string;
  private stock: number;
  private carrito: number;//Guarda la cantidad de este material que hay en el carrito

  //Propiedades
  get Id(): string { return this.id; }
  get Titulo(): string { return this.titulo; }
  get Autor(): string { return this.autor; }
  get Proveedor(): string { return this.proveedor; }
  get Precio(): string { return this.precio; }
  get Stock(): number { return this.stock; }
  set Carrito(value: number) { this.carrito = value; }
  get Carrito(): number { return this.carrito; }

  //Constructores

  constructor(id: string, titulo: string, autor: string, proveedor: string, precio: string, stock: number, carrito: number) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.proveedor = proveedor;
    this.precio = precio;
    this.stock = stock;
    this.carrito = carrito;
  }
}