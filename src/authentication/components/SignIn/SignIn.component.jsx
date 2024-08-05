import "./SignIn.css"
import {AuthenticationService} from "../../services/Authentication.service.js";
import {useState} from "react";
import { gsap } from "gsap";

const authenticationService = new AuthenticationService();

function SignIn({onSignUpClick}) {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SingInFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await authenticationService.signIn(email, password);
            console.log(response);
        }catch (error){
            console.log(error.message);
        }finally {
            setLoading(false);
        }

    };

    const handleSignUpClick = (e) => {
        e.preventDefault();

        var timeline = gsap.timeline();

        timeline.to(".sign-in-form", {
            opacity: 0,
            duration: 0.2,
            ease: "power3.inOut",
            onComplete: onSignUpClick
        }).to(".sign-in-form",{
            x: 9000,
            duration:0.2
        }).to(".sign-up-form",{
            delay:0.4,
            x: 0
        }).to(".sign-up-form", {
            opacity: 1,
            duration: 0.2,
            ease: "power3.inOut",
        });
    };

    return <>
        <div className="sign-in-container">
            <form className="sign-in-form" onSubmit={SingInFormSubmit}>
                <img src="../../../../public/logo/logo-squidz.svg" alt="" className="logo-squidz__sign-in"/>

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
                    <h5>¿Aún no tiene una cuenta en SquidZ? <a className="sign-up-link" onClick={handleSignUpClick}>Registrarse</a> </h5>
                    <a href="" className="password-forgotten">Olvidé mi contraseña</a>
                </div>
            </form>
        </div>
    </>
}

export { SignIn };