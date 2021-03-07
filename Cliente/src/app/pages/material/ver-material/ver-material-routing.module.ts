import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerMaterialPage } from './ver-material.page';

const routes: Routes = [
  {
    path: '',
    component: VerMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerMaterialPageRoutingModule {}
