import data from "../data/data.js"

export const chatG = () =>{
    const sectionchatG = document.createElement("section");
    sectionchatG.classList.add("groupChat");
    for (let i=0; i<data.length;i++){
      let element = data[i];
        sectionchatG.innerHTML = `
          <div class="participantesChatGroup">
            <img id="image${element.id}" src="${element.imageUrl}" alt="${element.id}">
            <span itemprop="name">${element.name}</span>
            <div>
              <i class="fa-solid fa-jedi"></i>
              <span id="textUser">sssssoy el texto del usuario</span>
            </div>
          <div>
            <textarea placeholder="Comienza a chatear..." name="writeHere" id="writeHere" cols="30" rows="10"></textarea>
            <i class="fa-solid fa-meteor"></i>
          </div>
          <div id="buttonEnviarChatG">Enviar</div>
          </div>
    `;
};

const enviarChatGrupal = sectionchatG.querySelector("#buttonEnviarChatG");
const textAreaChat = sectionchatG.querySelector("#writeHere");
let vistaChatGrupal = sectionchatG.querySelector("#textUser");

enviarChatGrupal.addEventListener("click", (event)=>{
  const nuevoMensaje = textAreaChat.value;
vistaChatGrupal.innerHTML += nuevoMensaje + "<br>";
textAreaChat.value="";

});

    return sectionchatG
    };

