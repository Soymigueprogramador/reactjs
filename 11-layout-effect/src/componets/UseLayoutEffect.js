import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const UseLayoutEffectComponent = () => {
    const [mostrar, setMostrar] = useState(false);

    const caja = useRef(null);
    const boton = useRef(null);

    useLayoutEffect(() => {
        console.log('useLayoutEffect');
        // Ejemplo para mostrar una mínima diferencia.
        /*
            let caja1 = document.querySelector('#caja1');
            if (caja1) {
                console.log(caja1.getBoundingClientRect());
            }
            caja1.innerHTML = 'useLayoutEffect';
        */
    }, []);

    useEffect(() => {
        console.log('useEffect');
        // Ejemplo para mostrar una mínima diferencia.
        /*
            let caja2 = document.querySelector('#caja2');
            if (caja2) {
                console.log(caja2.getBoundingClientRect());
            }
            caja2.innerHTML = 'useEffect';
        */

        if (mostrar && !caja.current) {
            console.warn("El elemento 'caja' no está disponible.");
            return;
        }

        const rect = boton.current.getBoundingClientRect();
        console.log(rect);


    }, [mostrar]);

    return (
        <>
            <h1> useLayoutEffect </h1>

            <div className="container">
                <button onClick={() => setMostrar(prev => {
                    console.log(prev, !prev);
                    return !prev;
                })} ref={boton}>
                    {mostrar ? 'Ocultar mensaje' : 'Mostrar mensaje'}
                </button>

                {
                    mostrar && (<div id="caja1" ref={caja}>Mostrando una caja</div>)
                }

                <div id="caja2"></div>
            </div>
        </>
    );
};

export default UseLayoutEffectComponent;