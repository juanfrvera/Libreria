import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovimientoEjemplarPage } from './movimiento-ejemplar.page';

const routes: Routes = [
  {
    path: '',
    component: MovimientoEjemplarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovimientoEjemplarPageRoutingModule {}
