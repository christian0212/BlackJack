import _ from 'underscore';
import { crearDeck, pedirCarta, valorCarta, TurnoPc, imgCarta } from './use-cases';
//import {crearDeck as crearDeckV2} from './use-cases/deckCreate'; con el as se puede cambiar el nombre de la variable al importar



(() => {

    'use strict'
    //console.log('soy un iife');


    const tipos = ['C', 'D', 'H', 'S'],
        especial = ['J', 'Q', 'K', 'A'];
    let puntosJugador = 0;


    //referencias html
    const ask = document.querySelector('#ask'),
        stop = document.querySelector('#stop'),
        newPlay = document.querySelector('#newPlay');

    const puntosPlayer = document.querySelector('.puntosJugador'),
        puntosPc = document.querySelector('.puntosPc');

    const divCartasPlayer = document.querySelector('#jugador-cartas'),
        divCartasPc = document.querySelector('#computadora-cartas');


    //esta funcion crea una baraja
    let deck = [];
    deck = crearDeck(tipos, especial);

    // const TurnoPc = (puntosMinimos) => {
    //     do {
    //         console.log(deck);
    //         const carta = pedirCarta(deck);
    //         puntosComputadora += valorCarta(carta);
    //         //console.log(puntosComputadora);
    //         puntosPc.innerText = puntosComputadora;
    //         //<img class="carta" src="assets/cartas/AD.png"></img>
    //         const imgCarta = document.createElement('img');

    //         imgCarta.src = `assets/cartas/${carta}.png`;
    //         imgCarta.classList.add('carta');
    //         divCartasPc.append(imgCarta)
    //         if (puntosMinimos > 21) {
    //             break;
    //         }

    //     } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    //     setTimeout(() => {
    //         if (puntosJugador === puntosComputadora) {
    //             alert("empate")

    //         } else if (puntosJugador > 21 || puntosComputadora > puntosJugador && puntosComputadora <= 21) {
    //             alert("perdiste")
    //         }
    //         else {
    //             alert("ganaste")
    //         }
    //     }, 200);
    // }




    //funcion para agregar las cartas al html

    stop.disabled = true; //deshabilita el boton detener al inicio
    ask.addEventListener('click', () => {
        console.log(deck);
        const carta = pedirCarta(deck);
        puntosJugador += valorCarta(carta);
        console.log(puntosJugador);
        puntosPlayer.innerText = puntosJugador;

        const imgP = imgCarta(carta);
        divCartasPlayer.append(imgP)
        // const imgCarta = document.createElement('img');
        // imgCarta.src = `assets/cartas/${carta}.png`;
        // imgCarta.classList.add('carta');

        //divCartasPlayer.append(imgCarta)
        if (puntosJugador > 0) {
            stop.disabled = false;
        }

        if (puntosJugador > 21) {
            console.warn("perdiste");
            ask.disabled = true;
            stop.disabled = true;
            TurnoPc(puntosJugador, puntosPc, divCartasPc, deck);

        } else if (puntosJugador === 21) {
            console.warn("21, bien!");
            stop.disabled = true;
            ask.disabled = true;
            TurnoPc(puntosJugador, puntosPc, divCartasPc, deck);
        }
        return (puntosJugador);
    })


    stop.addEventListener('click', () => {

        stop.disabled = true;
        ask.disabled = true;
        TurnoPc(puntosJugador, puntosPc, divCartasPc, deck);

    })

    newPlay.addEventListener('click', () => {
        deck = [];
        deck = crearDeck(tipos, especial);
        TurnoPc(0, 0);

        puntosJugador = 0;


        ask.disabled = false;

        puntosPlayer.innerText = 0;
        puntosPc.innerText = 0;
        divCartasPlayer.innerHTML = "";
        divCartasPc.innerHTML = "";

    })

    // return {
    //aca si quiero puedo exportar las funciones que quiero que sean publicas

    // }

})();