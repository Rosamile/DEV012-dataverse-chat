//import {data} from "../data/data.js";

export const renderItems = (data) => {
  let cajaDerenderizado = '<ul>';
  for (let i=0;i<data.length;i++) {
  const ul = `<li itemscope itemtype= "card" class="cards" itemprop="sort-order">
                  <img src=${data[i].imageUrl} alt="img">
                  <div class="textCard">
                  <span><dt>Nombre: </dt><dd itemprop = "name">${data[i].name}</dd></span>
                  <span><dt>Descriptción: </dt><dd itemprop = "shortDescription">${data[i].shortDescription}</dd></span>
                  <span><dt>Especie: </dt><dd itemprop = "specie">${data[i].facts.speciesCharacter}</dd></span>
                  <span><dt>Afiliación: </dt><dd itemprop = "affiliation">${data[i].facts.affiliationCharacter}</dd></span>
                  <span><dt>Estatura: </dt><dd itemprop = "height">${data[i].facts.heightCharacter} m</dd></span>
                  <span><dt>Edad: </dt><dd itemprop = "age">${data[i].facts.ageCharacter}</dd></span>
                  </div>
                 </li> `;
    cajaDerenderizado+=ul;
  }
  return cajaDerenderizado+= '</ul>';
};

export const clearCharacter = () => {
  const root = document.getElementById("root");
  root.innerHTML = "";
};

//crear el ul donde van a estar las tarjetas

