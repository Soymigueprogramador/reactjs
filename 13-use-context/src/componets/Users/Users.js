import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const Users = () => {
    let { nombre, apellido } = useParams();
    const [formData, setFormData] = useState({ nombre: "", apellido: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.nombre.trim() === "" || formData.apellido.trim() === "") {
            navigate("/inicio");
        } else if( nombre === 'contacto' ) {
            navigate('/contacto')
        } else {
            navigate(`/users/${formData.nombre}/${formData.apellido}`);
        }
    }; 

    return (
        <>
            { !nombre || !apellido ? (
                <h1>No estás logeado</h1>
            ) : (
                <h1>Esta es la página del usuario {nombre} {apellido}</h1>
            )}

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input 
                    type="text" 
                    name="nombre" 
                    placeholder="Ingresa tu nombre" 
                    value={formData.nombre} 
                    onChange={handleChange} 
                    required 
                />

                <label>Apellido</label>
                <input 
                    type="text" 
                    name="apellido" 
                    placeholder="Ingresa tu apellido" 
                    value={formData.apellido} 
                    onChange={handleChange} 
                    required 
                />

                <input type="submit" value="Enviar" />
            </form>
        </>
    );
};

export default Users;