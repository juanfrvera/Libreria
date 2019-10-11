import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Material } from 'src/model/Material';
import { VariablesService } from 'src/services/Variables';
import {Alertas} from 'src/services/Alertas';

@Component({
  selector: 'material-page',
  templateUrl: 'material.page.html',
  styleUrls: ['material.page.scss']
})
export class MaterialPage implements OnInit {
  item: Material;

  constructor(private modalController: ModalController, private navParams: NavParams, private variables: VariablesService,
    private alertas : Alertas) { }

  ngOnInit() {
    this.item = this.navParams.data.item;
  }
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  AgregarACarrito(material: Material) {
    //Solo agregar si el stock es suficiente
    if (material.Stock > material.Carrito) {
      material.Carrito++;
      this.variables.Carrito.Aumentar(material.Id);
    }
    else
      this.alertas.Alertar('Stock insuficiente', 'El material seleccionado no cuenta con stock suficiente para ser agregado al carrito');
  }
  Reducir(material: Material) {
    material.Carrito--;
    this.variables.Carrito.Reducir(material.Id);
  }
}