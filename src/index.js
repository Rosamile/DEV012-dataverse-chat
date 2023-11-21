// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
//va el main, eventListener de todas las rutas, llamamos al router

import { router } from "../src/router";

document.addEventListener("DOMContentLoaded", () => {
  router(); //inicia el enrrutador para config la vista inicial
});
export const navegate = (path) => {
  window.History.pushState({}, "", path);
  router();
};
window.addEventListener("popstate", router);
