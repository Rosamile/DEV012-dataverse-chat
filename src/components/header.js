export const Header = (variable) => {
  //Header va a ser vacio a no ser que este /home
  let view = "";
  if (variable === "home") {
    view = `
    <header>
    <h1>STAR WARS Verse</h1>
    <div class="menu icon"><i class="fa-solid fa-bars icon" style="color: #d7d700 !important;"></i></div>
  </header>
  <main>
    <h2>Bienvenido a la Galaxia de STAR WARS</h2>
    <h4>Explora los detalles de tus personajes favoritos de la Saga</h4>
  </main>

  `;
  } //hacer un if del header por cada vista en la que la quiera mostrar
  if (variable === "Facts") {
    view = `
    <header>
    <h1>STAR WARS Perfil</h1>
    <div class="menu icon"><i class="fa-solid fa-bars icon" style="color: #d7d700 !important;"></i></div>
  </header>
    `;
  }
  if (variable === "chatCharacter") {
    view = `
    <header>
    <h1>STAR WARS chatea con tu personaje favorito</h1>
    <div class="menu icon"><i class="fa-solid fa-bars icon" style="color: #d7d700 !important;"></i></div>
  </header>
    `;
  }

  return view;
};
