//es un diccionario de palabras o diccionario de rutas
import { Header } from "../components/header.js";
import { Footer } from "../components/Footer.js";
import { Home } from "../views/home.js";
import { Error404 } from "../views/error.js";

let routes = {
  "/": Home,
  "/error": Error404,
};
export function router() {
  const path = window.location.pathname;
  const route = routes[path] || routes["/error"];
  const view = route();
}
export default router;
