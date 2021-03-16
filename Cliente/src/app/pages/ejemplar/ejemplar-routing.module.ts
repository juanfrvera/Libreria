import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjemplarPage } from './ejemplar.page';

const routes: Routes = [
  {
    path: '',
    component: EjemplarPage
  },
  {
    path: 'movimiento-ejemplar',
    loadChildren: () => import('./movimiento-ejemplar/movimiento-ejemplar.module').then( m => m.MovimientoEjemplarPageModule)
  },
  {
    path: 'seleccion-material',
    loadChildren: () => import('./seleccion-material/seleccion-material.module').then( m => m.SeleccionMaterialPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjemplarPageRoutingModule {}
