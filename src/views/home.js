import { data } from "../data/data.js";

export function home() {
//const character = data;
  const view =
  `
    <section class="containerFilter">
    <section class="containerModal">
      <div class="filterSpecies">
        <label for="filterSpecies">Filtrar por especie: </label>
        <select id="filterSpecies" name="speciesCharacter" data-testid="select-filter">
          <option value="" disabled selected>-- selecciona --</option>
          <option value="Desconocido">desconocido</option>
          <option value="Droide">droide</option>
          <option value="Humano">humano</option>
          <option value="Hutt">hutt</option>
          <option value="Rodian">rodian</option>
          <option value="Togruta">togruta</option>
          <option value="Wookiee">wookiee</option>
          <option value="Zabrak">zabrak</option>
        </select>
      </div>
      <div class="filterAffiliation">
        <label for="filteraffiliation">Filtrar por afiliación: </label>
        <select id="filteraffiliation" name="affiliationCharacter" data-testid="select-filter-affiliation">
          <option value="" disabled selected>-- selecciona --</option>
          <option value="Alianza Rebelde">Alianza Rebelde</option>
          <option value="Cazarrecompensas">Cazarrecompensas</option>
          <option value="Jedi">Jedi</option>
          <option value="Primera Orden">Primera Orden</option>
          <option value="Republica Galactica">Republica Galactica</option>
          <option value="Resistencia">Resistencia</option>
          <option value="Sith">Sith</option>
        </select>
      </div>
      <div class="sortBy">
        <label for="sortBy">Ordenar por: </label>
        <select id="sortBy" name="sort-order" data-testid="select-sort">
          <option value="" disabled selected>-- selecciona --</option>
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
          <option value="ascAge">Edad ascendente</option>
          <option value="descAge">Edad descendente</option>
          <option value="ascHeight">Estatura ascendente</option>
          <option value="descHeight">Estatura descendente</option>
        </select>
      </div>

      <div class="buttons">
        <button id="applyFilter">Aplicar</button>
        <button id="clearFilter" data-testid="button-clear">Borrar</button>
      </div>
    </section>
  </section>
`;
  document.getElementById("root").innerHTML = view;


  
  return view;
}

/*import { renderItems } from "../components/cards";
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

}*/
