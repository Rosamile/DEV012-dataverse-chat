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
<span itemprop="name">${element.name}</span>
<div>
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
</div>
<div>
  <button>Chat</button>
</div>
`;

list.addEventListener("click", (event) => {
console.log(event);
localStorage.setItem("profile", JSON.stringify(element));
location.href = `/facts?id=${element.id}`;
});
ul.appendChild(list);
});
return ul;
};