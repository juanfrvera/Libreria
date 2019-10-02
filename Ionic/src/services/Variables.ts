import { Injectable } from '@angular/core';
import { Carrito } from 'src/model/Carrito';
import { BaseDeDatos } from 'src/model/BaseDedatos';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
  carrito: Carrito;
  baseDeDatos: BaseDeDatos;

  Inicializar() {
    if (this.carrito == null)
      this.carrito = new Carrito();

    if (this.baseDeDatos == null)
      this.baseDeDatos = new BaseDeDatos();
  }
}