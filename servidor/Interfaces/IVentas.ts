///<reference path="../Servicios/Dtos.ts" />

namespace Libreria {
    namespace Interfaces {

        export interface IVentas {
            AgregarVenta(unaVenta: Servicios.VentaDto): void;

            ListarVentas(unFiltro: Servicios.FiltroVentasDto): Array<Servicios.VentasLiteDto>;

            ConsultarVenta(id: number): Servicios.VentaDto;

            AnularVenta(id: number): void;

            EsNula(id: number): boolean;
        }
    }
}
