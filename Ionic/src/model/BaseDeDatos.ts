import { Material } from './Material';

export class BaseDeDatos {
  private proveedores: string[] = ["Barrile productions", "Evil pixi art", "Marx Associated", "Comando rojo", "Sector F", "La revolución",
    "Mariquita Sanchez de Fhonsom", "Diney cursed line", "Rule 34 limited"];

  private materiales: Array<Material>;

  constructor() {
    this.materiales = new Array<Material>(20);
    for (let i = 0; i < 20; i++) {
      this.materiales.push(
        new Material(
          i.toString(),
          'Libro ' + i,
          (Math.random() < 0.333) ? 'Sandro' : ((Math.random() < 0.5) ? 'Tato' : 'Juan'),
          this.Aleatorio(this.proveedores),
          '$' + (i * 10),
          i,
          0
        )
      );
    }
  }

  private Aleatorio(array: string[]): string {
    let length = array.length;
    return array[(Math.floor(Math.random() * (length - 1)))];
  }

  ObtenerMaterial(idMaterial: string): Material {
    return this.materiales.find(m => m.Id == idMaterial);
  }
  
  MaterialesDesdeHasta(desde : number, hasta : number) : Array<Material>
  {
    return this.materiales.slice(desde, hasta);
  }
}