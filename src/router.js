//logica que hace que funcione cuando se hace un cambio de ruta
let ROUTES = {};
//Espacio encargado de contener las rutas del proyecto

let rootElement = "";
let dataCharacter = {};
//Referencia al objeto HTML donde vamos a pintar el contenido del componente, debe apuntar a un lugar dentro del html ejemplo div =root

//Se debe encapsular las variables para que solo sean conocidas en ese lugar y se hace de la siguiente forma primero set

export const setRootElement = (newRootElementValue) => {
  //esta es la que todos conocen para poder asignar valores a las variables de arriba, debe validar si el valor que se le está dando es correcto
  //debe validar si newRootElementValue es un objeto html
  //despues que elemento exista
  rootElement = newRootElementValue;
};

export const setRoutes = (newRoutesValue) => {
  if (typeof newRoutesValue === "object") {
    if (newRoutesValue["/error"]) {
      ROUTES = newRoutesValue;
    }
  }
};

export const renderView = (pathname = {}) => {
  //Crear una variable para guardar el valor de root
  const root = rootElement;
  //limpiar el html elemento donde se está agregando
  root.innerHTML = "";
  //Encontrar la vista correcta para el pathname (ruta)
  if (ROUTES[pathname]) {
    const template = ROUTES[pathname]();
    //en caso de no encontrar la ruta pasar la vista de error
    // adjuntar la vista del elemento del dom
    root.appendChild(template);
  } else {
    root.appendChild(ROUTES["/error"]());
  }
};
//Encontrar la vista correcta para el pathname minuto 21:18
export const navigateTo = (pathname, props = {}) => {
  // Extraer la ruta y los parámetros de consulta
  const [path, params] = pathname.split('?');
  //actualizar la vista con pushState
  const URLvisited = window.location.origin + path + `?id=${params}`;
  history.pushState(props, "", URLvisited);
  //renderizar la vista con el pathname y propiedades
  renderView(path, props);
};
export const onURLChange = (pathname) => {
  //parse the location for the pathname and search params, es decir, convertir de algo a algo
  //convert the search params to and object
  //render the view with the pathname and objet
  renderView(pathname);
};
export const setDataCharacter = (data) => {
  //aqui voy a guardar la info de cada personaje
  dataCharacter = data;
};
export const getDataCharacter = () => {
  //muestra la data guardada de cada personaje
  return dataCharacter;
};
