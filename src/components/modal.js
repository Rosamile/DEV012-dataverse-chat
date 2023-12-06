export const modalChat = () => {
  const modalChats = document.createElement("section");
  modalChats.classList.add("modalApikey");
  modalChats.innerHTML = `
   <div class="modal_containerapikey">
     <p class="modal_paragraphapikey">Registra a continuación la contraseña proporcionada</p>
     <form class="modal_apikey">
     <input class="modal_inputapikey" placeholder="Ingresa contraseña" type="text"></input>
     </form>
      <button id= "openGroupChat" class="modal_GroupChat">Chat Grupal</button>
   </div>
`;
  const openGroupChat = modalChats.querySelector("#openGroupChat");
  const password = modalChats.querySelector(".modal_inputapikey");
  openGroupChat.addEventListener("click", (event) => {
    console.log("click");
    if (password.value === "") {
      event.preventDefault(); //hace que el alert no se redireccuione
      alert("hola!");
    } else {
      window.location.href = "/panel";
    }
  });
  return modalChats;
};
