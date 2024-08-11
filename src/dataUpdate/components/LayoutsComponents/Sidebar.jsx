import './Sidebar.css';
import { useState } from 'react';
import { FaBars, FaHome, FaCalendarAlt, FaBox, FaSignOutAlt } from 'react-icons/fa';
import { SignOutService } from '../../../share/service/SignOut.service.js'; // Importa el servicio

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleLogout = async () => {
        try {
            const signOutService = new SignOutService();
            await signOutService.signOut();

            alert("Sesión cerrada con éxito");
            window.location.reload();
        } catch (error) {
            alert("Error al cerrar sesión. Por favor, inténtelo de nuevo.");
        }
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
