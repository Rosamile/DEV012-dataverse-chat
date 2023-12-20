import { onURLChange, setRootElement, setRoutes } from "./router.js";
import { home } from "./views/home.js";
import { Error404 } from "./views/error.js";
import { infoCharacters } from "./views/infoCharacters.js";
import { chatindividual } from "./views/chatIndividual.js";
import { apiKey } from "./views/apiKey.js";
import { chatGroup } from "./views/chatGrupal.js";

const routes = {
  "/": home,
  "/facts": infoCharacters,
  "/chatindi": chatindividual,
  "/error": Error404,
  "/apikey": apiKey,
  "/panel": chatGroup,
};

const viewContainer = document.getElementById("root");
setRoutes(routes);
setRootElement(viewContainer);
document.addEventListener("DOMContentLoaded", (event) => {
  onURLChange(event.target.location.pathname);
});

document.addEventListener("popstate", () => {
  onURLChange(window.location.pathname);
});
