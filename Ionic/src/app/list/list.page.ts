import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { MaterialPage } from './material/material.page';
import { Item } from './../../model/Item';
import { VariablesService } from './../../services/Variables';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})


export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];

  public items: Array<Item> = [];

  private listaCarrito: Array<number> = new Array<number>(20).fill(0);


  constructor(private variables: VariablesService, private modalController: ModalController, private router: Router,
    public alertController: AlertController) {
    for (let i = 1; i < 20; i++) {
      this.items.push({
        id: i.toString(),
        titulo: 'Libro ' + i,
        autor: 'Sandro',
        precio: '$' + (i * 10),
        stock: i,
        carrito: this.variables.carrito.CantidadEnCarrito(i.toString())
      });
    }
  }

  async mostrarMaterial(item: Item) {
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

  clickMaterial(item: Item) {
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

  agregarCarrito(item: Item) {
    item.carrito++;
    this.variables.carrito.Agregar(item.id);
  }
  aumentar(item: Item) {
    item.carrito++;
    this.variables.carrito.Agregar(item.id);
  }
  reducir(item: Item) {
    item.carrito--;
    this.variables.carrito.Reducir(item.id);
  }
}