/** Versión liviana de material usada en listas */
export interface IMaterialListarDto {
    id: number;
    titulo: string;
    /** Nombre del autor */
    nombreAutor: string;
    /** Cantidad disponible */
    stock: number;
}
