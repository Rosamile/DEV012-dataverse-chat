import { Header } from "../components/header.js";
import { Footer } from "../components/Footer.js";
import { chatG } from "../components/chaGroup.js";

export const chatGroup = () => {
  const profileChatGroup = JSON.parse(localStorage.getItem("profileChat"));
  const renderChatG = chatG(profileChatGroup);

  const chatGView = document.createElement("section");
  chatGView.className = "chatGView";

  const chatGComponent = renderChatG;

  const headerComponent = Header("groupChat");
  chatGView.innerHTML = headerComponent;
  const footerComponent = Footer();

  chatGView.appendChild(chatGComponent);
  chatGView.appendChild(footerComponent);

  return chatGView;
};
