import { navigateTo } from "../router.js";

export const apiKeyButton = () =>{
const div = document.createElement('div');
div.classList.add('divbuttonapiKey');
div.innerHTML = `
<button id ="buttonapiKey" title="botón para ingresar el Api Key">Api Key</button>
`;
div.addEventListener("click", (event) => {
    location.href=`/apikey`;
});
return div;
};

