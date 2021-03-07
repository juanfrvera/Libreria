import { IMaterialDto } from "../dto/material-dto";
import { Accion } from "./accion-ver-entidad";

export interface IResultadoVerMaterial {
    accion: Accion;
    datos?: IMaterialDto;
}