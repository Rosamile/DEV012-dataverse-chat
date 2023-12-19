/* eslint-disable no-unused-vars */
import getCompletion, { clearHistoryChat, upDateChat } from "../lib/API.js";

export const chatI = (data) => {
  clearHistoryChat();
  let loading = false; // Variable para indicar si el chatbot está pensando
  const sectionchatI = document.createElement("section");
  const apiKEY = localStorage.getItem("APIKEY");
  sectionchatI.classList.add("containerChati");
  sectionchatI.innerHTML = `
    <div class="profiletCtn">
      <img class="imgProfileChat" id="imgProfileChatI${data.id}" src="${data.imageUrl}" alt="${data.id}">
      <span class="nameFact" itemprop="name">${data.name}</span>
    </div>
    <div class="chatCtn">
      <div class="chatBox">
        <div class="userCtn"></div>
        <span class="loading-message" style="color: #640808;"></span>
      </div>
      <div class="textAreaCtn">
        <textarea placeholder="Comienza a chatear..." name="writeHere" id="writeHere" cols="30" rows="5"></textarea>
        <div id="buttonEnviarChatG">
          <button>
            <i class="fa-solid fa-meteor icon-send fa-lg"></i>
          </button>
        </div>
      </div>
    </div>`;

  const btnChatI = sectionchatI.querySelector("#buttonEnviarChatG");
  const textAreaChat = sectionchatI.querySelector("#writeHere");
  const viewChatI = sectionchatI.querySelector(".userCtn");
  const loadingMessage = sectionchatI.querySelector(".loading-message");

  btnChatI.addEventListener("click", () => {
    loading = true; // Indicar que el chatbot está pensando
    const newMsg = textAreaChat.value;

    // Mostrar "Pensando..." antes de obtener la respuesta
    loadingMessage.textContent = "escribiendo...";

    getCompletion(newMsg, data.name, apiKEY).then((res) => {
      loading = false; // Indicar que el chatbot ha terminado de pensar
      upDateChat(res.choices[0].message);
      loadingMessage.textContent = ""; // Limpiar el mensaje de "Pensando..."
      viewChatI.innerHTML += `
        <div class="userCtn_inner">
          <img class="imgProfileChat" id="imgChatI${data.id}" src="${data.imageUrl}" alt="${data.id}">
          <span id="textIACharacter">${res.choices[0].message.content}</span>
          <div class="userCtn_spacer"></div>
        </div> `;
    });

    const questionUser = `
      <div class="userCtn_inner">
        <div class="userCtn_spacer"></div>
        <span id="textUser">${newMsg}</span>
        <i class="fa-solid fa-jedi icon-user" style="color: aliceblue !important;"></i>
      </div>`;

    viewChatI.innerHTML += questionUser;
    textAreaChat.value = "";
  });

  return sectionchatI;
};
