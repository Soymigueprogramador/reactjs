import { useEffect, useRef, useState } from "react";
import Empleados from "./Empleados";

const Gestion = () => {
    const [nombre, setNombre] = useState("");
    const [pagina, setPagina] = useState(1);

    useEffect(() => {
        console.log('La vista se actualizó');
    }, [ nombre, pagina ]);

    const gestor = useRef();

    const asignarGestor = () => {
        setNombre(gestor.current.value);
    };

    return (
        <>
            <h1>Nombre del gestor: {nombre}</h1>

            <div className="container">
                <input
                    type="text"
                    ref={gestor}
                    onChange={asignarGestor}
                    placeholder="Ingresa el nombre del gestor"
                />
            </div>

            <h2>El listado de empleados es administrado por el gestor {nombre}</h2>

            <p>El listado de los empleados viene de un JSON</p>

            <div className="container-btn">
                <button onClick={() => setPagina(1)}>Página 1</button>
                <button onClick={() => setPagina(2)}>Página 2</button>
                <button onClick={() => setPagina(3)}>Página 3</button>
            </div>

            <Empleados pagina={pagina} />
        </>
    );
};

export default Gestion;