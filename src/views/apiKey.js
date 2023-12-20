import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";
import { modalChat } from "../components/modal.js";

export const apiKey = () => {
  // Crear el elemento apiKeyView
  const apiKeyView = document.createElement("section");
  apiKeyView.className = "apiKeyView";
  // Obtener los componentes
  const apiKeyComponent = modalChat();
  const headerComponent = Header("apiKey");
  apiKeyView.innerHTML = headerComponent;
  const footerComponent = Footer();
  // Agregar los componentes como hijos de apiKeyView
  apiKeyView.appendChild(apiKeyComponent);
  apiKeyView.appendChild(footerComponent);

  return apiKeyView;
};
