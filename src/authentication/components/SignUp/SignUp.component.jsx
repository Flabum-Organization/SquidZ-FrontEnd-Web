import './SignUp.css'
import {useState} from "react";
import {AuthenticationService} from "../../services/Authentication.service.js";

const authenticationService = new AuthenticationService();

function SignUp() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    const SingInFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await authenticationService.signIn(email, password);
            console.log(response);
        }catch (error){
            setError(error.message);
        }finally {
            setLoading(false);
        }

    };

    return <div className="sign-up-container">
        <form className="sign-up-form" onSubmit={SingInFormSubmit}>
            <img src="../../../../public/logo/logo_squidz.png" alt="" className="logo-squidz"/>

            <div className="input-name-lastname-container">
                <div className="input-name-container">
                    <h2>Nombres</h2>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="input-lastname-container">
                    <h2>Apellidos</h2>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
            </div>

            <div className="input-email-container">
                <h2>Correo Electronico</h2>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="input-password-container">
                <h2>Contraseña</h2>
                <input type="password" placeholder="Contraseña" value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
            </div>


            <button type="submit" disabled={loading}>
                {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </button>
            <h3>¿Aún no tiene una cuenta en SquidZ? <a className="sign-up">Registrarse</a></h3>
            <a href="" className="password-forgotten">Olvidé mi contraseña</a>
        </form>
    </div>
}

export {SignUp};