import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IMovimientoEjemplarCrearDto } from '../../data/dto/movimiento-ejemplar-crear-dto';
import { MovimientoEjemplarPage } from './movimiento-ejemplar/movimiento-ejemplar.page';

@Component({
  selector: 'app-ejemplar',
  templateUrl: './ejemplar.page.html',
  styleUrls: ['./ejemplar.page.scss'],
})
export class EjemplarPage implements OnInit {

  constructor(private modalControler: ModalController) { }

  ngOnInit() {
  }

  public clickEgreso() {
    this.mostrarModalMovimiento();
  }
  public clickIngreso() {
    this.mostrarModalMovimiento();
  }

  private async mostrarModalMovimiento() {
    const modal = await this.modalControler.create({
      component: MovimientoEjemplarPage,
      cssClass: 'modal-movimiento-ejemplar'
    });
    await modal.present();
    const { data: resultado } = await modal.onDidDismiss<IMovimientoEjemplarCrearDto>();

    if(resultado){

    }
  }
}
