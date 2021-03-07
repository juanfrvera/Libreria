import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Accion } from '../../../data/comunicacion/accion-ver-entidad';
import { IResultadoVerMaterial } from '../../../data/comunicacion/resultado-ver-material';
import { IMaterialDto } from '../../../data/dto/material-dto';
import { IMaterialListarDto } from '../../../data/dto/material-listar-dto';
import { AppService } from '../../../services/app.service';
import { Util } from '../../../util';

@Component({
  selector: 'app-ver-material',
  templateUrl: './ver-material.page.html',
  styleUrls: ['./ver-material.page.scss'],
})
export class VerMaterialPage implements OnInit {

  @Input() private materialLiviano: IMaterialListarDto;

  private editando: boolean;
  private guardando: boolean;
  private material: IMaterialDto;
  private materialEditado: IMaterialDto;

  public get Editando() {
    return this.editando;
  }

  /** Cuando se está guardando la edición */
  public get Guardando() {
    return this.guardando;
  }

  public get Material() {
    return this.material;
  }

  /** Datos de edición */
  public get MaterialEditado() {
    return this.materialEditado;
  }

  public get MaterialLiviano() {
    return this.materialLiviano;
  }

  private get Id() {
    // Se devuelve el del material liviano porque el material completo puede 
    // no estar cargado aún
    return this.MaterialLiviano.id;
  }

  constructor(private app: AppService, private modalController: ModalController) { }

  ngOnInit() {
    this.app.obtenerMaterial(this.Id).subscribe(materialCompleto => {
      this.material = materialCompleto;
    });
  }

  public clickAceptarEdicion() {
    this.guardando = true;
    this.app.editarMaterial(this.Id, this.MaterialEditado).subscribe(() => {
      // Actualizar datos
      this.material = this.materialEditado;

      this.materialLiviano.titulo = this.materialEditado.titulo;
      this.materialLiviano.nombreAutor = this.materialEditado.nombreAutor;

      this.guardando = false;
      this.editando = false;
    });
  }

  public clickCancelarEdicion() {
    this.editando = false;
  }

  public clickCerrar() {
    this.modalController.dismiss();
  }

  public clickEditar() {
    // Si ya está cargado el material completo
    if (this.Material) {
      this.materialEditado = Util.copiaProfunda(this.Material);
    }
    else {
      this.materialEditado = {
        id: this.Id,
        titulo: this.MaterialLiviano.titulo,
        nombreAutor: this.MaterialLiviano.nombreAutor
      }
    }

    this.editando = true;
  }

  public clickEliminar() {
    const respuesta: IResultadoVerMaterial = {
      accion: Accion.Eliminar
    };

    this.modalController.dismiss(respuesta);
  }

}
