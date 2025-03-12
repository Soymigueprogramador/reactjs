/*
    The context / El contexto:
    En react tenemos a las props que nos permiten pasar contenido del componente padre al componente hijo,
    pero con las props solo podemos pasarles contenido estatic.
    Entonces usamos el context que nos permite poder pasar contenido a todo el proyecto desde un unico archivo,
    nosotros podemos definir dicho contenido desde un unico archivo y en caso de querer cambiar ese contenido solo tenemos que ir a un unico lyugar. 
*/

// Creamos un archivo dentro de la carpeta context e iniciamos el archivo con esta linea de importacion.
import { createContext } from "react";

// Creamos y exportamos las constantes que se van a compartir en otros archivos a lo largo del proyecto. 
export const pruebasContext = createContext(null);

/*
    Para poder usar el context debemos envolver el contenido de lo que querramos usar de esta manera: 
    <pruebasContext.Provider value="valorParaCompartir">
        contenido a envolver
    </pruebasContext.Provider>

    Para mostrar el valor podemos hacer esto:
    const contexto = useContext(nombreDelComponenteDelContext);
    console.log(nombreVariable)

    Para mostrarlo por pantalla hacemos esto: 
    <h1> El valor del contexto es: {nombreVariable} </h1>
*/