import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IMaterialCrearDto } from '../data/dto/material-crear-dto';
import { IMaterialDto } from '../data/dto/material-dto';
import { IMaterialListarDto } from '../data/dto/material-listar-dto';
import { IMovimientoEjemplarListarDto } from '../data/dto/movimiento-ejemplar-listar-dto';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private readonly apiFalsa = "api/";
  private readonly apiReal = "http://localhost:3001/api/";

  private readonly api;

  constructor(private http: HttpClient) {
    if (environment.usarServerFalso)
      this.api = this.apiFalsa;
    else
      this.api = this.apiReal;
  }

  public crearMaterial(datos: IMaterialCrearDto) {
    return this.http.post<IMaterialDto>(this.api + "materiales", datos);
  }

  public editarMaterial(id: number, datos: IMaterialDto) {
    return this.http.put<IMaterialDto>(this.api + "materiales/" + id, datos);
  }

  public eliminarMaterial(id: number) {
    return this.http.delete(this.api + "materiales/" + id);
  }

  public obtenerListaMateriales(buscado: string = "") {
    return this.http.get<IMaterialListarDto[]>(this.api + "materiales/?titulo=" + buscado);
  }

  public obtenerMaterial(id: number) {
    return this.http.get<IMaterialDto>(this.api + "materiales/" + id);
  }

  public obtenerListaMovimientosEjemplares() {
    return this.http.get<IMovimientoEjemplarListarDto[]>(this.api + "movimientosEjemplares");
  }
}
