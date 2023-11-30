export const chatI = () =>{
const sectionchatI = document.createElement("section");
sectionchatI.classList.add("personalChat");
sectionchatI.innerHTML = `

<div>
    <img class="imgFact" id="image${data.id}" src="${data.imageUrl}" alt="${data.id}">
    <span class="nameFact" itemprop="name">${data.name}</span>
</div>
<div>
    <div>
        <img class="imgFact" id="image${data.id}" src="${data.imageUrl}" alt="${data.id}">
        <span id="textIACharacter"></span>
    </div>
    <div>
        <i class="fa-solid fa-jedi"></i>
        <span id="textUser"></span>
    </div>
    <div>
        <textarea placeholder="Comienza a chatear..." name="writeHere" id="writeHere" cols="30" rows="10"></textarea>
        <i class="fa-solid fa-meteor"></i>
    </div>
</div>

`;
return sectionchatI
}