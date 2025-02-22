import { useEffect, useRef, useState } from 'react';

const Ejemplo = () => {
    const [saludos, setSaludos] = useState(0);
    
    // Inicamos la referencia desde el valor del estado.
    const saludosEnCola = useRef(saludos)

    const mostrarSaludo = () => {
        console.log('Saludando');
        setSaludos(saludos + 1);
    };

    // Si queremos mostrar un retraso en un saludo podemos hacerlo asi. 
    useEffect(() => {
        // Tomamos el valor del estado ya actualizado
        saludosEnCola.current = saludos;
        const timer = setTimeout(() => {
            // Mostramos el valor actualizado por consola.
            console.log('Saludos en cola:' + saludosEnCola.current); 
        }, 3000);
        return () => clearTimeout(timer);
    }, [saludos]);

    return (
        <>
            <h1> Otro ejemplo con useState </h1>

            <h2> Te saludé como {saludos} veces ¿Que mas queres...!!? </h2>

            <button onClick={mostrarSaludo}> Saludar </button>
        </>
    );
};

export default Ejemplo;