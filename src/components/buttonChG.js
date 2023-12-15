export const chatGruopButton = () => {
  const btnCtnChG = document.createElement("div");
  btnCtnChG.classList.add("btnCtnChG");
  btnCtnChG.innerHTML = `
<button><i class="fa-regular fa-comments fa-sm"></i></button>
`;
  btnCtnChG.addEventListener("click", (event) => {
    location.href = `/panel`;
  });
  return btnCtnChG;
};
