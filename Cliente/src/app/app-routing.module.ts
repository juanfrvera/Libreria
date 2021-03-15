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
    path: 'modal-seleccion-material',
    loadChildren: () => import('./ejemplar/modal-seleccion-material/modal-seleccion-material.module').then( m => m.ModalSeleccionMaterialPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
