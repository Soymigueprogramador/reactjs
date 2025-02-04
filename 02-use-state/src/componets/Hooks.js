import { useState } from 'react';

const Hooks = () => {
  /*
    Al trabajar con el hook useState vamos a tenerlo en 2 partes:
    1- Es una variable en la que se guarda la referencia del estado.
    2- Es una función que me permite actualizar dicho estado, debemos usar setNombreDeLaVariable.
  */
  const [nombre, setNombre] = useState('Pepe'); // Corrección en la desestructuración

  const CambiarNombre = () => {
    setNombre('Miguel');
  };

  return (
    <>
      <h1>Trabajando con el hook useState de React.js</h1>

      <div>
        <p>{nombre}</p>
        <button onClick={CambiarNombre}>Cambiar nombre</button>
      </div>
    </>
  );
};

export default Hooks;