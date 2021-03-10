/** Versión liviana de material usada en listas */
export interface IMaterialDto {
    id: number;
    titulo: string;
    /** Nombre del autor */
    nombreAutor?: string;
    precio?: number;
    isbn?: string;
    issn?: string;
    edicion?: string;
    /** Cantidad disponible */
    stock?: number;
    ubicacion?: string;
}
