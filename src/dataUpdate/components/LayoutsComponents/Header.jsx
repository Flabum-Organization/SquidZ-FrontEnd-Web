import logo from '../../assets/images/logo.svg';
import userIcon from '../../assets/images/user-icon.png';
import cartIcon from '../../assets/images/cart-icon.png';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="Logo Squidz" className="logo" />
            </div>
            <div className="header-center">
                <h1>SQUIDZ</h1>
            </div>
            <div className="header-right">
                <img src={userIcon} alt="Icono de Usuario" className="icon" />
                <img src={cartIcon} alt="Icono de Carrito" className="icon" />
            </div>
        </header>
    );
}

export default Header;
