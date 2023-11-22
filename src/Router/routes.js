//es un diccionario de palabras o diccionario de rutas
import { Header } from "../components/header.js";
import { Footer } from "../components/Footer.js";
import { Home } from "../views/home.js";
import { Error404 } from "../views/error.js";

export const routes = {
  "/": Home,
  "/error": Error404,
};
