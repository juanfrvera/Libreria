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
    },
    {
        loadChildren: () => import('../pages/material/material.module').then(m => m.MaterialPageModule),
        nombre: "Materiales",
        url: 'material'
    },
    {
        loadChildren: () => import('../pages/ejemplar/ejemplar.module').then(m => m.EjemplarPageModule),
        nombre: "Ejemplares",
        url: 'ejemplar',
    },
    {
        loadChildren: () => import('../pages/proveedor/proveedor.module').then(m => m.ProveedorPageModule),
        nombre: "Proveedores",
        url: 'proveedor',
    },
    {
        loadChildren: () => import('../pages/capital/capital.module').then(m => m.CapitalPageModule),
        nombre: "Capital",
        url: 'capital'
    },
    {
        loadChildren: () => import('../pages/medio-pago/medio-pago.module').then(m => m.MedioPagoPageModule),
        nombre: "Medios de Pago",
        url: 'medio-pago',
    },
    {
        loadChildren: () => import('../pages/publicacion/publicacion.module').then(m => m.PublicacionPageModule),
        nombre: "Publicaciones ML",
        url: 'publicacion',
    },
];