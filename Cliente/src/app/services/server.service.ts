import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMaterialCrearDto } from '../data/dto/material-crear-dto';
import { IMaterialDto } from '../data/dto/material-dto';
import { IMaterialListarDto } from '../data/dto/material-listar-dto';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private readonly api = "api/";

  constructor(private http: HttpClient) { }

  public crearMaterial(datos: IMaterialCrearDto) {
    return this.http.post<IMaterialDto>(this.api + "materiales", datos);
  }

  public obtenerListaMateriales() {
    return this.http.get<IMaterialListarDto[]>(this.api + "materiales");
  }

  public obtenerMaterial(id: number) {
    return this.http.get<IMaterialDto>(this.api + "materiales/" + id);
  }
}
