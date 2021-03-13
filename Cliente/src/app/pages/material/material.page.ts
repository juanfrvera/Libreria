import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { IMaterialCrearDto } from '../../data/dto/material-crear-dto';
import { IMaterialListarDto } from '../../data/dto/material-listar-dto';
import { AppService } from '../../services/app.service';
import { NuevoMaterialPage } from './nuevo-material/nuevo-material.page';
import { VerMaterialPage } from './ver-material/ver-material.page';
import { AccionABM } from '../../data/comunicacion/accion-ver-entidad';
import { Util } from '../../util';
import { IMaterialDto } from '../../data/dto/material-dto';

@Component({
  selector: 'app-material',
  templateUrl: './material.page.html',
  styleUrls: ['./material.page.scss'],
})
export class MaterialPage implements OnInit {
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

  constructor(private app: AppService, private modalController: ModalController) { }

  ngOnInit() {
    this.cargarLista();
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

  public click(material: IMaterialListarDto) {
    this.mostrarModalVer(material);
  }

  public clickNuevo() {
    this.mostrarModalNuevo();
  }

  private async mostrarModalNuevo() {
    const modal = await this.modalController.create({
      component: NuevoMaterialPage,
      cssClass: 'modal-nuevo-material'
    });
    await modal.present();
    const { data: resultado } = await modal.onDidDismiss<IMaterialDto>();

    if (resultado) {
      // Convertir el elemento creado a un elemento liviano para listarlo
      const elementoLiviano: IMaterialListarDto = {
        id: resultado.id,
        titulo: resultado.titulo,
        nombreAutor: resultado.nombreAutor,
        stock: resultado.stock
      };

      this.lista.push(elementoLiviano);
    }
  }

  private async mostrarModalVer(material: IMaterialListarDto) {
    const modal = await this.modalController.create({
      component: VerMaterialPage,
      cssClass: 'modal-ver-material',
      componentProps: {
        materialLiviano: material
      }
    });
    await modal.present();
    const { data: resultado } = await modal.onDidDismiss<AccionABM>();

    if (resultado) {
      switch (resultado) {
        case AccionABM.Eliminar:
          Util.eliminarElemento(this.lista, material);
          break;

        default:
          break;
      }
    }
  }

  private cargarLista() {
    this.cargando = true;
    this.app.obtenerListaMateriales(this.busqueda).subscribe(respuesta => {
      this.lista = respuesta;
      this.cargando = false;
    });
  }
}
