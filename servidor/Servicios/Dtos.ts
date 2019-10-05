module Libreria {
    export module Servicios {

        export class DtoBase {
            id:number;
        }

        //DTOs de los objetos del dominio
        export class MaterialDto extends DtoBase {
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

        export class ProveedorDto extends DtoBase {
            nombre:string;
            email:string;
            contacto:string;
            observaciones:string;
        }

        export class VentaDto extends DtoBase {
            anulada:boolean;
            monto:number;
            fecha:Date;
            medioDePago:number;
            lineasDeVenta:Array<LineaDeVentaDto>;
        }

        export class LineaDeVentaDto extends DtoBase {
            cantidad:number;
            precio:number;
            desecuento:number;
        }

        export class VentasLiteDto extends DtoBase {
            anulada:boolean;
            monto:number;
            fecha:Date;
            nombreMedioDePago:string;
        }

        export class MedioDePagoDto extends DtoBase {
            nombre:string;
            comision: number;
            tipo:TipoDeCargoDto;
        }

        export enum TipoDeCargoDto {
            fijo,
            porcentual
        }

        export class CategoriaDto extends DtoBase {
            nombre:string;
        }

        export class AutorDto extends DtoBase {
            nombres:Array<string>;
            apellidos:Array<string>;
        }

        //DTOs filtros
        export class FiltroMaterialDto {}
    }
}
