// Importando librerias de react.
import React from 'react' // <= No es obligatorio para el funcionamiento de react.js

// Funcion para crear el componente. 
const MiComponente = () => {
    const tecnologia1 = 'React.js';
    const tecnologia2 = 'Angular';
    const tecnologia3 = 'Vue.js';
    
    let datos = {
        nombre: 'Miguel',
        apellido: 'Salazar',
        profecion: 'Desarrollador front-end'
    };
    
    let numeros = ["1, 2, 3"];
    
    return (
        <>
            <h1> Mi primer componente con create react app </h1>
            <h2> Repasando cosillas de react.js </h2>

            <ol>
                <li> {tecnologia1} </li>
                <li> {tecnologia2} </li>
                <li> {tecnologia3} </li>
            </ol>

            <p>
                {JSON.stringify(datos.profecion)}
            </p>

            <p>
                Los numeros del array son: {JSON.stringify(numeros)}
            </p>
        </>
    );
};

// Exportacion del componente.
export default MiComponente;

// Esto es igual que si usara el snippets "rafce".
// Aclaraciones:
/*
    1- ára mostrar el contenido de una variable o constante por pantalla solo tenemos que usar {nombreVariable}.
       Con la etiqueta strong podemos usarla para que el resultado de una variable se muestre mas resaltado, seria esto <strong> {tecnologia1} </strong>
    2- Para mostrar los datos de un objeto tenemos que hacer esto {JSON.stringify(nombreObjeto)}. 
       Es lo mismo para mostrar un array {JSON.stringify(numeros)}
       En caso de querer mostrar algun propiedad del objeto o del array hacemos esto {JSON.stringify(nombreObjetoOArray.propiedad)}
*/