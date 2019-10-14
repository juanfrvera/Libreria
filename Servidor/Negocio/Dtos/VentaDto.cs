using System.Collections.Generic;

namespace Negocio.Dtos
{
    public class VentaDto : DtoBase
    {
        public bool anulada;
        public float monto;
        public string fecha;
        public int idMedioDePago;
        public List<LineaDeVentaDto> lineasDeVenta;
    }    
}