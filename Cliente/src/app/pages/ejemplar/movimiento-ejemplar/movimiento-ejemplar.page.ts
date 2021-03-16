import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IMaterialListarDto } from '../../../data/dto/material-listar-dto';
import { SeleccionMaterialPage } from '../seleccion-material/seleccion-material.page';

@Component({
  selector: 'app-movimiento-ejemplar',
  templateUrl: './movimiento-ejemplar.page.html',
  styleUrls: ['./movimiento-ejemplar.page.scss'],
})
export class MovimientoEjemplarPage implements OnInit {

  private material: IMaterialListarDto;

  public get Material() {
    return this.material;
  }

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  // Para seleccionar un material
  public clickMaterial() {
    this.mostrarModalSeleccionMaterial();
  }

  private async mostrarModalSeleccionMaterial() {
    const modal = await this.modalController.create({
      component: SeleccionMaterialPage,
      cssClass: 'modal-seleccion-material',
    });

    await modal.present();
    const { data: resultado } = await modal.onDidDismiss<IMaterialListarDto>();

    // Guardar solo si se seleccionó, sino dejar el viejo
    if (resultado) {
      this.material = resultado;
    }
  }
}
