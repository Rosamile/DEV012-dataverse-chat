export const renderFacts = (data) => {
  const ulFacts = document.createElement("ul");
  ulFacts.classList.add("containerFacts");

  data.forEach((element) => {
    const listFacts = document.createElement("li");
    listFacts.classList.add("facts");
    listFacts.innerHTML = `
    <div class="factsCard">
     <span><dt>Nombre: </dt><dd itemprop = "name">${element.name}</dd></span>
      <span><dt>Descriptción: </dt><dd itemprop = "description">${element.description}</dd></span>
      <span><dt>Especie: </dt><dd itemprop = "specie">${element.facts.speciesCharacter}</dd></span>
      <span><dt>Afiliación: </dt><dd itemprop = "affiliation">${element.facts.affiliationCharacter}</dd></span>
      <span><dt>Estatura: </dt><dd itemprop = "height">${element.facts.heightCharacter} m</dd></span>
      <span><dt>Edad: </dt><dd itemprop = "age">${element.facts.ageCharacter}</dd></span>
    </div>
`;

    ulFacts.appendChild(listFacts);
  });
  return ulFacts;
};
