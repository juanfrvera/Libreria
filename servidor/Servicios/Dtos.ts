module Libreria {
    export module Servicios {
        //DTOs de los objetos del dominio
        export class MaterialDto {
            titulo: string;
            isbn:string;
            edicion:number;
            issn:string;
            ubicacion:string;
            precio:number;
            stock:number;
            anulado:boolean;
            idMaterial:string;
            usado:boolean;
            proveedor:number;
        }

        //DTOs filtros
        export class FiltroMaterialDto {}
    }
}
