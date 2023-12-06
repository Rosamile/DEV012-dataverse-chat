export const Header = (variable) => {
  //Header va a ser vacio a no ser que este /home
  let view = "";
  if (variable === "home") {
    view = `
<header>
  <a class="titlteSW" href="/">STAR WARS Verse</a>
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
  <a class="titlteSW" href="/">STAR WARS Perfil</a>
  <div class="menu icon"><i class="fa-solid fa-bars icon" style="color: #d7d700 !important;"></i></div>
</header>
`;
  }
  if (variable === "chatCharacter") {
    view = `
<header>
  <a class="titlteSW" href="/">STAR WARS Chat</a>
  <div class="menu icon"><i class="fa-solid fa-bars icon" style="color: #d7d700 !important;"></i></div>
</header>
<main>
  <h2>Chatea con tu personaje favorito</h2>
</main>

`;
  }
  if (variable === "groupChat") {
    view = `
<header>
  <a class="titlteSW" href="/">STAR WARS Chat</a>
  <div class="menu icon"><i class="fa-solid fa-bars icon" style="color: #d7d700 !important;"></i></div>
</header>
<main>
  <h2>Chatea con nosotros!!</h2>
</main>

`;
  }
  if (variable === "apiKey") {
    view = `
<header>
  <a class="titlteSW" href="/">STAR WARS</a>
  <div class="menu icon"><i class="fa-solid fa-bars icon" style="color: #d7d700 !important;"></i></div>
</header>
<main>
  <h2>Chatea con nosotros!</h2>
</main>
`;
  }

  return view;
};
