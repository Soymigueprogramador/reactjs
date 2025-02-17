/* En este componente mostramos como pasar parametros y mostrarlos por pantalla. */

import { useParams } from "react-router-dom"


const Users = () => {
    // Parametros por defecto
    //const { nombre = 'Miguel', apellido = 'Salazar' } = useParams(); 

    // Parametros opcionales.
    let { nombre, apellido } = useParams();

    return (
        <>
            {
                !nombre && <h1> No estas logeado </h1>
            }
            {
                nombre && <h1> Esta es la pagina del usuario { nombre } { apellido } </h1>
            }
        </>
    )
}

export default Users
