
import { imgCarta, pedirCarta, valorCarta } from "./";

/**
 * 
 * @param {Number} puntosJugador
 * @param {Array<String>} deck 
 * @param {HTMLUListElement} puntosPc 
 * @param {HTMLUListElement} divCartasPc 
 */
export const TurnoPc = (puntosJugador, puntosPc, divCartasPc, deck) => {
    console.log(deck)


    if (puntosJugador === 0) return;

    let puntosComputadora = 0;
    do {

        const carta = pedirCarta(deck);
        puntosComputadora += valorCarta(carta);
        puntosPc.innerText = puntosComputadora;

        // const imgCarta = document.createElement('img');
        // imgCarta.src = `assets/cartas/${carta}.png`;
        // imgCarta.classList.add('carta');
        const imgC = imgCarta(carta);
        divCartasPc.append(imgC)
        if (puntosJugador > 21) {
            break;
        }

    } while ((puntosComputadora < puntosJugador) && (puntosJugador <= 21));
    setTimeout(() => {
        if (puntosJugador === puntosComputadora) {
            alert("empate")

        } else if (puntosJugador > 21 || puntosComputadora > puntosJugador && puntosComputadora <= 21) {
            alert("perdiste")
        }
        else {
            alert("ganaste")
        }
    }, 200);
}