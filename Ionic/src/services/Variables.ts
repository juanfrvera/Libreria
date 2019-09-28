import { Injectable } from '@angular/core';
import { Carrito } from 'src/model/Carrito';

@Injectable({
  providedIn: 'root'
})
export class VariablesService{
    carrito : Carrito;
}