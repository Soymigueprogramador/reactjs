// Creamos nuestra primera función reductora.
/*
  Pasos para crear la función reductora:
  1- Creamos una estructura similar a la del snippet rafce.
  2- Tenemos que pasarle 2 parámetros a la función:
     A) El estado que vamos a gestionar ' state = [] '
     B) La acción que vamos a llevar a cabo ' action '
  3- Creamos una estructura switch de esta manera:
     '
      switch (valor) {
    case "":

      break;

    case "":

      break;

    default:

      break;
  }
     '
  4- Dentro del componente vamos a crear una función dispatch con un objeto dentro que va a tener 2 elementos:
     A) La acción que vamos a realizar (crear, borrar)
     B) El payload que son los datos ya guardados.
*/

const Juegoreducer = (state, action) => {
  switch (action.type) {
      case "crear":
          return [...state, action.payload];

      case "borrar":
          return state.filter((juego) => juego.id !== action.payload);

          case "editar":
            return state.map((juego) => 
                juego.id === action.payload.id ? { ...juego, ...action.payload } : juego
            );
        

      default:
          return state;
  }
};

export default Juegoreducer;