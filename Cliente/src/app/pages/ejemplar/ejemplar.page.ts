import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IMovimientoEjemplarDto } from '../../data/dto/movimiento-ejemplar-dto';
import { IMovimientoEjemplarListarDto } from '../../data/dto/movimiento-ejemplar-listar-dto';
import { AppService } from '../../services/app.service';
import { MovimientoEjemplarPage } from './movimiento-ejemplar/movimiento-ejemplar.page';

@Component({
  selector: 'app-ejemplar',
  templateUrl: './ejemplar.page.html',
  styleUrls: ['./ejemplar.page.scss'],
})
export class EjemplarPage implements OnInit {

  private cargando: boolean = true;
  private lista: IMovimientoEjemplarListarDto[];

  public get Cargando() {
    return this.cargando;
  }
  public get Lista() {
    return this.lista;
  }

  constructor(private app: AppService, private modalControler: ModalController) { }

  ngOnInit() {
    this.app.obtenerListaMovimientosEjemplares().subscribe(respuesta => {
      this.lista = respuesta;
      this.cargando = false;
    });
  }

  public clickEgreso() {
    this.mostrarModalMovimiento(true);
  }
  public clickIngreso() {
    this.mostrarModalMovimiento();
  }

  private async mostrarModalMovimiento(egreso: boolean = false) {
    const modal = await this.modalControler.create({
      component: MovimientoEjemplarPage,
      cssClass: 'modal-movimiento-ejemplar',
      componentProps: {
        egreso: egreso
      }
    });
    await modal.present();
    const { data: resultado } = await modal.onDidDismiss<IMovimientoEjemplarDto>();

    if (resultado) {
      const elementoLiviano: IMovimientoEjemplarListarDto = {
        id: resultado.id,
        cantidad: resultado.cantidad,
        fecha: resultado.fecha,
        detalle: resultado.detalle
      };

      this.lista.push(elementoLiviano);
    }
  }
}
