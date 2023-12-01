export const Error404 = () => {
  const sectionError = document.createElement("section");
  sectionError.classList.add("containerError");
  sectionError.innerHTML = `
<div class="errorBox">
  <div class="notFound">
    <h1>404</h1>
    <h2>Galaxia no encontrada</h2>
  </div>
  <a href="/">Volver</a>
</div>
`;

  return sectionError;
};
