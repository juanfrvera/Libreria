///<reference path="../Servicios/MaterialDto.ts" />
namespace Libreria.Interfaces {

    import MaterialDto = Libreria.Servicios.MaterialDto;

    interface IMateriales {
        EliminarMaterial(id: number): void;

        AgregarMateriales(materiales: Array<MaterialDto>): number;

        ListarMateriales(filtro: FiltroMaterialDto): Array<MaterialDto>;

        ActualizarMaterial()
    }
}
