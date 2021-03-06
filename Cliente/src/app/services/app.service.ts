import { Injectable } from '@angular/core';
import { IMaterialCrearDto } from '../data/dto/material-crear-dto';
import { IMaterialListarDto } from '../data/dto/material-listar-dto';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private materiales: Array<IMaterialListarDto> = [
    {
      id: 1,
      titulo: "Material 1",
      nombreAutor: "John F. Kennedy",
      precio: 100,
      stock: 3,
    },
    {
      id: 2,
      titulo: "Material 2",
      nombreAutor: "Homero",
      precio: 500,
      stock: 5,
    },
    {
      id: 3,
      titulo: "Material 3",
      nombreAutor: "Carl Johnson",
      precio: 150,
      stock: 0
    },
    {
      id: 4,
      titulo: "Material 4 de título medio largo",
      nombreAutor: "Autor de nombre largo, con varios apellidos",
      precio: 1000,
      stock: 10
    }
  ];

  public get Materiales() {
    return this.materiales;
  }

  constructor() { }

  public crearMaterial(datos: IMaterialCrearDto) {

    const nuevoId = this.Materiales[this.Materiales.length - 1].id + 1;

    const nuevoElemento: IMaterialListarDto = {
      id: nuevoId,
      titulo: datos.titulo,
      nombreAutor: datos.nombreAutor,
      precio: datos.precio,
      stock: 0
    };

    this.materiales.push(nuevoElemento);
  }
}
