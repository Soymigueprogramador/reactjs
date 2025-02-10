import React, { useEffect, useState } from 'react';

const Ajax = ({ datos }) => {
    // Estado para almacenar los usuarios y el estado de carga
    const [user, setUser] = useState([]);
    const [cargando, setCargando] = useState(true);

    // URL de la API
    const api = 'https://reqres.in/api/users?page=2';

    // Función para establecer datos de usuario por defecto
    const userBasic = () => {
        setUser([
            {
                id: 7,
                email: "michael.lawson@reqres.in",
                first_name: "Michael",
                last_name: "Lawson",
                avatar: "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                id: 8,
                email: "lindsay.ferguson@reqres.in",
                first_name: "Lindsay",
                last_name: "Ferguson",
                avatar: "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                id: 9,
                email: "tobias.funke@reqres.in",
                first_name: "Tobias",
                last_name: "Funke",
                avatar: "https://reqres.in/img/faces/9-image.jpg"
            }
        ]);
    };

    // Petición con async/await
    const userAsync = async () => {
        try {
            const response = await fetch(api);
            const { data } = await response.json();
            setUser(data);
        } catch (error) {
            console.log('Error al recibir los datos', error);
        } finally {
            setCargando(false);
        }
    };

    // useEffect para ejecutar la carga inicial
    useEffect(() => {
        userBasic(); // Carga los datos por defecto
        userAsync(); // Llama a la API
    }, []);

    return (
        <div>
            <h1>{datos}</h1>
            {cargando ? (
                <p>Cargando usuarios...</p>
            ) : (
                <div className='user-container'>
                    <ul>
                        {user.length > 0 ? (
                            user.map((userData) => (
                                <li key={userData.id}>
                                    {userData.first_name} {userData.last_name} - {userData.email}
                                    <br />
                                    <img src={userData.avatar} alt={userData.first_name} width="100" />
                                </li>
                            ))
                        ) : (
                            <p>No hay usuarios disponibles.</p>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Ajax;
