import { IMaterialDto } from "./dto/material-dto";
import { IMovimientoEjemplarDto } from "./dto/movimiento-ejemplar-dto";

interface BDFalsa {
    materiales: IMaterialDto[];
    movimientosEjemplares: IMovimientoEjemplarDto[];
}

export const BD: BDFalsa = {
    materiales: [
        {
            id: 1,
            titulo: "Material 1",
            nombreAutor: "John F. Kennedy",
            stock: 3,
            precio: 500,
        },
        {
            id: 2,
            titulo: "Material 2",
            nombreAutor: "Homero",
            stock: 5,
            precio: 150,
        },
        {
            id: 3,
            titulo: "Material 3",
            nombreAutor: "Carl Johnson",
            stock: 0,
            precio: 1500,
        },
        {
            id: 4,
            titulo: "Material 4 de título medio largo",
            nombreAutor: "Autor de nombre largo, con varios apellidos",
            stock: 10,
            precio: 100,
        }
    ],
    movimientosEjemplares: [
        {
            id: 1,
            idMaterial: 1,
            idUsuario: 0,
            cantidad: 3,
            detalle: "Inicial"
        },
        {
            id: 2,
            idMaterial: 2,
            idUsuario: 0,
            cantidad: 5,
            detalle: "Inicial"
        },
        {
            id: 3,
            idMaterial: 4,
            idUsuario: 0,
            cantidad: 10,
            detalle: "Inicial"
        }
    ]
}