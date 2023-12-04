import { navigateTo } from "../router.js";

export const modalChat = () => {
  const modalChats = document.createElement("section");
  modalChats.classList.add("modalapikey");
  modalChats.innerHTML = `
   <div class="modal_containerapikey">
     <h2 class="modal_titleapikey">¡Chatea con nosotros!</h2>
     <p class="modal_paragraphapikey">Registra a continuación la contraseña proporcionada</p>
     <form class="modal_apikey">
     <input class="modal_inputapikey" placeholder="Ingresa contraseña" type="text"></input>
     </form>
     <br>
     <button id="cerrarModal" class="modal_closeapikey">Cerrar</button>
     <button id= "openGroupChat" class="modal_GroupChat">Group Chat</button>
   </div>
`;
const openGroupChat = modalChats.querySelector("#openGroupChat");
openGroupChat.addEventListener("click", (event)=>{
  navigateTo("/panel"); 
});

  return modalChats
};
