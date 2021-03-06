import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IMaterialCrearDto } from '../../../data/dto/material-crear-dto';

@Component({
  selector: 'app-nuevo-material',
  templateUrl: './nuevo-material.page.html',
  styleUrls: ['./nuevo-material.page.scss'],
})
export class NuevoMaterialPage implements OnInit {

  public datos: IMaterialCrearDto;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.datos = {} as IMaterialCrearDto;
  }

  public clickAceptar() {
    this.modalController.dismiss(this.datos);
  }

  public clickCancelar() {
    this.modalController.dismiss();
  }
}
