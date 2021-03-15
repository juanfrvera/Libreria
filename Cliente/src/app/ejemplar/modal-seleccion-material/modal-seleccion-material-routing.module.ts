import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSeleccionMaterialPage } from './modal-seleccion-material.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSeleccionMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSeleccionMaterialPageRoutingModule {}
