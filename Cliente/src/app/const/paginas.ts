import { LoadChildren } from "@angular/router";

interface Pagina {
    loadChildren: LoadChildren,
    nombre: string;
    url: string;
}

export const paginas: Array<Pagina> = [
    {
        loadChildren: () => import('../pages/venta/venta.module').then(m => m.VentaPageModule),
        nombre: "Ventas",
        url: "venta"
    }
];