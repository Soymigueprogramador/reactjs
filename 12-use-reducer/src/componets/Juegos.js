import { useEffect, useReducer } from "react";
import Juegoreducer from "../reducers/JuegoReducer.js";

// Función init para inicializar el estado desde localStorage
const init = () => {
    const juegosGuardados = localStorage.getItem("juegos");
    return juegosGuardados ? JSON.parse(juegosGuardados) : [];
};

const Juegos = () => {
    // useReducer con el reducer, estado inicial y la función init
    const [juegos, dispatch] = useReducer(Juegoreducer, [], init);

    // useEffect para guardar los cambios en localStorage
    useEffect(() => {
        localStorage.setItem("juegos", JSON.stringify(juegos));
    }, [juegos]);

    useEffect(() => {
        console.log("Estado actualizado:", juegos);
    }, [juegos]);

    const conseguirDatos = (e) => {
        e.preventDefault();

        let nuevoJuego = {
            id: new Date().getTime(),
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value
        };

        // Enviamos el nuevo juego al reducer
        dispatch({
            type: "crear",
            payload: nuevoJuego
        });

        // Limpiamos el formulario después de agregar el juego
        e.target.reset();
    };

    const borrar = (id) => {
        const action = {
            type: "borrar",
            payload: id
        };

        dispatch(action);
    };

    const editar = (e, id) => {
        console.log(e.target.value, "Editar", id);

        let juegoEditado = juegos.find(juego => juego.id === id);

        if (!juegoEditado) return; 

        let editarJuego = {
            ...juegoEditado,
            titulo: e.target.value, 
        };

        const editado = {
            type: "editar",
            payload: editarJuego,
        };

        dispatch(editado);
    };

    return (
        <>
            <h1>Juegos con función reductora</h1>

            <p>Cantidad de videojuegos: {juegos.length}</p>

            <div className="contenedor">
                <h2>Agregar más videojuegos</h2>

                <form onSubmit={conseguirDatos}>
                    <input
                        type="text"
                        name="titulo"
                        placeholder="Ingresa el nombre del videojuego"
                        required
                    />
                    <textarea
                        name="descripcion"
                        placeholder="Ingresa una descripción del juego"
                        required
                    ></textarea>
                    <input
                        type="submit"
                        value="Guardar videojuego"
                    />
                </form>
            </div>

            <ol>
                {juegos.map((juego) => (
                    <li key={juego.id}>
                        <strong>{juego.titulo}</strong>: {juego.descripcion}
                        &nbsp; <button onClick={() => borrar(juego.id)}>Eliminar juego</button>
                        &nbsp; <input
                            type="text"
                            placeholder="Editar título"
                            onBlur={e => editar(e, juego.id)}
                        />
                    </li>
                ))}
            </ol>
        </>
    );
};

export default Juegos;