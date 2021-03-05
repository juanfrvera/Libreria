import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { paginas } from './const/paginas';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  ...paginas.map(p => {
    return {
      path: p.url,
      loadChildren: p.loadChildren
    }
  }),
  {
    path: 'medio-pago',
    loadChildren: () => import('./pages/medio-pago/medio-pago.module').then(m => m.MedioPagoPageModule)
  },
  {
    path: 'material',
    loadChildren: () => import('./pages/material/material.module').then(m => m.MaterialPageModule)
  },
  {
    path: 'proveedor',
    loadChildren: () => import('./pages/proveedor/proveedor.module').then(m => m.ProveedorPageModule)
  },
  {
    path: 'capital',
    loadChildren: () => import('./pages/capital/capital.module').then(m => m.CapitalPageModule)
  },
  {
    path: 'publicacion',
    loadChildren: () => import('./pages/publicacion/publicacion.module').then(m => m.PublicacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
