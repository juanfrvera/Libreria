import { IMaterialEditarDto } from "../dto/material-editar-dto";
import { Accion } from "./accion-ver-entidad";

export interface IResultadoVerMaterial {
    accion: Accion;
    datos?: IMaterialEditarDto;
}