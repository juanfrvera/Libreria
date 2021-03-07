import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { IMaterialDto } from '../../data/dto/material-dto';
import { IMaterialCrearDto } from '../../data/dto/material-crear-dto';
import { IMaterialListarDto } from '../../data/dto/material-listar-dto';
import { AppService } from '../../services/app.service';
import { NuevoMaterialPage } from './nuevo-material/nuevo-material.page';
import { VerMaterialPage } from './ver-material/ver-material.page';

@Component({
  selector: 'app-material',
  templateUrl: './material.page.html',
  styleUrls: ['./material.page.scss'],
})
export class MaterialPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;


  private lista: IMaterialListarDto[];

  public get Lista() {
    return this.lista;
  }

  constructor(private app: AppService, private modalController: ModalController) { }

  ngOnInit() {
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
    const materialCompleto = this.app.obtenerMaterial(material.id);
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
    const { data: resultado } = await modal.onDidDismiss<IMaterialCrearDto>();

    if (resultado) {
      this.app.crearMaterial(resultado).subscribe(creado => {
        const elementoLiviano: IMaterialListarDto = {
          id: creado.id,
          titulo: creado.titulo,
          nombreAutor: creado.nombreAutor,
          stock: creado.stock
        };

        this.lista.push(elementoLiviano);
      });
    }
  }

  private async mostrarModalVer(material: IMaterialDto) {
    const modal = await this.modalController.create({
      component: VerMaterialPage,
      cssClass: 'modal-ver-material',
      componentProps: {
        material: material
      }
    });
    await modal.present();
  }

  private cargarLista() {
    this.app.obtenerListaMateriales().subscribe(respuesta => {
      this.lista = respuesta;
    });
  }
}
