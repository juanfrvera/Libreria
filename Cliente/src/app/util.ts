export class Util {
    /**Agrega la parte a la cadena dejando las partes anteriores con coma y esta última con "y" */
    public static agregarACadenaConComa(cadena, parte) {
        if (!cadena) cadena += parte;
        else {
            // Reemplazar última "y" por una coma
            cadena = cadena.replace(" y ", ", ");

            // Esta es la última parte, poner "y"
            cadena += " y " + parte;
        }

        return cadena;
    }
    /** Devuelve una copia profunda del objeto */
    public static copiaProfunda(objeto) {
        return JSON.parse(JSON.stringify(objeto));
    }
    /** Devuelve elemento aleatorio del arreglo */
    public static elementoAleatorio(arreglo) {
        let indice = Math.floor(Math.random() * arreglo.length);
        return arreglo[indice];
    }
    /**
     * Elimina el elemento del arreglo
     * @param {Array<*>} arreglo Arreglo que contiene el elemento
     * @param {*} elemento Elemento a eliminar
     */
    public static eliminarElemento(arreglo, elemento) {
        const indice = arreglo.indexOf(elemento);
        arreglo.splice(indice, 1);
    }
    /**
     * Hace un scroll hacia el elemento cuyo id es el pasado
     * @param {*} idElemento id del elemento al que se quiere scrollear
     * @param {*} suave verdadero si se quiere un scroll suave, falso si se quiere instantaneo
     */
    public static scrollearAId(idElemento, suave = false) {
        document
            .getElementById(idElemento)
            .scrollIntoView({ behavior: suave ? "smooth" : "auto" });
    }
}