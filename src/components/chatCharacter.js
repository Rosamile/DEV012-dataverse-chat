export const chatI = (data) => {
  const sectionchatI = document.createElement("section");
  sectionchatI.classList.add("containerChati");
  sectionchatI.innerHTML = `

<div class="profiletCtn">
  <img class="imgProfileChat" id="imgProfileChatI${data.id}" src="${data.imageUrl}" alt="${data.id}">
  <span class="nameFact" itemprop="name">${data.name}</span>
</div>
<div class="chatCtn">

  <div class="userCtn"></div>
  <div class="textAreaCtn">
    <textarea placeholder="Comienza a chatear..." name="writeHere" id="writeHere" cols="30" rows="10"></textarea>
    <div id="buttonEnviarChatG">
    <button>
    <i class="fa-solid fa-meteor icon-send fa-2x"></i></button></div>
  </div>
</div>

`;
  const btnChatI = sectionchatI.querySelector("#buttonEnviarChatG");
  const textAreaChat = sectionchatI.querySelector("#writeHere");
  let viewChatI = sectionchatI.querySelector(".userCtn");

  btnChatI.addEventListener("click", (event) => {
    const newMsg = textAreaChat.value;
    const questionUser = `
<div>
  <span id="textUser">${newMsg}</span>
  <i class="fa-solid fa-jedi icon-user" style="color: aliceblue !important;"></i>
</div>

`;
    viewChatI.innerHTML += questionUser;
    textAreaChat.value = "";
  });

  return sectionchatI;
};

/* <div class="characterCtn">
  <img class="imgProfileChati" id="imgChatI${data.id}" src="${data.imageUrl}" alt="${data.id}">
  <span id="textIACharacter"></span>
</div>*/
