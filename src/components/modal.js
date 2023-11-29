export const modal = () => {
  const view = `
    <button href="#" class="hero_ctaapikey" id="hero_ctaapikey" ><img id="imgmodal" alt="Botòn open chat" title="Botón open chat" src="https://cdn.pixabay.com/photo/2017/03/06/13/35/ufo-2121470_1280.png"></i></button>
    <section class="modalapikey">
      <div class="modal_containerapikey">
      <h2 class="modal_titleapikey">¡Chatea con nosotros!</h2>
      <p class="modal_paragraphapikey">Registra a continuación la contraseña proporcionada</p>
      <form class="modal_apikey" >
        <input  class="modal_inputapikey" placeholder="Ingresa contraseña" type="text"></input>
      </form>
      <br>
      <a href="#" class="modal_closeapikey" >Cerrar</a>
    </div>
    </section>
  `;
  return view;
}
