import "reflect-metadata";
//import { createConnection, ConnectionManager } from "typeorm";
import { Catalog } from "./entity/Catalog";

import { createConnection, Connection } from "typeorm";

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