import getCompletion from "./../lib/API.js";
import data from "../data/data.js";
import { clearHistoryChatGrupal } from "./../lib/API.js";



export const chatG = () => {
  clearHistoryChatGrupal();
  const sectionchatG = document.createElement("section");
  const apiKEY = localStorage.getItem("APIKEY");
    sectionchatG.classList.add("containerChatG");
    sectionchatG.innerHTML = `
      <div class="profileGroup">
        <img id="imageG" src="https://i.pinimg.com/564x/94/da/07/94da07fde43b8c80ec6b7ac2454b7e84.jpg" alt="starwars">
      </div>
      <div class="chatCtn">
        <div class="userCtn"></div>
      <div class="textAreaCtn">
        <textarea placeholder="Comienza a chatear..." name="writeHere" id="writeHere" cols="30" rows="10"></textarea>
        <div id="buttonEnviarChatG">
          <button><i class="fa-solid fa-meteor icon-send" ></i></button></div>
     </div>
  `;
  //botones
  const btnChatGrupal = sectionchatG.querySelector("#buttonEnviarChatG");
  const textAreaChat = sectionchatG.querySelector("#writeHere");
  let viewChatGrupal = sectionchatG.querySelector(".userCtn");

  btnChatGrupal.addEventListener("click", () => {
    const newMsg = textAreaChat.value;
    for(const element of data) {
        getCompletion(newMsg, element.name, apiKEY).then((res) => {
      viewChatGrupal.innerHTML += `
        <div>
          <span id="textUser">${res.choices[0].message.content}</span>
            <i class="fa-solid fa-jedi icon-user" style="color: aliceblue !important;"></i>
       </div>
     `;
      });
    };
//preguntas a enviar
    const questionUser = `
  <div>
    <span id="textUser">${newMsg}</span>
    <i class="fa-solid fa-jedi icon-user" style="color: aliceblue !important;"></i>
  </div>

  `;
    viewChatGrupal.innerHTML += questionUser;
    textAreaChat.value = "";
  });

  return sectionchatG;
};
