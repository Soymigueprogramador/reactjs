import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Inicio from "../Inicio/Inicio.js";
import Productos from "../Productos/Productos.js";
import Contacto from "../Contacto/Contacto.js";

const Router = () => {
    return (
        <BrowserRouter>
            {/* Menu de navegacion */}
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/productos">Productos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto">Contacto</NavLink>
                    </li>
                </ul>
            </nav>

            {/* Rutas para los componentes */}
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="*" element={<h1>Página en construcción</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;