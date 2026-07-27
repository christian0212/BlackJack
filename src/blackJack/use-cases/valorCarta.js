
/**
 * 
 * @param {string} carta - carta
 * @returns {number} - valor de la carta
 */

export const valorCarta = (carta) => {
    if (!carta || carta.length == 0) throw Error("la carta es un argumento obligatorio")

    const valor = carta.substring(0, carta.length - 1);
    let puntos = 0;

    if (isNaN(valor)) {

        puntos = (valor === 'A') ? 11 : 10;

    } else {
        puntos = valor * 1; //con esto convierto el valor en numero porque era un string
    }
    console.log(puntos);
    return puntos;
}