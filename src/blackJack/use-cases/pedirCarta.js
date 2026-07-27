

/**
 * 
 * @param {Array<string>} deck - array con las cartas
 * @returns {string} - carta
 */

export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) throw Error('necesito un deck de cartas');

    if (deck.length === 0) {
        throw new Error("No hay cartas en el deck");
    }

    return deck.pop();
}
