///<reference path="../Servicios/Dtos.ts" />

namespace Libreria {
    namespace Interfaces {
        export interface IDataManager {
            Consultar(id: number): Servicios.DtoBase;

            Agregar(unElemento: Servicios.DtoBase): void;

            Listar(): Array<Servicios.DtoBase>;

            Eliminar(id: number): number;

            Actualizar(nuevoElemento: Servicios.DtoBase): void;
        }
    }
}
