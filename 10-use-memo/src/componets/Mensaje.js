import { useCallback } from 'react';

// Componente debe comenzar con mayúscula para cumplir con las convenciones de React
const Mensaje = () => {
  let miMensaje = 'Mostrando mensajes'
  
    // useCallback requiere un segundo argumento (dependencias) para memorizar la función correctamente
  const mostrarMensaje = useCallback(() => {
    
    console.log(miMensaje);
  }, [miMensaje]);
  
  return (
    <>
      <h1>Mi mensaje</h1>
      {/* Se agregó un botón para ejecutar la función y ver su efecto */}
      <button onClick={mostrarMensaje}>Mostrar Mensaje</button>
      
    </>
  );
}

export default Mensaje;
