import "./SignIn.css"
import {AuthenticationService} from "../../services/Authentication.service.js";
import {useState} from "react";

const authenticationService = new AuthenticationService();

function SignIn() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
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



    return <>
        <div className="sign-in-container">
            <form className="sign-in-form" onSubmit={SingInFormSubmit}>
                <img src="../../../../public/logo/logo_squidz.png" alt="" className="logo-squidz__sign-in"/>

                <div className="input-email-container__sign-in">
                    <h2>Correo Electronico</h2>
                    <input className="email-input__sign-in" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-password-container__sign-in">
                    <h2>Contraseña</h2>
                    <input className="password-input__sign-in" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="buttom-link-container__sign-in">
                    <button className="buttom-submit__sign-in" type="submit">
                        {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                    </button>
                    {error && <p className="error-message">{error}</p>}
                    <h5>¿Aún no tiene una cuenta en SquidZ? <a className="sign-up-link">Registrarse</a> </h5>
                    <a href="" className="password-forgotten">Olvidé mi contraseña</a>
                </div>
            </form>
        </div>
    </>
}

export { SignIn };