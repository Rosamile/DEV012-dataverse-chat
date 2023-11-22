// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
//va el main, eventListener de todas las rutas, llamamos al router

import { routes } from "./Router/routes";
import { setRootElement, setRoutes, renderView } from "./Router/router";

setRoutes(routes);
setRootElement(document.getElementById("root"));
document.addEventListener("DOMContentLoaded", () => {
});
export const navegate = (path) => {
  window.History.pushState({}, "", path);
 
};
window.addEventListener("popstate", (event) => {
  renderView("/");
  console.log(event);
});
