import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialPage } from './material.page';

const routes: Routes = [
  {
    path: '',
    component: MaterialPage
  },
  {
    path: 'nuevo-material',
    loadChildren: () => import('./nuevo-material/nuevo-material.module').then( m => m.NuevoMaterialPageModule)
  },
  {
    path: 'ver-material',
    loadChildren: () => import('./ver-material/ver-material.module').then( m => m.VerMaterialPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialPageRoutingModule {}
