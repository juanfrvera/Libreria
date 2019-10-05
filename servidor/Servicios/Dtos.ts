module Libreria {
    export module Servicios {

        export class DtoBase {
            id:number;
        }

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

        export class ProveedorDto {
            nombre:string;
            email:string;
            contacto:string;
            observaciones:string;
        }

        //DTOs filtros
        export class FiltroMaterialDto {}
    }
}
