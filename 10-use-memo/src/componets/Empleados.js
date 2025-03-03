/*
    React.memo es una función de orden superior que memoriza un componente funcional.
    Esto significa que solo se volverá a renderizar si sus props cambian.
    Si el componente no recibe nuevas props, React.memo lo mantendrá en memoria y evitará renders innecesarios.
*/

import React, { useEffect, useState, useCallback } from 'react';

const Empleados = React.memo(({ pagina }) => {
  const [empleados, setEmpleados] = useState([]);
  const [cargando, setCargando] = useState(true); // Estado para indicar si está cargando

  // Memoriza la función para evitar recreaciones innecesarias en cada render
  const listarEmpleados = useCallback(async () => {
    setCargando(true);
    try {
      const api = `https://reqres.in/api/users?page=${pagina}`;
      const respuesta = await fetch(api);
      const { data: misEmpleados } = await respuesta.json();
      setEmpleados(misEmpleados);
    } catch (error) {
      console.error('Error al obtener los empleados:', error);
    } finally {
      setCargando(false);
    }
  }, [pagina]); 

  useEffect(() => {
    listarEmpleados();
  }, [listarEmpleados]);

  console.log('Este componente se actualizó');

  return (
    <div className="container">
      {cargando ? (
        <p>Cargando empleados...</p>
      ) : empleados.length === 0 ? (
        <p>Lista de empleados vacía</p>
      ) : (
        <ul className="lista">
          <p>Mostrando la página {pagina}</p>
          {empleados.map((empleado) => (
            <li key={empleado.id}>
              {empleado.first_name} {empleado.last_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default Empleados;