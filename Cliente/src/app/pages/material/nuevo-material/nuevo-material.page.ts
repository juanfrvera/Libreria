import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IMaterialCrearDto } from '../../../data/dto/material-crear-dto';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-nuevo-material',
  templateUrl: './nuevo-material.page.html',
  styleUrls: ['./nuevo-material.page.scss'],
})
export class NuevoMaterialPage implements OnInit {

  private datos: IMaterialCrearDto;
  private trabajando: boolean;

  public get Datos() {
    return this.datos;
  }

  public get Trabajando() {
    return this.trabajando;
  }

  constructor(private app: AppService, private modalController: ModalController) { }

  ngOnInit() {
    this.datos = {} as IMaterialCrearDto;
  }

  public clickAceptar() {
    this.trabajando = true;
    this.app.crearMaterial(this.datos).subscribe(creado => {
      // TODO: ver si hay errores y mostrarlos, cancelando el dismiss
      this.modalController.dismiss(creado);
      this.trabajando = false;
    });
  }

  public clickCancelar() {
    this.modalController.dismiss();
  }
}
