import { useEffect, useState } from "react";
import Usuario from "./Usuario";

const UseEffect = () => {
    const [usuario, setUsuario] = useState(""); // Inicia vacío
    const [fecha, setFecha] = useState(new Date().toLocaleString());

    const cambiarUsuario = (e) => {
        setUsuario(e.target.value);
    };

    const cambiarFecha = () => {
        setFecha(new Date().toLocaleString());
    };

    /*
        Uso del hook useEffect:
        - useEffect(() => {...}, []): Se ejecuta una única vez al montar el componente.
        - useEffect(() => {...}, [dependencias]): Se ejecuta cuando cambian las dependencias especificadas.
    */
    useEffect(() => {
        console.log("Se mostró el componente principal");
    }, []);

    useEffect(() => {
        console.log(`Usuario cambiado: ${usuario}`);
    }, [usuario]);

    useEffect(() => {
        console.log(`Fecha cambiada: ${fecha}`);
    }, [fecha]);

    useEffect(() => {
        if (usuario === "Miguel") {
            console.log("Componente Usuario montado");
        } else {
            console.log("Componente Usuario desmontado");
        }
    }, [usuario]);

    return (
        <div>
            <h1>{usuario}</h1>

            <form>
                <input
                    type="text"
                    value={usuario}
                    onChange={cambiarUsuario}
                    placeholder="Ingresa el nombre de un usuario."
                />
            </form>

            <h1>{fecha}</h1>
            <button onClick={cambiarFecha}>Cambiar fecha</button>

            {/* Solo muestra el componente Usuario si el usuario es "Miguel" */}
            {usuario === "Miguel" && <Usuario mensaje={`Hola ${usuario} ¿Cómo estás?`} />}
        </div>
    );
};

export default UseEffect;