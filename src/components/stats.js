export const stats = () => {
  const div = document.createElement("div");
  div.classList.add("stadistics");
  div.innerHTML = `
        <p id="stats"></p>
        <p id="sumAges"></p>
    `;
  return div;
};
