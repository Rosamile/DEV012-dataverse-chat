// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
//va el main, eventListener de todas las rutas, llamamos al router
//import solo viewa

import { onURLChange, setRootElement, setRoutes } from "./router.js";
import { home } from "../views/home.js";
import { Error404 } from "../views/error.js";
import { infoCharacters } from "./views/infoCharacters.js";
import { renderItems } from "../views/infoCharacters.js";
import { modal } from "./components/modal.js";

const routes = {
  "/error": Error404,
  "/": home,
  "/infoCharacters": infoCharacters,
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

const openModal = document.querySelector(".hero_ctaapikey");
const cerrarModal = document.querySelector(".modal_closeapikey");

console.log(openModal);
openModal.addEventListener("click", (e) => {
  e.preventDefault(), modal.classList.add("modal--showapikey");
});

cerrarModal.addEventListener("click", (e) => {
  e.preventDefault(), modal.classList.remove("modal--showapikey");

  const modal = document.querySelector("modal2");
  const openModal = document.querySelector("hero_cta");
  const cerrarModal = document.querySelector("modal_close2");

  cerrarModal.addEventListener("click", (e) => {
    e.preventDefault(), modal.classList.remove("modal2--show");
  });
});
