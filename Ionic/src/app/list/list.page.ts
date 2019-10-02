import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { MaterialPage } from './material/material.page';
import { Material } from '../../model/Material';
import { VariablesService } from './../../services/Variables';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list', templateUrl: 'list.page.html', styleUrls: ['list.page.scss']
})

export class ListPage implements OnInit {
  public materiales: Array<Material> = [];

  constructor(private variables: VariablesService, private modalController: ModalController, private router: Router,
    public alertController: AlertController) {
      this.materiales = variables.baseDeDatos.MaterialesDesdeHasta(0, 19);
  }

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

  clickMaterial(item: Material) {
    this.MostrarMaterial(item);
  }
  ngOnInit() { }

  IrACarrito() {
    if (this.variables.carrito.Cantidad > 0)
      this.router.navigate(['/carrito']);
    else {
      if (!this.alertaCarrito)
        this.CarritoVacio();
    }
  }

  //Pequenio arreglo para que no se generen muchos al apretar enter
  private alertaCarrito: boolean = false;
  async CarritoVacio() {
    const alerta = await this.alertController.create({
      header: 'Nada que vender',
      message: 'No hay ningún material en el carrito.',
      buttons: ['OK']
    });

    this.alertaCarrito = true;
    await alerta.present();
    alerta.onDidDismiss().then(x => this.alertaCarrito = false);
  }

  AgregarCarrito(material: Material) {
    material.Carrito++;
    this.variables.carrito.Aumentar(material.Id);
  }
  Aumentar(material: Material) {
    material.Carrito++;
    this.variables.carrito.Aumentar(material.Id);
  }
  Reducir(material: Material) {
    material.Carrito--;
    this.variables.carrito.Reducir(material.Id);
  }
}