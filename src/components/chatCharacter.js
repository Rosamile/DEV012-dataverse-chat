export const chatI = (data) => {
const sectionchatI = document.createElement("section");
sectionchatI.classList.add("containerChati");
sectionchatI.innerHTML = `

<div class="profiletCtn">
    <img class="imgProfileChat" id="imgProfileChatI${data.id}" src="${data.imageUrl}" alt="${data.id}">
    <span class="nameFact" itemprop="name">${data.name}</span>
</div>
<div class="chatCtn">
    <div class="characterCtn">
        <img class="imgProfileChati" id="imgChatI${data.id}" src="${data.imageUrl}" alt="${data.id}">
        <span id="textIACharacter"></span>
    </div>
    <div class="userCtn">
        <i class="fa-solid fa-jedi"></i>
        <span id="textUser"></span>
    </div>
    <div class="textareCtn">
        <textarea placeholder="Comienza a chatear..." name="writeHere" id="writeHere" cols="30" rows="10"></textarea>
        <i class="fa-solid fa-meteor"></i>
    </div>
</div>

`;
return sectionchatI;
};