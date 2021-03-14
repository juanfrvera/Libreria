export interface IMovimientoEjemplarDto {
    id: number;
    idMaterial: number;
    idUsuario: number;
    cantidad: number;
    fecha?: Date;
    detalle?: string;
}
