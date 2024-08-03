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
                <img src="" alt="" className="logo-squidz"/>

                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit" disabled={loading}>
                    {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                </button>
                {error && <p className="error-message">{error}</p>}
                <h3>¿Aún no tiene una cuenta en SquidZ? <a className="sign-up">Registrarse</a> </h3>
                <a href="" className="password-forgotten">Olvidé mi contraseña</a>
            </form>
        </div>
    </>
}

export { SignIn };