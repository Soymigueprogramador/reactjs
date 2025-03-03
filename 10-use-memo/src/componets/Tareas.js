// Importamos los hooks useState y useMemo desde React
import { useState, useMemo } from 'react';

const Tareas = () => {
  // Estado para almacenar la lista de tareas
  const [tareas, setTareas] = useState([]);
  // Estado para manejar el título de la nueva tarea
  const [titulo, setTitulo] = useState('');
  // Estado para el contador que se incrementará con el botón
  const [contador, setContador] = useState(2025);

  // Función que se ejecuta al enviar el formulario para agregar una tarea
  const guardarTareas = (e) => {
    e.preventDefault(); // Evita la recarga de la página
    if (titulo.trim() === '') return; // No permite agregar tareas vacías
    setTareas((prevTareas) => [...prevTareas, titulo]); // Agrega la nueva tarea al estado
    setTitulo(''); // Resetea el campo de entrada
  };

  // Función para eliminar una tarea según su índice en el array
  const eliminarTarea = (index) => {
    setTareas((prevTareas) => prevTareas.filter((_, i) => i !== index));
  };

  // Función para incrementar el contador
  const sumar = () => {
    setContador((prev) => prev + 1); // Asegura el valor actualizado del estado
  };

  // Función memoizada que simula un cálculo pesado e imprime un mensaje en consola
  const otrosContadores = useMemo(() => {
    console.log('Mostrando otros contadores'); // Mensaje de depuración
    for (let i = 0; i <= contador; i++) {
      // Simulación de un cálculo intensivo (aquí no hace nada realmente)
    }
    return `Sumar una tarea ${contador}`; // Devuelve un string con el valor actualizado
  }, [contador]); // Se vuelve a calcular solo cuando 'contador' cambia

  // Lista de tareas memoizada para evitar renders innecesarios
  const listaTareas = useMemo(() => {
    return tareas.map((tarea, index) => (
      <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {tarea}
        <button
          onClick={() => eliminarTarea(index)}
          style={{ background: 'red', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Eliminar tarea
        </button>
      </li>
    ));
  }, [tareas]); // Se recalcula solo cuando cambia 'tareas'

  return (
    <>
      <h1>Mis tareas con useMemo</h1>

      {/* Formulario para agregar nuevas tareas */}
      <form className="container" onSubmit={guardarTareas}>
        <input
          className="tareas"
          type="text"
          name="titulo"
          placeholder="Agrega una tarea"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <button className="btn-tareas" type="submit">Guardar tarea</button>

        <div className="campo-tareas">
          <h3>Lista de tareas</h3>
          <ol>{listaTareas}</ol> {/* Renderiza la lista memoizada de tareas */}
          <h4>{otrosContadores}</h4> {/* Muestra el resultado de otrosContadores */}
          <button onClick={sumar}>Sumar tarea</button>
        </div>
      </form>
    </>
  );
};

export default Tareas;