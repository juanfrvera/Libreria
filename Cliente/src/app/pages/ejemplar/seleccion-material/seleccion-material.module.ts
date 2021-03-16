import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionMaterialPageRoutingModule } from './seleccion-material-routing.module';

import { SeleccionMaterialPage } from './seleccion-material.page';
import { SelectorMaterialComponent } from '../../../components/selector-material/selector-material.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionMaterialPageRoutingModule
  ],
  declarations: [SeleccionMaterialPage, SelectorMaterialComponent]
})
export class SeleccionMaterialPageModule { }
