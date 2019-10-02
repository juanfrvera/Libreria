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
  public items: Array<Material> = [];

  constructor(private variables: VariablesService) {
    this.items = this.ConvertirAMateriales(variables.carrito.ObtenerLineas());
  }

  ngOnInit() {}

  private ConvertirAMateriales(lineas : Array<Linea>) : Array<Material>
  {
    var materiales : Array<Material> = [];
    lineas.forEach(linea => {
      materiales.push(this.variables.baseDeDatos.ObtenerMaterial(linea.IdMaterial))
    });

    return materiales;
  }
}
