import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovimientoEjemplarPageRoutingModule } from './movimiento-ejemplar-routing.module';

import { MovimientoEjemplarPage } from './movimiento-ejemplar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovimientoEjemplarPageRoutingModule
  ],
  declarations: [MovimientoEjemplarPage]
})
export class MovimientoEjemplarPageModule {}
