// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
//va el main, eventListener de todas las rutas, llamamos al router
//import solo viewa
import { Example } from "../views/Example.js";
import { onURLChange, setRootElement, setRoutes } from "./router.js";
import { home } from "../views/home.js";
import { Error404 } from "../views/error.js";
import { renderItems } from "../views/infoCharacters.js";
import { modal } from "./components/modal.js";

const routes = {
  "/error": Error404,
  "/": home,
  "/facts": renderItems,
};

const viewContainer = document.getElementById("root");
setRoutes(routes);
setRootElement(viewContainer);
document.addEventListener("DOMContentLoaded", (event) => {
  console.log(event.target.location.pathname);
  onURLChange(event.target.location.pathname);
});

console.log("hola aqui estoy");


const openModal = document.querySelector('.hero_ctaapikey');
const cerrarModal = document.querySelector('.modal_closeapikey');

console.log(openModal);
openModal.addEventListener("click", (e) => {
  e.preventDefault(), modal.classList.add('modal--showapikey');
});

cerrarModal.addEventListener("click", (e) => {
  e.preventDefault(), modal.classList.remove('modal--showapikey');
});
