// Este modulo ya viene instalado en react y se usa para la validacion de las props. 
import PropTypes from 'prop-types'

const TercerComponente = ({ 
    // Asi es como pasamos informacion por las props por default.
    primerNombre = "Maria", 
    segundoNombre = "Celeste",
    
    // Asi es como le pasamos informacion por las props 
    apellido = "Gimenez",
    nombre, 
    ficha,
    edad 
}) => {

    return (
        <div>
            <h1> Tercer componente </h1>

            {/* Asi es como pasamos los datos de una props por pantalla. */}
            <h2> {primerNombre} {segundoNombre} {apellido} </h2> {/* Asi se llaman a varias props en una linea. */}

            <ul>
                <li>
                    {ficha.edad}
                </li>
            </ul>
        </div>
    )
}

// Asi es como validamos las props.
TercerComponente.propTypes = {
    primerNombre: PropTypes.string.isRequired,
    segundoNombre: PropTypes.string,
    apellido: PropTypes.string.isRequired,
    ficha: PropTypes.shape({
        edad: PropTypes.number.isRequired,
    }),
};
 
export default TercerComponente;