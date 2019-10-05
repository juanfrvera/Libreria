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

        export class VentaDto {
            anulada:boolean;
            monto:number;
            fecha:Date;
            nombreMedioDePago:string;
            lineasDeVenta:Array<LineaDeVentaDto>;
        }

        export class LineaDeVentaDto {
            cantidad:number;
            precio:number;
            desecuento:number;
            idMaterial:number;
        }

        export class VentasLiteDto {
            anulada:boolean;
            monto:number;
            fecha:Date;
            nombreMedioDePago:string;
        }

        //DTOs filtros
        export class FiltroMaterialDto {}
    }
}
