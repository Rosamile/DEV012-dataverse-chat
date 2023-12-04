import { Header } from "../components/header.js";
import { Footer } from "../components/Footer.js";
import { chatI } from "../components/chatCharacter.js";

export const chatindividual = () => {
  const profileChat = JSON.parse(localStorage.getItem("profileChat"));
  const renderChatI = chatI(profileChat);

  const chatIView = document.createElement("div");
  chatIView.className = "chatIContainer";

  const headerComponent = Header("chatCharacter");
  chatIView.innerHTML = headerComponent;
  const footerComponent = Footer();

  chatIView.appendChild(renderChatI);
  chatIView.appendChild(footerComponent);

  return chatIView;
};
