import { NavLink, Outlet } from "react-router-dom";

const PanelControl = () => {
  return (
    <>
      <h1>Panel de Control</h1>
      <h2>Elige una opción</h2>

      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="agregarproducto" end>Agregar productos</NavLink>
            </li>
            <li>
              <NavLink to="editarproducto" end>Editar productos</NavLink>
            </li>
            <li>
              <NavLink to="eliminarproducto" end>Eliminar productos</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Renderiza el contenido de la subruta seleccionada */}
      <Outlet />
    </>
  );
};

export default PanelControl;