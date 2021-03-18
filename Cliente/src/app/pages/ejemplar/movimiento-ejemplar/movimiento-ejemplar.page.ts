import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IMaterialListarDto } from '../../../data/dto/material-listar-dto';
import { IMovimientoEjemplarCrearDto } from '../../../data/dto/movimiento-ejemplar-crear-dto';
import { AppService } from '../../../services/app.service';
import { Util } from '../../../util';
import { SeleccionMaterialPage } from '../seleccion-material/seleccion-material.page';

@Component({
  selector: 'app-movimiento-ejemplar',
  templateUrl: './movimiento-ejemplar.page.html',
  styleUrls: ['./movimiento-ejemplar.page.scss'],
})
export class MovimientoEjemplarPage implements OnInit {
  /**Cuando se registra un egreso en vez de ingreso */
  @Input() modoEgreso: boolean;

  private datos = {} as IMovimientoEjemplarCrearDto;
  private material: IMaterialListarDto;
  private trabajando: boolean;

  public get Datos() {
    return this.datos;
  }
  public get Material() {
    return this.material;
  }

  // Se puso publico ya que no se puede poner un get publico y un set privado
  public set Material(valor: IMaterialListarDto) {
    this.material = valor;
    this.datos.idMaterial = valor.id;
  }
  public get ModoEgreso() {
    return this.modoEgreso;
  }
  public get PuedeAceptar(): boolean {
    return !!this.Material && !!this.Datos.cantidad && this.Datos.cantidad >= 1;
  }
  public get Trabajando() {
    return this.trabajando;
  }

  constructor(private app: AppService, private modalController: ModalController) { }

  ngOnInit() {
  }

  public clickAceptar() {
    this.trabajando = true;

    // Si se está en modo egreso, la cantidad es negativa
    const datosFinales: IMovimientoEjemplarCrearDto = Util.copiaProfunda(this.Datos);
    if (this.ModoEgreso)
      datosFinales.cantidad *= -1;

    this.app.crearMovimientoEjemplar(datosFinales).subscribe(creado => {
      // TODO: ver si hay errores y mostrarlos, cancelando el dismiss
      this.modalController.dismiss(creado);
      this.trabajando = false;
    });
  }

  public clickCancelar() {
    this.modalController.dismiss();
  }

  // Para seleccionar un material
  public clickMaterial() {
    this.mostrarModalSeleccionMaterial();
  }

  private async mostrarModalSeleccionMaterial() {
    const modal = await this.modalController.create({
      component: SeleccionMaterialPage,
      cssClass: 'modal-seleccion-material',
    });

    await modal.present();
    const { data: resultado } = await modal.onDidDismiss<IMaterialListarDto>();

    // Guardar solo si se seleccionó, sino dejar el viejo
    if (resultado) {
      this.Material = resultado;
    }
  }
}
