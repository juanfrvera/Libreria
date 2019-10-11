import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MaterialPage } from './material/material.page';
import { Material } from '../../model/Material';
import { VariablesService } from './../../services/Variables';
import { Alertas } from 'src/services/Alertas';

@Component({
  selector: 'app-list', templateUrl: 'list.page.html', styleUrls: ['list.page.scss']
})

export class ListPage implements OnInit {
  public materiales: Array<Material> = [];

  constructor(private variables: VariablesService, private modalController: ModalController, private router: Router,
    private alertas: Alertas) {
    this.materiales = variables.BaseDeDatos.MaterialesDesdeHasta(0, 19);
  }
  ngOnInit() { }

  async MostrarMaterial(item: Material) {
    const modal = await this.modalController.create({
      component: MaterialPage,
      componentProps: {
        "item": item
      }
    });

    modal.onDidDismiss().then(() => { });

    return await modal.present();
  }

  ClickMaterial(material: Material) {
    this.MostrarMaterial(material);
  }

  IrACarrito() {
    if (this.variables.Carrito.Cantidad > 0)
      this.router.navigate(['/carrito']);
    else
      this.alertas.Alertar('Nada que vender', 'No hay ningún material en el carrito.');
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