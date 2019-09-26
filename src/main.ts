import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import "reflect-metadata";
import { createConnection, ConnectionManager } from "typeorm";
import { Catalog } from "./entity/Catalog";

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "juan",
  password: "juan",
  database: "libreria",
  entities: [
    Catalog
    //"./entity/*.ts"
  ]
}).then(async connection => {
  let catalog = new Catalog();
  catalog.journal = "Oracle Magazine";
  catalog.publisher = "Oracle Publishing";
  catalog.edition = "March-April 2005";
  catalog.title = "Starting with Oracle ADF";
  catalog.author = "Steve Muench";
  catalog.isPublished = true;

  await connection.manager.save(catalog);
  console.log('Catalog has been saved' + '\n');
}).catch(error => console.log(error));
/*createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "juan",
  password: "juan",
  database: "libreria",
  entities: [
    Catalog
    //"./entity/*.ts"
  ],
  synchronize: true,
  logging: false
}).then(async connection => {
  let cat = new Catalog();
  cat.author = "Juan";
  cat.edition = "3";

  await connection.manager.save(cat);
  console.log("Categoría guardada");

}).catch(error => console.log(error));
*/
enableProdMode();
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


