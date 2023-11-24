// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
//va el main, eventListener de todas las rutas, llamamos al router

import Example from "../views/Example.js";
import { onURLChange, setRootElement, setRoutes } from "./router.js";
import { home } from "./views/home.js";
import error404 from "./views/error.js";
import modal from "./components/modal.js";
import { renderItems } from "./views/infoCharacters.js";

const routes = {
  "/home":home,
  "/error": error404,
  "/personaje":renderItems,
};

const viewContainer = document.getElementById("root");
setRoutes(routes);
setRootElement(viewContainer);
document.addEventListener("DOMContentLoaded", (event) => {
  console.log(event.target.location.pathname);
  onURLChange(event.target.location.pathname);
});

console.log("hola aqui estoy");

const modal = document.querySelector('modal2');
const openModal = document.querySelector('hero_cta');
const cerrarModal = document.querySelector('modal_close2')

openModal.addEventListener('click',(e)=>{
  e.preventDefault(),
  modal.classList.add('modal2--show');

});

cerrarModal.addEventListener('click',(e)=>{
  e.preventDefault(),
  modal.classList.remove('modal2--show');

});