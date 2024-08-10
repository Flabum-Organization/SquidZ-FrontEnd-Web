import './Sidebar.css';
import { useState } from 'react';
import { FaBars, FaHome, FaCalendarAlt, FaBox } from 'react-icons/fa';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-toggle" onClick={toggleSidebar}>
                <FaBars />
            </div>
            <ul>
                <li><a href="#"><FaHome /> Inicio</a></li>
                <li><a href="#"><FaCalendarAlt /> Reserva</a></li>
                <li><a href="#"><FaBox /> Productos</a></li>
            </ul>
        </aside>
    );
}

export default Sidebar;
