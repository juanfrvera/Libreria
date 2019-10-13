using System.Collections.Generic;

namespace Negocio.Dtos
{
    public class MaterialDto : DtoBase
    {
        public string titulo, isbn, issn, ubicacion;
        public short edicion, stock;
        public bool usado, anulado;
        public float precio;
        public int proveedor, categoria;
        public List<int> autores;
    }
}