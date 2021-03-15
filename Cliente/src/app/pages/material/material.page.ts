import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IMaterialListarDto } from '../../data/dto/material-listar-dto';
import { AppService } from '../../services/app.service';
import { NuevoMaterialPage } from './nuevo-material/nuevo-material.page';
import { VerMaterialPage } from './ver-material/ver-material.page';
import { AccionABM } from '../../data/comunicacion/accion-ver-entidad';
import { IMaterialDto } from '../../data/dto/material-dto';
import { SelectorMaterialComponent } from '../../components/selector-material/selector-material.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.page.html',
  styleUrls: ['./material.page.scss'],
})
export class MaterialPage implements OnInit {
  @ViewChild(SelectorMaterialComponent) selectorMaterial: SelectorMaterialComponent;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
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

      this.selectorMaterial.agregar(elementoLiviano);
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
          this.selectorMaterial.eliminar(material);
          break;

        default:
          break;
      }
    }
  }
}
