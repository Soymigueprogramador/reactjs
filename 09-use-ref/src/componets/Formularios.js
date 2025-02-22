/*
    El hook 'useRef' nos permite crear una referencia que va a persistir mientras el componente esté montado.
    Cuando este componente se desmonte, dicha referencia desaparecerá.
*/

import './Formularios.css'
import { useRef } from 'react'

const Formularios = () => {
    // Al igual que con useState tenemos que crear una referencia de todos los campos que necesitamos.
    const nombre = useRef(); // Referencia creada.
    const apellido = useRef();
    const email = useRef();
    const mensaje = useRef();

    const caja = useRef();

    const mostrar = (e) => {
        e.preventDefault();

        console.log("Nombre:", nombre.current.value.trim());
        console.log("Apellido:", apellido.current.value.trim());
        console.log("Email:", email.current.value.trim());
        console.log("Mensaje:", mensaje.current.value.trim());

        console.log(caja);
        let { current: cajita } = caja; // Aplicamos la desestructuracion y asi abreviamos.
        cajita.classList.add("visto");
        cajita.innerHTML = 'Formulario enviado';
    };

    return (
        <>
            <h1> Hola, soy un Formulario </h1>

            <div className='caja' ref={caja}>
                <h2> Rellena y envia el formulario </h2>
            </div>

            {/* En cada campo se le tiene que agregar una referencia como esta ref={nombreReferencia}  */}
            <div className='container'>
                <form onSubmit={mostrar}>
                    <label> Nombre </label>
                    <input
                        type='text'
                        placeholder='Ingresa tu nombre'
                        ref={nombre} 
                    />

                    <label> Apellido </label>
                    <input
                        type='text'
                        placeholder='Ingresa tu apellido'
                        ref={apellido}
                    />

                    <label> Email </label>
                    <input
                        type='email'
                        placeholder='Ingresa tu email'
                        ref={email}
                    />

                    <label> Mensaje </label>
                    <textarea
                        placeholder='Ingresa tu mensaje'
                        ref={mensaje}
                    ></textarea>

                    <input className='btn' type='submit' value='Enviar' />
                </form>
                <button onClick={() => nombre.current?.select()}>
                    Llena el formulario
                </button>
            </div>
        </>
    )
}

export default Formularios;