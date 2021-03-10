import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IMaterialDto } from '../data/dto/material-dto';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let materiales: IMaterialDto[] = [
      {
        id: 1,
        titulo: "Material 1",
        nombreAutor: "John F. Kennedy",
        stock: 3,
        precio: 500,
      },
      {
        id: 2,
        titulo: "Material 2",
        nombreAutor: "Homero",
        stock: 5,
        precio: 150,
      },
      {
        id: 3,
        titulo: "Material 3",
        nombreAutor: "Carl Johnson",
        stock: 0,
        precio: 1500,
      },
      {
        id: 4,
        titulo: "Material 4 de título medio largo",
        nombreAutor: "Autor de nombre largo, con varios apellidos",
        stock: 10,
        precio: 100,
      }
    ];

    return { materiales };
  }
}
