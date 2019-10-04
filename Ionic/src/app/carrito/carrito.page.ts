import { Component, OnInit } from '@angular/core';
import { VariablesService } from './../../services/Variables';
import { Material } from 'src/model/Material';
import { Linea } from 'src/model/Linea';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  public materiales: Array<Material> = [];

  constructor(private variables: VariablesService) {
    this.materiales = this.ConvertirAMateriales(variables.Carrito.Lineas);
  }

  ngOnInit() {}

  private ConvertirAMateriales(lineas : Array<Linea>) : Array<Material>
  {
    var materiales : Array<Material> = [];
    lineas.forEach(linea => {
      materiales.push(this.variables.BaseDeDatos.ObtenerMaterial(linea.IdMaterial))
    });

    return materiales;
  }

  Aumentar(material : Material){
    material.Carrito++;
    this.variables.Carrito.Aumentar(material.Id);
  }
  Reducir(material : Material){
    material.Carrito--;
    this.variables.Carrito.Reducir(material.Id);
  }
}
