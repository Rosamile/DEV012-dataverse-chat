import { Header } from "../components/header.js";
import { Footer } from "../components/Footer.js";
import { chatG } from "../components/chaGroup.js";

export const chatGroup = () => {
  const chatGView = document.createElement("section");
  chatGView.className = "chatGView";

  const chatGComponent = chatG();

  const headerComponent = Header("groupChat");
  chatGView.innerHTML = headerComponent;
  const footerComponent = Footer();

  chatGView.appendChild(chatGComponent);
  chatGView.appendChild(footerComponent);

  return chatGView;
};
