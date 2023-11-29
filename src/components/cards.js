export const renderCards = (data) => {
  const ul = document.createElement("ul");
  ul.classList.add("character");
  data.forEach((element) => {
    const list = document.createElement("li");
    list.setAttribute("itemscope", "");
    list.setAttribute("itemtype", "card");
    list.classList.add("cards");
    list.setAttribute("id", element.id);
    list.innerHTML = `


<img id="image${element.id}" src="${element.imageUrl}" alt="${element.id}">
<a href="#" itemprop="name">${element.name}</a>
<span>
  <dt>Especie: </dt>
  <dd itemprop="specie">${element.facts.speciesCharacter}</dd>
</span>
<span>
  <dt>Afiliación: </dt>
  <dd itemprop="affiliation">${element.facts.affiliationCharacter}</dd>
</span>
<span>
  <dt>Estatura: </dt>
  <dd itemprop="height">${element.facts.heightCharacter} m</dd>
</span>
<span>
  <dt>Edad: </dt>
  <dd itemprop="age">${element.facts.ageCharacter}</dd>
</span>
 <a href="#" itemprop="name">${element.name}</a>
`;

    list.addEventListener("click", (event) => {
      console.log("click existe");
    });
    ul.appendChild(list);
  });
  return ul;
};
