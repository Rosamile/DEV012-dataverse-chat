import { navigateTo } from "../router.js";

export const apiKeyButton = () => {
  const btnCtnApiKey = document.createElement("div");
  btnCtnApiKey.classList.add("btnCtnApiKey");
  btnCtnApiKey.innerHTML = `
<a href="/apikey"><i class="fa-regular fa-comments"></i></a>
`;

  return btnCtnApiKey;
};
