import { useState } from "react";
import PropTypes from "prop-types";

const Ejersicio1 = ({ titulo, año }) => {
    const [currentYear, setCurrentYear] = useState(año);

    const añoSiguiente = () => setCurrentYear(currentYear + 1);
    const añoAnterior = () => setCurrentYear(currentYear - 1);

    const manejarInput = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value)) {
            setCurrentYear(value);
        }
    };

    return (
        <div>
            <h1>{titulo}</h1>

            <h2>Año actual: {currentYear}</h2>
            <div className="container">
                <button onClick={añoSiguiente}>Año siguiente</button>
                <input
                    type="number"
                    value={currentYear}
                    onChange={manejarInput}
                    placeholder="Ingresa un año"
                />
                <button onClick={añoAnterior}>Año anterior</button>
            </div>

        </div>
    );
};

// Corrección de PropTypes
Ejersicio1.propTypes = {
    titulo: PropTypes.string.isRequired,
    año: PropTypes.number.isRequired,
};

export default Ejersicio1;