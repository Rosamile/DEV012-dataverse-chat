//import los components

import { filterOrder } from "../components/filterOrder.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { renderCards } from "../components/cards.js";
import data from "../data/data.js";
import { modal } from "../components/modal.js";

export const home = () => {
  let result = data;
  const homeView = document.createElement("div");
  homeView.className = "viewcomponents";
  const cardView = document.createElement("section");
  cardView.className = "cardsBox";

  const headerComponent = Header("home");
  homeView.innerHTML = headerComponent;

  const filterOrderComponent = filterOrder();
  homeView.innerHTML += filterOrderComponent;

  const cardsComponent = renderCards(data);
  console.log(cardsComponent);
  cardsComponent.addEventListener("click", (event) => {
    console.log(event);
  });

  cardView.appendChild(cardsComponent);
  homeView.appendChild(cardView);

  const footerComponent = Footer();
  homeView.innerHTML += footerComponent;
  return homeView;

  const modalComponent = modal();
modalView.innerHTML += modalComponent;
return modalView;
};
