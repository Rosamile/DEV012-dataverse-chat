const Header = () => {
  const view = `
    <header>
    <h1>STAR WARS</h1>
    <div class="menu icon"><i class="fa-solid fa-bars icon" style="color: #d7d700 !important;"></i></div>
  </header>
  <main>
    <h2>Bienvenido a la Galaxia de STAR WARS</h2>
    <h4>Explora los detalles de tus personajes favoritos de la Saga</h4>
  </main>
  <div class="statistics">
    <p id="stats"></p>
    <p id="sumAges"></p>
  </div>
  `;
  return view;
};

export default Header;