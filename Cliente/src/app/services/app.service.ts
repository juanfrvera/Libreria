import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private materiales = [
    {
      id: 1,
      titulo: "Material 1",
      autor: "John F. Kennedy",
      precio: 100,
      stock: 3,
    },
    {
      id: 2,
      titulo: "Material 2",
      autor: "Homero",
      precio: 500,
      stock: 5,
    },
    {
      id: 3,
      titulo: "Material 3",
      autor: "Carl Johnson",
      precio: 150,
      stock: 0
    }
  ];

  public get Materiales() {
    return this.materiales;
  }

  constructor() { }
}
