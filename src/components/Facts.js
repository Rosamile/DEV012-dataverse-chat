export const renderFacts = (data) => {
  const sectionFacts = document.createElement("section");
  sectionFacts.classList.add("factsCard");
  sectionFacts.innerHTML = `

<div>
  <img class="imgFact" id="imgFacts${data.id}" src="${data.imageUrl}" alt="${data.id}">
  <span class="nameFact" itemprop="name">${data.name}</span>
</div>
<div>
  <span>
    <dt>Descriptción: </dt>
    <dd itemprop="description">${data.description}</dd>
  </span>
  <span>
    <dt>Especie: </dt>
    <dd itemprop="specie">${data.facts.speciesCharacter}</dd>
  </span>
  <span>
    <dt>Afiliación: </dt>
    <dd itemprop="affiliation">${data.facts.affiliationCharacter}</dd>
  </span>
  <span>
    <dt>Estatura: </dt>
    <dd itemprop="height">${data.facts.heightCharacter} m</dd>
  </span>
  <span>
    <dt>Edad: </dt>
    <dd itemprop="age">${data.facts.ageCharacter}</dd>
  </span>
</div>
`;

  return sectionFacts;
};
