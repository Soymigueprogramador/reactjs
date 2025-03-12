import './router.css';
import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom";
import { pruebasContext } from '../../context/PruebasContext.js';
import { useState, useContext } from "react";
import Inicio from "../Inicio/Inicio.js";
import Productos from "../Productos/Productos.js";
import Contacto from "../Contacto/Contacto.js";
import Users from "../Users/Users.js";

const AppRouter = () => {
    // También podemos usar useState para trabajar con useContext.
    const [usuarios, setUsuarios] = useState({
        userName: '@MiguelSalazar',
        nombre: 'Miguel',
        apellido: 'Salazar'
    });
    
    const usuarioContext = useContext(pruebasContext);
    const [menuOpen, setMenuOpen] = useState(false);

    /*const curso = {
        id: 1,
        titulo: "Repasando react.js",
        descripcion: "Estoy repasando React.js porque todavía tengo cosas colgadas"
    };*/

    const navLinks = [
        { to: "/", label: "Inicio" },
        { to: "/productos", label: "Productos" },
        { to: "/contacto", label: "Contacto" },
        { to: "/panelcontrol", label: "Panel de Control" }
    ];

    // Si el usuario tiene un nombre de usuario, agregamos el enlace personalizado.
    if (usuarios.userName) {
        navLinks.push({ to: "/user", label: usuarioContext?.userName || usuarios.userName });
    }

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
                        {navLinks.map(({ to, label }) => (
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

            {/* Envolvemos las rutas con el Provider para que puedan acceder al contexto */}
            {/* value={curso} */}

            <pruebasContext.Provider value={usuarios}>  
                <main>
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/productos" element={<Productos />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/users/:nombre?/:apellido?" element={<Users />} />
                        <Route path="/redirection" element={<Navigate to="/productos" />} />
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
            </pruebasContext.Provider>
        </BrowserRouter>
    );
};

export default AppRouter;