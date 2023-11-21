let routes={};
//Espacio encargado de contener las rutas del proyecto

let rootElement='';
//Referencia al objeto HTML donde vamos a pintar el contenido del componente, debe apuntar a un lugar dentro del html ejemplo div =root

//Se debe encapsular las variables para que solo sean conocidas en ese lugar y se hace de la siguiente forma primero set

export const setRootElement = (newRootElementValue) => {
//esta es la que todos conocen para poder asignar valores a las variables de arriba, debe validar si el valor que se le está dando es correcto
//debe validar si es un objeto html
//despues que elemento exista
    rootElement=newRootElementValue;
}

export const setRoutes = (newRoutesValue) => {
        routes=newRoutesValue;
    }

    export const renderView = (pathname, props = {}) =>{
   //Crear una variable para guardar el valor de root
const root =rootElement;
//limpiar el html elemento donde se está agregando
root.innerHTML='';
//Encontrar la vista correcta para el pathname (ruta)
if (routes [pathname]) {
    const template = routes[pathname]();
    //en caso de no encontrar la ruta pasar la vista de error
// adjuntar la vista del elemento del dom
root.appendChild (template);
}

//Encontrar la vista correcta para el pathname minuto 21:18

   }