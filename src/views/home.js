//import los components

import { filterOrder } from "../components/filterOrder.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { renderCards } from "../components/cards.js";
import { stats } from "../components/stats.js";
import data from "../data/data.js";
import {
  filterByAffiliation,
  filterBySpecies,
  sortData,
  clearData,
  computeStats,
  ageSumatory,
} from "../lib/dataFuntion.js";
import { modal } from "../components/modal.js";

export const home = () => {
  let valueSelectSpecies = "";
  let valueSelectAffiliation = "";

  let resultDataFilteredBySpecies = "";
  let resultDataFilteredByAffiliation = "";
  const homeView = document.createElement("div");
  homeView.className = "viewcomponents";
  const cardView = document.createElement("section");
  cardView.className = "cardsBox";

  const headerComponent = Header("home");
  homeView.innerHTML = headerComponent;

  const statsComponent = stats();

  const filterOrderComponent = filterOrder();

  const cardsComponent = renderCards(data);

  const footerComponent = Footer();
  homeView.appendChild(filterOrderComponent);
  cardView.appendChild(cardsComponent);
  homeView.appendChild(statsComponent);

  homeView.appendChild(cardView);
  homeView.appendChild(footerComponent);

  const statsResult = homeView.querySelector("#stats");
  const ageSumResult = homeView.querySelector("#sumAges");
  console.log(statsResult);
  const dataFilter = data; // Considera si realmente necesitas esto o si puedes filtrar directamente sobre "data"

  const filterSpecies = homeView.querySelector("#filterSpecies");
console.log (filterSpecies);

  filterSpecies.addEventListener("change", (event) => {
    const value = event.target.value;
    valueSelectSpecies = value;
    console.log("hi");
    const dataFiltrada = filterBySpecies(dataFilter, "speciesCharacter", value);
    const cardsComponent = renderCards(dataFiltrada);
    cardView.innerHTML = "";
    cardView.appendChild(cardsComponent);
    console.log(dataFiltrada);
    resultDataFilteredBySpecies = dataFiltrada;
    statsResult.innerHTML =
      "Resultado de tu selección: " + computeStats(dataFiltrada);
    ageSumResult.innerHTML =
      "Sumatoria de edades: " + ageSumatory(dataFiltrada);
  });

  const filterAffiliation = homeView.querySelector("#filteraffiliation");

  filterAffiliation.addEventListener("change", (event) => {
    const value = event.target.value;
    valueSelectAffiliation = value;
    console.log(value);
    const dataFiltrada = filterByAffiliation(
      dataFilter,
      "affiliationCharacter",
      value
    );

    const cardsComponent = renderCards(dataFiltrada);
    cardView.innerHTML = "";
    cardView.appendChild(cardsComponent);
    console.log(dataFiltrada);
    resultDataFilteredByAffiliation = dataFiltrada;
    statsResult.innerHTML =
      "Resultado de tu selección: " + computeStats(dataFiltrada);
    ageSumResult.innerHTML =
      "Sumatoria de edades: " + ageSumatory(dataFiltrada);
  });

  const selectSort = homeView.querySelector("#sortBy");

  selectSort.addEventListener("change", (event) => {
    const clearedData = clearData([
      ...resultDataFilteredBySpecies,
      ...resultDataFilteredByAffiliation,
    ]);

    const sortBy = event.target.value;

    let sortedData = [];
    if (resultDataFilteredBySpecies || resultDataFilteredByAffiliation) {
      sortedData = sortData(clearedData, sortBy);
    } else {
      sortedData = sortData(data, sortBy);
    }
    console.log(sortData);
    const cardsComponent = renderCards(sortedData);
    cardView.innerHTML = "";
    cardView.appendChild(cardsComponent);
    statsResult.innerHTML =
      "Resultado de tu selección: " + computeStats(clearedData);
    ageSumResult.innerHTML = "Sumatoria de edades: " + ageSumatory(clearedData);
  });

  const buttonClear = homeView.querySelector("#clearFilter");
  buttonClear.addEventListener("click", (event) => {
    const cardsComponent = renderCards(data);
    cardView.innerHTML = "";
    cardView.appendChild(cardsComponent);
    filterSpecies.selectedIndex = 0;
    filterAffiliation.selectedIndex = 0;
    selectSort.selectedIndex = 0;
    resultDataFilteredBySpecies = "";
    resultDataFilteredByAffiliation = "";
    statsResult.innerHTML = "Resultado de tu selección: " + computeStats(data);
    ageSumResult.innerHTML = "Sumatoria de edades: " + ageSumatory(data);
  });


  homeView.innerHTML += modal();

  const openModal = homeView.querySelector(".hero_ctaapikey");
  const cerrarModal = homeView.querySelector(".modal_closeapikey");
  const modalElements = homeView.querySelector(".modalapikey");
  console.log(openModal);

  openModal.addEventListener("click", (e) => {
    e.preventDefault(), modalElements.classList.add("modal--showapikey");
  });

  cerrarModal.addEventListener("click", (e) => {
    e.preventDefault(), modalElements.classList.remove("modal--showapikey");
  });
  return homeView;
};
