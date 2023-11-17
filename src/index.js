// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

import { renderItems } from "./components/cards.js";
import {data} from "../data/data.js";

//crear el ul donde van a estar las tarjetas

const divDeTarjetasHtml = document.getElementById('root');
const contenedorDeTarjetas = document.createElement('ul');
const copiaDataDePersonajes = [...data];
console.log(copiaDataDePersonajes);
const renderizacionData = renderItems(copiaDataDePersonajes);
divDeTarjetasHtml.innerHTML = renderizacionData;

divDeTarjetasHtml.appendChild(contenedorDeTarjetas);
contenedorDeTarjetas.classList.add('character');



/*
import Example from './views/Example.js';
Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/