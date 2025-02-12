import { useState } from 'react';
import './formulario.css';

const Formulario = ({ titulo }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [genero, setGenero] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [enviado, setEnviado] = useState(false); 

    // Funcion para conseguir los datos del formulario
    const conseguirDatosFormulario = (e) => {
        e.preventDefault();

        const datos = {
            nombre,
            apellido,
            email,
            genero,
            mensaje
        };

        console.log('Datos del formulario:', datos);

        // Marcar el formulario como enviado
        setEnviado(true);

        // Limpio los campos después de enviar el formulario.
        setNombre('');
        setApellido('');
        setEmail('');
        setGenero('');
        setMensaje('');

    };

    return (
        <>
            <h1>{titulo}</h1>

            <div className='general'>
                {enviado && <p className='enviado'> Formulario enviado correctamente </p>}

                <form className='contenedor-formulario' onSubmit={conseguirDatosFormulario}>
                    <label>Nombre</label>
                    <input
                        type='text'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder='Campo de texto'
                        required
                    />

                    <label>Apellido</label>
                    <input
                        type='text'
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        placeholder='Campo de texto'
                        required
                    />

                    <label>Email</label>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Campo de texto'
                        required
                    />

                    <label>Selecciona tu género</label>
                    <select value={genero} onChange={(e) => setGenero(e.target.value)} required>
                        <option value="">Selecciona...</option>
                        <option value="hombre">Hombre</option>
                        <option value="mujer">Mujer</option>
                    </select>

                    <label>Mensaje</label>
                    <textarea
                        placeholder='Mensaje'
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        required
                    />

                    <input className='btn' type='submit' value='Enviar' />
                </form>
            </div>
        </>
    );
};

export default Formulario;