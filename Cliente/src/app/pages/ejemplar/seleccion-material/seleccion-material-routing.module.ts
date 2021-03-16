import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionMaterialPage } from './seleccion-material.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionMaterialPageRoutingModule {}
