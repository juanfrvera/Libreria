import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerMaterialPageRoutingModule } from './ver-material-routing.module';

import { VerMaterialPage } from './ver-material.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerMaterialPageRoutingModule
  ],
  declarations: [VerMaterialPage]
})
export class VerMaterialPageModule {}
