import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom";
import { useState } from "react";
import './router.css';
import Inicio from "../Inicio/Inicio.js";
import Productos from "../Productos/Productos.js";
import Contacto from "../Contacto/Contacto.js";
import Users from "../Users/Users.js";
import PanelControl from "../PanelControl/PanelControl.js";
import AgregarProducto from '../Router/Panel/AgregarProducto.js';
import EditarProducto from '../Router/Panel/EditarProducto.js';
import EliminarProducto from '../Router/Panel/EliminarProducto.js';

const AppRouter = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <BrowserRouter>
            <header>
                <nav>
                    <button 
                        className="hamburger" 
                        onClick={() => setMenuOpen(!menuOpen)} 
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>
                    <ul className={menuOpen ? "open" : ""}>
                        {[
                            { to: "/", label: "Inicio" },
                            { to: "/productos", label: "Productos" },
                            { to: "/contacto", label: "Contacto" },
                            { to: "/panelcontrol", label: "Panel de Control" }
                        ].map(({ to, label }) => (
                            <li key={to}>
                                <NavLink 
                                    to={to} 
                                    className={({ isActive }) => (isActive ? "active" : "")} 
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/contacto" element={<Contacto />} />
                    {/* Ruta con parámetros opcionales */}
                    <Route path="/users/:nombre?/:apellido?" element={<Users />} />
                    {/* Redirección */}
                    <Route path="/redirection" element={<Navigate to="/productos" />} />
                    {/* Rutas anidadas dentro de PanelControl */}
                    <Route path="/panelcontrol" element={<PanelControl />}>
                        <Route path="agregarproducto" element={<AgregarProducto />} />
                        <Route path="editarproducto" element={<EditarProducto />} />
                        <Route path="eliminarproducto" element={<EliminarProducto />} />
                    </Route>
                    {/* Página por defecto */}
                    <Route 
                        path="*" 
                        element={
                            <div>
                                <h1>Página en construcción</h1>
                                <NavLink to="/">Volver al inicio</NavLink>
                            </div>
                        } 
                    />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default AppRouter;