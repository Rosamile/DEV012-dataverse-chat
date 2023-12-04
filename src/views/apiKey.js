import { Header } from "../components/header.js"
import { Footer } from "../components/footer.js"
import { modalChat } from "../components/modal.js"

export const apiKey = () =>{

 // Crear el elemento apiKeyView
const apiKeyView = document.createElement('section');
apiKeyView.classList.add ('apiKeyViewComponents');

     // Obtener los componentes
const contenedorApiKeyComponent = modalChat();
const footerComponent = Footer();
const headerComponent = Header();

// Agregar los componentes como hijos de apiKeyView

apiKeyView.appendChild(footerComponent);
apiKeyView.appendChild(contenedorApiKeyComponent);

return apiKeyView;
};