import './Sidebar.css';
import { useState } from 'react';
import { FaBars, FaHome, FaCalendarAlt, FaBox, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleLogout = () => {
        // Aquí puedes manejar el cierre de sesión
        alert("Cerrando sesión...");
    };

    return (
        <>
            <div className="sidebar__toggle" onClick={toggleSidebar}>
                <FaBars />
            </div>
            <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                <ul className="sidebar__menu">
                    <li className="sidebar__menu-item"><a href="#" className="sidebar__menu-link"><FaHome /> Inicio</a></li>
                    <li className="sidebar__menu-item"><a href="#" className="sidebar__menu-link"><FaCalendarAlt /> Reserva</a></li>
                    <li className="sidebar__menu-item"><a href="#" className="sidebar__menu-link"><FaBox /> Productos</a></li>
                </ul>
                <div className="sidebar__logout" onClick={handleLogout}>
                    <FaSignOutAlt />
                    <span>Cerrar Sesión</span>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
