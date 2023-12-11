import getCompletion, { upDateChat } from "../lib/API.js";
import { clearHistoryChat } from "../lib/API.js";


export const chatI = (data) => {
  clearHistoryChat();
  let loading;
  const sectionchatI = document.createElement("section");
  const apiKEY = localStorage.getItem("APIKEY");
  sectionchatI.classList.add("containerChati");
  sectionchatI.innerHTML = `

<div class="profiletCtn">
  <img class="imgProfileChat" id="imgProfileChatI${data.id}" src="${data.imageUrl}" alt="${data.id}">
  <span class="nameFact" itemprop="name">${data.name}</span>
</div>
<div class="chatCtn"> 

  <div class="userCtn"></div>
  <div style= "color:red;">${loading ? "cargando":""}</div>
  <div class="textAreaCtn">
    <textarea placeholder="Comienza a chatear..." name="writeHere" id="writeHere" cols="30" rows="10"></textarea>
    <div id="buttonEnviarChatG">
    <button>
    <i class="fa-solid fa-meteor icon-send fa-2x"></i></button></div>
  </div>
</div>`;
  const btnChatI = sectionchatI.querySelector("#buttonEnviarChatG");
  const textAreaChat = sectionchatI.querySelector("#writeHere");
  let viewChatI = sectionchatI.querySelector(".userCtn");

  btnChatI.addEventListener("click", (event) => {
    loading=true;
    const newMsg = textAreaChat.value;
   getCompletion(newMsg, data.name, apiKEY).then((res) => {
      loading = false;
      console.log(res)
      upDateChat(res.choices[0].message);
      viewChatI.innerHTML += `
       <div>
         <span id="textUser">${res.choices[0].message.content}</span>
           <i class="fa-solid fa-jedi icon-user" style="color: aliceblue !important;"></i>
       </div> `;
    });
    const questionUser = `
      <div>
        <span id="textUser">${newMsg}</span>
          <i class="fa-solid fa-jedi icon-user" style="color: aliceblue !important;"></i>
      </div>`;
    viewChatI.innerHTML += questionUser;
    textAreaChat.value = "";
  });

  return sectionchatI;
};

/* <div class="characterCtn">
  <img class="imgProfileChati" id="imgChatI${data.id}" src="${data.imageUrl}" alt="${data.id}">
  <span id="textIACharacter"></span>
</div>*/
