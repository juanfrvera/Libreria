import { Injectable } from '@angular/core';
import { Carrito } from 'src/model/Carrito';
import { BaseDeDatos } from 'src/model/BaseDedatos';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
  private carrito: Carrito;
  private baseDeDatos: BaseDeDatos;

  get Carrito() : Carrito{
    return this.carrito;
  }
  get BaseDeDatos() : BaseDeDatos{
    return this.baseDeDatos;
  }

  Inicializar() {
    if (this.carrito == null)
      this.carrito = new Carrito();

    if (this.baseDeDatos == null){
      this.baseDeDatos = new BaseDeDatos();
    }
  }
}