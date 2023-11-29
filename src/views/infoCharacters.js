
//import data from "../data/data";
//import { Header } from "../components/Header";
//import { Footer } from "../components/Footer";
//import { Facts } from "../components/Facts";

export const infoCharacters = (props) => {
  console.log(props);
  const factsViewView = document.createElement("div");
  factsViewView.className = "viewFactsComponents";

  return factsViewView;
};

// Función para renderizar la información del personaje


export const renderItems = (data) => {
  const facts = document.createElement("section");

export const infoCharacters = () => {
  pintar(data);

  let result = data;
  const infoCharactersView = document.createElement("div");
  infoCharacters.className = "viewcomponents";
  cardView.className = "cardsBox";

  const headerComponent = Header('home');
  infoCharactersView.innerHTML = headerComponent;

  const footerComponent = Footer('home');
  infoCharactersView.innerHTML += footerComponent;

const infoCharactersComponents = document.querySelector('.cards');
infoCharactersView.innerHTML += infoCharactersComponents;

  return infoCharactersView;

}

const pintar = (data) => {
  const ul = document.createElement("ul");
  ul.classList.add("character");
  for(let i=0;i<data.length;i++){
    const element = data[i];
    const list = document.createElement("li");
    list.setAttribute("itemscope", "");
    list.setAttribute("itemtype", "card");
    list.classList.add("cards");
    list.setAttribute("id", element.id);
    list.innerHTML = `
      <img id="image${element.id}" src="${element.imageUrl}" alt="${element.id}">
      <a href="#" itemprop="name">${element.name}</a>
      <li>Descriptción:${element.shortDescription}</li>
      <li>Especie:${element.facts.speciesCharacter}</li>
      <li>Afiliación:${element.facts.affiliationCharacter}</li>
      <li>Estatura:${element.facts.heightCharacter}</li>
      <li>Edad:${element.facts.ageCharacter}</li>`;
    ul.appendChild(list);
  };
  console.log(ul);
  return ul;
};

//vamos a hacer fectch
/*import getHash from "../utils/getHash";
import getData from "../utils/getData";
*/
