import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Material } from 'src/model/Material';
import { VariablesService } from 'src/services/Variables';

@Component({
  selector: 'material-page',
  templateUrl: 'material.page.html',
  styleUrls: ['material.page.scss']
})
export class MaterialPage implements OnInit {
  item: Material;

  constructor(private modalController: ModalController, private navParams: NavParams, private variables : VariablesService) {}
  
  ngOnInit() {
    this.item = this.navParams.data.item;
  }
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }
  AgregarACarrito(material: Material) {
    material.Carrito++;
    this.variables.Carrito.Aumentar(material.Id);
  }
  Reducir(material: Material) {
    material.Carrito--;
    this.variables.Carrito.Reducir(material.Id);
  }
}