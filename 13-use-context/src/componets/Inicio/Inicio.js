import { useContext } from "react";
import { pruebasContext } from "../../context/PruebasContext";

const Inicio = () => {
  const usuarios = useContext(pruebasContext);
  
  return (
    <div>
      <h1>Página de inicio</h1>
      {/* <h2>El valor del contexto es: {JSON.stringify(curso, null, 2)}</h2> */}
      <h2>El valor del contexto es: {JSON.stringify(usuarios, null, 2)} </h2>  
    </div>
  );
};

export default Inicio;
