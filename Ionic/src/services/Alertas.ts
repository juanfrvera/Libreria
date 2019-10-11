import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})

export class Alertas {
  constructor(private alertController: AlertController) { }

  private alertando: boolean;

  Alertar(titulo: string, mensaje: string) {
    //Chequear si no hay una alerta presente en pantalla (para que no se superpongan)
    if (!this.alertando) {
      this.alertando = true;
      this.Alertando(titulo, mensaje);
    }
  }
  private async Alertando(titulo: string, mensaje: string) {
    const alerta = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });

    alerta.onDidDismiss().then(x => this.alertando = false);
    await alerta.present();
  }
}