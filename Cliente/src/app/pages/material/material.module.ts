import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialPageRoutingModule } from './material-routing.module';

import { MaterialPage } from './material.page';
import { SelectorMaterialComponent } from '../../components/selector-material/selector-material.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialPageRoutingModule
  ],
  declarations: [MaterialPage, SelectorMaterialComponent]
})
export class MaterialPageModule { }
