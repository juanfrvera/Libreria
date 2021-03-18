export interface IMovimientoEjemplarDto {
    id: number;
    idMaterial: number;
    idUsuario: number;
    cantidad: number;
    fecha?: Date;
    detalle?: string;
    // TODO: sacarle el opcional, está así por la in-memory-web-api
    nombreMaterial?: string;
}
