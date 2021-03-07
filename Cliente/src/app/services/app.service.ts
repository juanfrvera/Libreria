import { Injectable } from '@angular/core';
import { IMaterialCrearDto } from '../data/dto/material-crear-dto';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private server: ServerService) { }

  public crearMaterial(datos: IMaterialCrearDto) {
    return this.server.crearMaterial(datos);
  }

  public eliminarMaterial(id: number) {
    return this.server.eliminarMaterial(id);
  }

  public obtenerListaMateriales() {
    return this.server.obtenerListaMateriales();
  }

  /**
   * Devuelve el material completo
   * @param id Id del material
   */
  public obtenerMaterial(id: number) {
    return this.server.obtenerMaterial(id);
  }
}
