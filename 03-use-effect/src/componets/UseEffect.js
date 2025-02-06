import { useEffect, useState } from "react";

const UseEffect = () => {
    const [usuario, setUsuario] = useState("Miguel");
    const [fecha, setFecha] = useState("03/07/1992");

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
        console.log("Se mostró el componente");
    }, []);

    useEffect(() => {
        console.log(`Usuario cambiado: ${usuario}`);
    }, [usuario]);

    useEffect(() => {
        console.log(`Fecha cambiada: ${fecha}`);
    }, [fecha]);

    return (
        <div>
            <h1>{usuario}</h1>

            <form>
                <input
                    type="text"
                    onChange={cambiarUsuario}
                    placeholder="Ingresa el nombre de un usuario."
                />
            </form>

            <h1>{fecha}</h1>
            <button onClick={cambiarFecha}>Cambiar fecha</button>
        </div>
    );
};

export default UseEffect;