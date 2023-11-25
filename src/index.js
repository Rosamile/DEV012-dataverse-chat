// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
//va el main, eventListener de todas las rutas, llamamos al router
//import solo viewa
import { Example } from "../views/Example.js";
import { onURLChange, setRootElement, setRoutes } from "./router.js";
import { home } from "../views/home.js";
import { Error404 } from "../views/error.js";
import { renderItems } from "../views/infoCharacters.js";

const routes = {
  "/error": Error404,
  "/": home,
  "/cards": renderItems,
};

const viewContainer = document.getElementById("root");
setRoutes(routes);
setRootElement(viewContainer);
document.addEventListener("DOMContentLoaded", (event) => {
  console.log(event.target.location.pathname);
  onURLChange(event.target.location.pathname);
});

console.log("hola aqui estoy");
