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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjemplarPageRoutingModule {}
