export const Error404 = () => {
  const view = `
    <div class = "Error404">
    <h2>Error 404</h2>
    </div>
    `;
  const errorView = document.createElement("div");
  errorView.innerHTML = view;
  return errorView;
};
