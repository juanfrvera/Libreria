import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let materiales = [
      {
        id: 1,
        titulo: "Material 1",
        nombreAutor: "John F. Kennedy",
        stock: 3
      },
      {
        id: 2,
        titulo: "Material 2",
        nombreAutor: "Homero",
        stock: 5
      },
      {
        id: 3,
        titulo: "Material 3",
        nombreAutor: "Carl Johnson",
        stock: 0
      },
      {
        id: 4,
        titulo: "Material 4 de título medio largo",
        nombreAutor: "Autor de nombre largo, con varios apellidos",
        stock: 10
      }
    ];

    return { materiales };
  }
}
