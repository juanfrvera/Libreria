///<reference path="../Servicios/Dtos.ts" />

namespace Libreria {
    namespace Interfaces
    {

        export interface IMateriales {
            EliminarMaterial(id: number): void;

            AgregarMateriales(materiales: Array<Servicios.MaterialDto>): void;

            ListarMateriales(filtro: Servicios.FiltroMaterialDto): Array<Servicios.MaterialDto>;

            ActualizarMaterial(nuevoMaterial:Servicios.MaterialDto):void;

            ConsultarMaterial(id:number):Servicios.MaterialDto;

            EliminarMaterial(id:number):void;
        }
    }
}
