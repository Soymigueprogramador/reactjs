import { useState, useEffect } from 'react';
import Componente from './Componente';

const Contador = ({ titulo }) => {
    const [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(prev => prev + 1);
    };

    const restar = () => {
        setContador(prev => prev - 1);
    };

    useEffect(() => {
        if (contador !== 0) {
            console.log(contador > 0 ? 'Sumaste 1' : 'Restaste 1');
            /* This part of the code is setting the style of the `<strong>` element based on the
            value of the `contador` state. Here's a breakdown of the logic: */
        }
    }, [contador]);

    return (
        <div>
            <h1>{titulo}</h1>

            <div className='contador'>
                <button onClick={sumar}>+</button>
                <strong style={{ color: contador < 0 ? 'red' : contador === 0 ? 'black' : 'green' }}>
                    {/* Esta es una forma de cambiar los estilos de un elemento con un operador ternario. */}
                    { contador >= 5 && console.log('Psamos los 5 en el contador') }
                    {/* Esta es una forma de poder montar y desmontar un componente. */}
                    { contador >= 10 && <Componente titulo={'Mira este componente'}/> } 
                    {contador}
                </strong>

                <button onClick={restar}>-</button>
            </div>

        </div>
    );
};

export default Contador;