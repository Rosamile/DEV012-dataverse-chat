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

/*
export const renderItems = (data) => {
  const facts = document.createElement("section");

  const ul = document.createElement("ul");
  root.appendChild(ul);
  ul.classList.add("character");
  for (let i = 0; i < data.length; i++) {
    ul.innerHTML += `<li itemscope itemtype= "card" class="cards" itemprop="sort-order">
    <img src="${data[i].imageUrl}" alt="img">
    <div class="textCard">
     <span><dt>Nombre: </dt><dd itemprop = "name">${data[i].name}</dd></span>
      <span><dt>Descriptción: </dt><dd itemprop = "shortDescription">${data[i].shortDescription}</dd></span>
      <span><dt>Especie: </dt><dd itemprop = "specie">${data[i].facts.speciesCharacter}</dd></span>
      <span><dt>Afiliación: </dt><dd itemprop = "affiliation">${data[i].facts.affiliationCharacter}</dd></span>
      <span><dt>Estatura: </dt><dd itemprop = "height">${data[i].facts.heightCharacter} m</dd></span>
      <span><dt>Edad: </dt><dd itemprop = "age">${data[i].facts.ageCharacter}</dd></span>
    </div>
  </li> `;
  }
  return ul;
};*/

//vamos a hacer fectch
/*import getHash from "../utils/getHash";
import getData from "../utils/getData";
*/
