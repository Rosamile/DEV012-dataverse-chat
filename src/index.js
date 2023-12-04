// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
//va el main, eventListener de todas las rutas, llamamos al router
//import solo viewa

import { onURLChange, setRootElement, setRoutes } from "./router.js";
import { home } from "../views/home.js";
import { Error404 } from "../views/error.js";
import { infoCharacters } from "../views/infoCharacters.js";
import { chatindividual } from "../views/chatIndividual.js";

import { apiKey } from "./views/apiKey.js";
import { chatG } from "./components/chaGroup.js";


const routes = {
  "/": home,
  "/facts": infoCharacters,
  "/chatindi": chatindividual,
  "/error": Error404,
  "/apikey": apiKey,
  "/panel": chatG,
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
