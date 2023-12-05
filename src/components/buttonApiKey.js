import { navigateTo } from "../router.js";

export const apiKeyButton = () => {
  const btnCtnApiKey = document.createElement("div");
  btnCtnApiKey.classList.add("btnCtnApiKey");
  btnCtnApiKey.innerHTML = `
<button><i class="fa-regular fa-comments"></i></button>
`;
  btnCtnApiKey.addEventListener("click", (event) => {
    location.href = `/apikey`;
  });
  return btnCtnApiKey;
};
