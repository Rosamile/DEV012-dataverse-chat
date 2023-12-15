export const apiKeyButton = () => {
  const btnCtnApiKey = document.createElement("div");
  btnCtnApiKey.classList.add("btnCtnApiKey");
  btnCtnApiKey.innerHTML = `
<button><i class="fa-solid fa-key fa-sm"></i></button>
`;
  btnCtnApiKey.addEventListener("click", (event) => {
    location.href = `/apikey`;
  });
  return btnCtnApiKey;
};
