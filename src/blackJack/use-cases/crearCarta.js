

export const imgCarta = (carta) => {
    if (!carta) throw Error("la carta es un argumento obligatorio");

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    return imgCarta;
}