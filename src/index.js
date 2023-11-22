// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
//va el main, eventListener de todas las rutas, llamamos al router

import Example from "../views/Example.js";
import { onURLChange, setRootElement, setRoutes } from "./router.js";

const routes = {
  "/error": "some",
  "/": Example,
};

const viewContainer = document.getElementById("root");
setRoutes(routes);
setRootElement(viewContainer);
document.addEventListener("DOMContentLoaded", (event) => {
  console.log(event.target.location.pathname);
  onURLChange(event.target.location.pathname);
});

console.log("hola aqui estoy");
