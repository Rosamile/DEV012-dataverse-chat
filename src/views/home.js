import { renderItems } from "../components/cards";
import { renderItemsFilterOrder } from "../components/filterOrder";
//import {} from


const Home = ():DocumentFragment => {
    document.title ='Home';

    const copiaDataDePersonajes = [...data];

const main :HTMLElement = document.createElement (tagName, 'main');

    const divDeTarjetasHtml = document.getElementById('root');
    const contenedorDeTarjetas = document.createElement('ul');
    const renderizacionData = renderItems(copiaDataDePersonajes);
    divDeTarjetasHtml.innerHTML = renderizacionData;
    divDeTarjetasHtml.appendChild(contenedorDeTarjetas);
    contenedorDeTarjetas.classList.add('character');


const divDeFiltroyOrdenamiento = document.getElementById('root');
const contenedorFiltroyOrdenamiento = document.createElement ('section');
const renderizaciónFiltroyOrdenamiento = renderItemsFilterOrder (copiaDataDePersonajes);
divDeFiltroyOrdenamiento.innerHTML = renderItemsFilterOrder;

}