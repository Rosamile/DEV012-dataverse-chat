import { Header } from "./../components/header.js";
import { Footer } from "./../components/footer.js";
import { renderFacts } from "./../components/Facts.js";

export const infoCharacters = () => {
  const profile = JSON.parse(localStorage.getItem("profile"));
  const renderFactsComponent = renderFacts(profile);

  const factsViewView = document.createElement("div");
  factsViewView.className = "viewFactsComponents";

  const headerComponent = Header("Facts");
  factsViewView.innerHTML = headerComponent;
  const footerComponent = Footer();

  factsViewView.appendChild(renderFactsComponent);
  factsViewView.appendChild(footerComponent);

  return factsViewView;
};
