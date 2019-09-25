import { Component, OnInit } from '@angular/core';

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
  public items: Array<{ title: string; autor:string; precio:string; stock: number; carrito:number; }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Libro ' + i,
        autor: 'Sandro',
        precio: '$'+(i*10),
        stock: i,
        carrito: this.listaCarrito[i]
        //icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  private listaCarrito: Array<number> = new Array<number>(11).fill(0);


  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
