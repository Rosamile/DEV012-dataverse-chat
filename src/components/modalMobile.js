export const modalMobile = () => {
  const btnModalMobile = document.createElement("section");
  btnModalMobile.classList.add("ctnModalMobile");
  btnModalMobile.innerHTML = `
      <div id="menu"  class="menu icon"><i class="fa-solid fa-bars icon" style="color: #d7d700 !important;"></i></div>
`;

  return btnModalMobile;
};
