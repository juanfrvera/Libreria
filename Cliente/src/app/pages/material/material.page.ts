import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { IMaterialCrearDto } from '../../data/dto/material-crear-dto';
import { AppService } from '../../services/app.service';
import { NuevoMaterialPage } from './nuevo-material/nuevo-material.page';

@Component({
  selector: 'app-material',
  templateUrl: './material.page.html',
  styleUrls: ['./material.page.scss'],
})
export class MaterialPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public get Lista() {
    return this.app.Materiales;
  }

  constructor(private app: AppService, private modalController: ModalController) { }

  ngOnInit() {
  }

  // Cuando el infinite scroll es triggereado
  public cargarMas(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (true) {//data.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  public clickNuevo() {
    this.mostrarModalNuevo();
  }

  private async mostrarModalNuevo() {
    const modal = await this.modalController.create({
      component: NuevoMaterialPage,
      cssClass: 'modal-nuevo-material'
    });
    await modal.present();
    const { data: resultado } = await modal.onDidDismiss<IMaterialCrearDto>();

    if (resultado) {
      this.app.crearMaterial(resultado);
    }
  }
}
