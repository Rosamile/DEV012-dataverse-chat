export const modalChat = () => {
  const modalChats = document.createElement("section");
  modalChats.classList.add("modalApikey");
  modalChats.innerHTML = `
   <div class="modal_containerapikey">
     <p class="modal_paragraphapikey">Registra a continuación la contraseña proporcionada</p>
     <form class="modal_apikey">
     <input class="modal_inputapikey" placeholder="Ingresa contraseña" type="text"></input>
     </form>
      <button id= "savePassword" class="savePassword">Guardar</button>
   </div>
`;
  const savePassword = modalChats.querySelector("#savePassword");
  const password = modalChats.querySelector(".modal_inputapikey");

  savePassword.addEventListener("click", (event) => {
    if (password.value === "") {
      event.preventDefault(); //hace que el alert no se redireccione
      alert("Debes ingresar un Apikey valida");
    } else {
      localStorage.setItem("APIKEY", password.value);
    }
    if(password.value!==""){ password.value = "*".repeat(password.value.length);
    }
  });
  

  return modalChats;
};
