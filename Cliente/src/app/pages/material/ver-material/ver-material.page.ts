import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IMaterialDto } from '../../../data/dto/material-dto';
import { IMaterialListarDto } from '../../../data/dto/material-listar-dto';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-ver-material',
  templateUrl: './ver-material.page.html',
  styleUrls: ['./ver-material.page.scss'],
})
export class VerMaterialPage implements OnInit {

  @Input() materialLiviano: IMaterialListarDto;

  private material: IMaterialDto;

  constructor(private app: AppService, private modalController: ModalController) { }

  ngOnInit() {
    this.app.obtenerMaterial(this.materialLiviano.id).subscribe(materialCompleto => {
      this.material = materialCompleto;
    });
  }

  public clickCerrar() {
    this.modalController.dismiss();
  }

}
