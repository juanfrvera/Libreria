import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { MaterialPage } from './material/material.page';
import { Material } from '../../model/Material';
import { VariablesService } from './../../services/Variables';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})


export class ListPage implements OnInit {
  public items: Array<Material> = [];

  private listaCarrito: Array<number> = new Array<number>(20).fill(0);


  proveedores : string[] = ["Barrile productions","Evil pixi art","Marx Associated","Comando rojo","Sector F", "La revolución",
  "Mariquita Sanchez de Fhonsom","Diney cursed line","Rule 34 limited"];
  Random(array : string[]) : string{
    let length = array.length;
    return array[(Math.floor(Math.random()*(length-1)))];
  }

  constructor(private variables: VariablesService, private modalController: ModalController, private router: Router,
    public alertController: AlertController) {
    for (let i = 1; i < 20; i++) {
      this.items.push({
        id: i.toString(),
        titulo: 'Libro ' + i,
        autor: (Math.random() < 0.333) ? 'Sandro' : ((Math.random() < 0.5) ? 'Tato' : 'Juan'),
        proveedor: this.Random(this.proveedores),
        precio: '$' + (i * 10),
        stock: i,
        carrito: this.variables.carrito.CantidadEnCarrito(i.toString())
      });
    }
  }

  async mostrarMaterial(item: Material) {
    const modal = await this.modalController.create({
      component: MaterialPage,
      componentProps: {
        "item": item
      }
    });

    modal.onDidDismiss().then(() => {

    });

    return await modal.present();
  }

  clickMaterial(item: Material) {
    this.mostrarMaterial(item);
  }
  ngOnInit() { }

  irACarrito() {
    if (this.variables.carrito.Cantidad() > 0)
      this.router.navigate(['/carrito']);
    else {
      if (!this.alertaCarrito)
        this.carritoVacio();
    }
  }

  //Pequenio arreglo para que no se generen muchos al apretar enter
  private alertaCarrito: boolean = false;
  async carritoVacio() {
    const alerta = await this.alertController.create({
      header: 'Nada que vender',
      message: 'No hay ningún material en el carrito.',
      buttons: ['OK']
    });

    this.alertaCarrito = true;
    await alerta.present();
    alerta.onDidDismiss().then(x => this.alertaCarrito = false);
  }

  agregarCarrito(item: Material) {
    item.carrito++;
    this.variables.carrito.Agregar(item.id);
  }
  aumentar(item: Material) {
    item.carrito++;
    this.variables.carrito.Agregar(item.id);
  }
  reducir(item: Material) {
    item.carrito--;
    this.variables.carrito.Reducir(item.id);
  }
}