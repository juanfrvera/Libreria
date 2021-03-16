import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IMaterialListarDto } from '../../../data/dto/material-listar-dto';

@Component({
  selector: 'app-seleccion-material',
  templateUrl: './seleccion-material.page.html',
  styleUrls: ['./seleccion-material.page.scss'],
})
export class SeleccionMaterialPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }


  seleccionado(elemento: IMaterialListarDto) {
    this.modalController.dismiss(elemento);
  }

}
