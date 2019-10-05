///<reference path="../Servicios/Dtos.ts" />
import MaterialDto = Libreria.Servicios.MaterialDto;
import FiltroMaterialDto = Libreria.Servicios.FiltroMaterialDto;

namespace Libreria {
    namespace Interfaces
    {

        export interface IMateriales {
            EliminarMaterial(id: number): void;

            AgregarMateriales(materiales: Array<MaterialDto>): number;

            ListarMateriales(filtro: FiltroMaterialDto): Array<MaterialDto>;

            ActualizarMaterial(nuevoMaterial:MaterialDto):void;

            ConsultarMaterial(id:number):MaterialDto;

            EliminarMaterial(id:number):void;
        }
    }
}
