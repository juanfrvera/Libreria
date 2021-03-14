import { Injectable } from '@angular/core';
import { IMaterialCrearDto } from '../data/dto/material-crear-dto';
import { IMaterialDto } from '../data/dto/material-dto';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private server: ServerService) { }

  public crearMaterial(datos: IMaterialCrearDto) {
    return this.server.crearMaterial(datos);
  }

  public editarMaterial(id: number, datos: IMaterialDto) {
    return this.server.editarMaterial(id, datos);
  }

  public eliminarMaterial(id: number) {
    return this.server.eliminarMaterial(id);
  }

  public obtenerListaMateriales(buscado: string = "") {
    return this.server.obtenerListaMateriales(buscado);
  }

  /**
   * Devuelve el material completo
   * @param id Id del material
   */
  public obtenerMaterial(id: number) {
    return this.server.obtenerMaterial(id);
  }

  public obtenerListaMovimientosEjemplares() {
    return this.server.obtenerListaMovimientosEjemplares();
  }
}
