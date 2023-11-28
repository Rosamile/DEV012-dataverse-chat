// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
//va el main, eventListener de todas las rutas, llamamos al router
//import solo viewa
import { Example } from "../views/Example.js";
import { onURLChange, setRootElement, setRoutes } from "./router.js";
import { home } from "../views/home.js";
import { Error404 } from "../views/error.js";
import { infoCharacters } from "./views/infoCharacters.js";

const routes = {
  "/error": Error404,
  "/": home,
  "/facts": infoCharacters,
};

const viewContainer = document.getElementById("root");
setRoutes(routes);
setRootElement(viewContainer);
document.addEventListener("DOMContentLoaded", (event) => {
  onURLChange(event.target.location.pathname);
});

document.addEventListener("popstate", (event) => {
  onURLChange(window.location);
});

console.log("hola aqui estoy");

/*const modal = document.querySelector("modal2");
const openModal = document.querySelector("hero_cta");
const cerrarModal = document.querySelector("modal_close2");

openModal.addEventListener("click", (e) => {
  e.preventDefault(), modal.classList.add("modal2--show");
});

cerrarModal.addEventListener("click", (e) => {
  e.preventDefault(), modal.classList.remove("modal2--show");
});*/
