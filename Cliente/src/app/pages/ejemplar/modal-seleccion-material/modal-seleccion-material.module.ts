import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSeleccionMaterialPageRoutingModule } from './modal-seleccion-material-routing.module';

import { ModalSeleccionMaterialPage } from './modal-seleccion-material.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSeleccionMaterialPageRoutingModule
  ],
  declarations: [ModalSeleccionMaterialPage]
})
export class ModalSeleccionMaterialPageModule {}
