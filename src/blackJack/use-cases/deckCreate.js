import _ from "underscore";

//tambien tenemos export default, solo se puede hacer una vez por modulo


/**
 * 
 * @param {Array<string>} tiposCarta - array con los tipos de cartas
 * @param {Array<string>} tiposCartaEspecial - array con los tipos de cartas especiales
 * @returns {Array<string>} - deck de cartas
 */
export const crearDeck = (tiposCarta, tiposCartaEspecial) => {
    if (!tiposCarta || tiposCarta == 0) throw Error('necesito tipos de cartas y tipos de cartas especiales');
    if (!tiposCartaEspecial || tiposCartaEspecial == 0) throw Error('necesito tipos de cartas y tipos de cartas especiales');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposCarta) {
        for (let esp of tiposCartaEspecial) {
            deck.push(esp + tipo);
        }
    }

    deck = _.shuffle(deck);

    //Precarga de imágenes en segundo plano para evitar retardo
    deck.forEach(carta => {
        const img = new Image();
        img.src = `assets/cartas/${carta}.png`;
    });

    return deck;

}