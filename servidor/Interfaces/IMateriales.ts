///<reference path="../Servicios/Dtos.ts" />
import MaterialDto = Libreria.Servicios.MaterialDto;
import FiltroMaterialDto = Libreria.Servicios.FiltroMaterialDto;

namespace Libreria {
    namespace Interfaces
    {

        export interface IMateriales {
            EliminarMaterial(id: number): void;

            AgregarMateriales(materiales: Array<MaterialDto>): void;

            ListarMateriales(filtro: FiltroMaterialDto): Array<MaterialDto>;

            ActualizarMaterial(nuevoMaterial:MaterialDto):void;

            ConsultarMaterial(id:number):MaterialDto;

            EliminarMaterial(id:number):void;
        }

        export interface IVentas {
            AgregarVenta(unaVenta:VentaDto):void;
            ListarVentas(unFiltro: FiltroVentasDto):Array<VentasLiteDto>;
            ConsultarVenta(id:number):VentaDto;
            AnularVenta(id:number):void;
            EsNula(id:number):boolean;
        }

        export interface IDataManager {
            Consultar(id:number):DtoBase;
            Agregar(unElemento:DtoBase):void;
            Listar(): Array<DtoBase>;
            Eliminar(id:number):number;
            Actualizar(nuevoElemento:DtoBase):void;
        }
    }
}
