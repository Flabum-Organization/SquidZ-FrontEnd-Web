import logo from '../../assets/images/logo.svg';
import userIcon from '../../assets/images/user-icon.png';
import cartIcon from '../../assets/images/cart-icon.png';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__left">
                <img src={logo} alt="Logo Squidz" className="header__logo" />
            </div>
            <div className="header__center">
                <h1>SQUIDZ</h1>
            </div>
            <div className="header__right">
                <img src={userIcon} alt="Icono de Usuario" className="header__icon" />
                <img src={cartIcon} alt="Icono de Carrito" className="header__icon" />
            </div>
        </header>
    );
}

export default Header;
