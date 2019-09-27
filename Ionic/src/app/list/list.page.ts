import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MaterialPage } from './material/material.page';

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

  constructor(public modalController: ModalController) {
    for (let i = 1; i < 20; i++) {
      this.items.push({
        title: 'Libro ' + i,
        autor: 'Sandro',
        precio: '$' + (i * 10),
        stock: i,
        carrito: this.listaCarrito[i]
      });
    }
  }

  async mostrarMaterial() {
    const modal = await this.modalController.create({
      component: MaterialPage
    });
    return await modal.present();
  }

  clickMaterial(item : Item){
    alert("click "+item.title);
  }

  ngOnInit() { }
}
class Item{
  title: string; autor: string; precio: string; stock: number; carrito: number;
}