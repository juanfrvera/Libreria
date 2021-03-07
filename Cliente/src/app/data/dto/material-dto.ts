/** Versión liviana de material usada en listas */
export interface IMaterialDto {
    id: number;
    titulo: string;
    /** Nombre del autor */
    nombreAutor: string;
    precio: number;
    /** Cantidad disponible */
    stock: number;
}
