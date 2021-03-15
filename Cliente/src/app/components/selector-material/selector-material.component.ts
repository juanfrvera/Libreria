import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { IMaterialListarDto } from '../../data/dto/material-listar-dto';
import { AppService } from '../../services/app.service';
import { Util } from '../../util';

@Component({
  selector: 'app-selector-material',
  templateUrl: './selector-material.component.html',
  styleUrls: ['./selector-material.component.scss'],
})
export class SelectorMaterialComponent implements OnInit {
  @Output() onClick = new EventEmitter<IMaterialListarDto>();

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  private busqueda: string;
  private cargando: boolean = true;
  private lista: IMaterialListarDto[];

  public set Busqueda(valor: string) {
    this.busqueda = valor;
  }

  public get Cargando() {
    return this.cargando;
  }

  public get Lista() {
    return this.lista;
  }

  constructor(private app: AppService) { }

  ngOnInit() {
    this.cargarLista();
  }

  public agregar(elemento: IMaterialListarDto) {
    this.lista.push(elemento);
  }

  public busquedaCambiada() {
    this.cargarLista();
  }

  // Cuando el infinite scroll es triggereado
  public cargarMas(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (true) {//data.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  public click(elemento: IMaterialListarDto) {
    this.onClick.emit(elemento);
  }

  public eliminar(elemento: IMaterialListarDto) {
    Util.eliminarElemento(this.lista, elemento);
  }


  private cargarLista() {
    this.cargando = true;
    this.app.obtenerListaMateriales(this.busqueda).subscribe(respuesta => {
      this.lista = respuesta;
      this.cargando = false;
    });
  }

}
