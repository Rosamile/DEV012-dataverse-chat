// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
//va el main, eventListener de todas las rutas, llamamos al router

import Example from "../views/Example.js";
import { onURLChange, setRootElement, setRoutes } from "./router.js";
import { home } from "./views/home.js";

const routes = {
  "/error": "some",
  "/": Example,

  "/home":home,
};

const viewContainer = document.getElementById("root");
setRoutes(routes);
setRootElement(viewContainer);
document.addEventListener("DOMContentLoaded", (event) => {
  console.log(event.target.location.pathname);
  onURLChange(event.target.location.pathname);
});

console.log("hola aqui estoy");
