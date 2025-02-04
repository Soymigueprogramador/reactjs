import React from "react";

const Eventos = () => {
  // Función de evento para "Más click".
  const masClick = (e, nombre) => {
    alert(`${nombre}, hiciste click en "Más click".`);
    console.log(`${nombre}, hiciste click en "Más click".`);
    console.log(e);
  };

  // Función de evento para "Doble click".
  const dobleClick = (e, nombre) => {
    alert(`${nombre}, hiciste doble click en "Más click".`);
    console.log(`${nombre}, hiciste doble click en "Más click".`);
  };

  // Funciones para eventos del mouse
  const entraste = () => console.log("Entraste a la caja");
  const saliste = () => console.log("Saliste de la caja");

  // Funciones para eventos en el input
  const ingresarNombre = () => console.log("Ingresa tu nombre");
  const salir = () => console.log("Saliste");

  return (
    <div>
      <h1>Eventos</h1>

      {/* Evento de click con una función anónima */}
      <button onClick={() => console.log("Este pasa cuando hago click")}>
        Evento click
      </button>

      {/* Evento de click con una función definida */}
      <button onClick={(e) => masClick(e, "Miguel")}>Más click</button>

      {/* Evento de doble click */}
      <button onDoubleClick={(e) => dobleClick(e, "Miguel")}>
        Doble click
      </button>

      {/* Evento de entrada y salida del mouse */}
      <div
        id="caja"
        onMouseEnter={entraste}
        onMouseLeave={saliste}
      >
        <p>Hola, soy una caja</p>
      </div>

      {/* Input con eventos de enfoque y pérdida de foco */}
      <div>
        <input
          type="text"
          onFocus={ingresarNombre}
          onBlur={salir}
          placeholder="Ingresa tu nombre"
        />
      </div>
    </div>
  );
};

export default Eventos;
