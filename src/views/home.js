//import los components

import { filterOrder } from "../components/filterOrder.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { renderCards } from "../components/cards.js";
import data from "../data/data.js";
import { renderFacts } from "../components/Facts.js";
import { filterBySpecies } from "../lib/dataFuntion.js";

export const home = () => {
  const homeView = document.createElement("div");
  homeView.className = "viewcomponents";
  const cardView = document.createElement("section");
  cardView.className = "cardsBox";

  const headerComponent = Header("home");
  homeView.innerHTML = headerComponent;

  const filterOrderComponent = filterOrder();

  const cardsComponent = renderCards(data);

  homeView.appendChild(filterOrderComponent);
  cardView.appendChild(cardsComponent);

  const dataFilter = data; // Considera si realmente necesitas esto o si puedes filtrar directamente sobre "data"
  document.body.appendChild(homeView);

  const filterSpecies = document.getElementById("filterSpecies");

  filterSpecies.addEventListener("change", (event) => {
    const value = event.target.value;
    console.log(value);
    const dataFiltrada = filterBySpecies(dataFilter, "speciesCharacter", value);

    const cardsComponent = renderCards(dataFiltrada);

    cardView.innerHTML = "";
    cardView.appendChild(cardsComponent);

    console.log(dataFiltrada);
  });

  homeView.appendChild(cardView);

  const footerComponent = Footer();
  homeView.innerHTML += footerComponent;
  return homeView;
};
