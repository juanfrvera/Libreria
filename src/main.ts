import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import "reflect-metadata";
import { createConnection } from "typeorm";


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "juan",
  password: "juan",
  database: "libreria",
  entities: [
    "./entity/*.ts"
  ],
  synchronize: true,
  logging: false
}).then(async connection => {
  alert("hola");
}).catch(error => console.log(error));
