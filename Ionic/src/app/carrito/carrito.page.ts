import { Component, OnInit } from '@angular/core';
import { VariablesService } from './../../services/Variables';
import { Material } from 'src/model/Material';
import { Linea } from 'src/model/Linea';
import { Alertas } from 'src/services/Alertas';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  public materiales: Array<Material> = [];

  constructor(private variables: VariablesService, private alertas: Alertas) {
    this.materiales = this.ConvertirAMateriales(variables.Carrito.Lineas);
  }

  ngOnInit() { }

  private ConvertirAMateriales(lineas: Array<Linea>): Array<Material> {
    var materiales: Array<Material> = [];
    lineas.forEach(linea => {
      materiales.push(this.variables.BaseDeDatos.ObtenerMaterial(linea.IdMaterial))
    });

    return materiales;
  }

  Aumentar(material: Material) {
    //Solo agregar si el stock es suficiente
    if (material.Stock > material.Carrito) {
      material.Carrito++;
      this.variables.Carrito.Aumentar(material.Id);
    }
    else
      this.alertas.Alertar('Stock insuficiente', 'El material seleccionado no cuenta con stock suficiente para ser agregado al carrito');
  }
  Reducir(material: Material) {
    material.Carrito--;
    this.variables.Carrito.Reducir(material.Id);
  }
}
