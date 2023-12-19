import getCompletionChatGroup from "./../lib/APIChatGroup.js";
import data from "../data/data.js";

export const chatG = () => {
  const sectionchatG = document.createElement("section");
  const apiKEY = localStorage.getItem("APIKEY");
  sectionchatG.classList.add("containerChatG");
  sectionchatG.innerHTML = `

<div class="profiletCtn">
  <img class="imgProfileChat" src="https://i.pinimg.com/564x/c6/20/1b/c6201b0f2993faf44d5ffba6bb92c245.jpg"
    alt="starwars">
</div>
<div class="chatCtn">

  <div class="chatBox">
    <div class="userCtn"></div>

  </div>

  <div class="textAreaCtn">
    <textarea placeholder="Comienza a chatear..." name="writeHere" id="writeHere" cols="30" rows="10"></textarea>
    <div id="buttonEnviarChatG">
      <button><i class="fa-solid fa-meteor icon-send"></i></button>
    </div>
  </div>
</div>
`;
  //botones
  const btnChatGrupal = sectionchatG.querySelector("#buttonEnviarChatG");
  const textAreaChat = sectionchatG.querySelector("#writeHere");
  const viewChatGrupal = sectionchatG.querySelector(".userCtn");

  btnChatGrupal.addEventListener("click", () => {
    const newMsg = textAreaChat.value;
    for (const element of data) {
      getCompletionChatGroup(newMsg, element.name, apiKEY).then((res) => {
        viewChatGrupal.innerHTML += `
<div class="userCtn_inner">
  <img class="imgProfileChat" id="imgChatI"
    src="https://i.pinimg.com/564x/c6/20/1b/c6201b0f2993faf44d5ffba6bb92c245.jpg" alt="starwars">
  <span id="textIACharacter">${res.choices[0].message.content}</span>
  <div class="userCtn_spacer"></div>

</div>
`;
      });
    }
    //preguntas a enviar
    const questionUser = `
<div class="userCtn_inner">
  <div class="userCtn_spacer"></div>
  <span id="textUser">${newMsg}</span>
  <i class="fa-solid fa-jedi icon-user" style="color: aliceblue !important;"></i>


</div>

`;
    viewChatGrupal.innerHTML += questionUser;
    textAreaChat.value = "";
  });

  return sectionchatG;
};
