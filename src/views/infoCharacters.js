export const renderItems = (data) => {
  const root = document.getElementById("root");

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
};

export const clearCharacter = () => {
  const root = document.getElementById("root");
  root.innerHTML = "";
};

//vamos a hacer fectch
/*import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  const view = `
<div class="Characters-inner">
  <article class="Character-card">
    <img src="${character.image}" alt="${character.name}">
    <h2>${character.name}</h2>
  </article>
  <article class="Character-card">
    <h3>Episode: <span>${character.episode.length}</span> </h3>
    <h3>Status: <span>${character.status}</span></h3>
    <h3>Species: <span>${character.species}</span> </h3>
    <h3>Gender: <span>${character.gender}</span> </h3>
    <h3>Origin: <span>${character.origin.name}</span></h3>
    <h3>Last Location: <span>${character.location.name}</span></h3>
  </article>
</div>
`;
  return view;
};

export default Character;*/