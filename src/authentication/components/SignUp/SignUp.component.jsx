import './SignUp.css'
import {useState} from "react";
import {AuthenticationService} from "../../services/Authentication.service.js";
import {gsap} from "gsap";

const authenticationService = new AuthenticationService();

function SignUp({onSignInClick}) {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const SingUpFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await authenticationService.signUp(name, lastName, email, telephone,password, repeatPassword);
            console.log(response);
        }catch (error){
            console.log(error.message);
        }finally {
            setLoading(false);
        }

    };

    const handleSignInClick = (e) => {
        e.preventDefault();

        var timeline = gsap.timeline();

        timeline.to(".sign-up-form", {
            opacity: 0,
            duration: 0.2,
            ease: "power3.inOut",
            onComplete: onSignInClick
        }).to(".sign-up-form",{
            x: -9000
        }).to(".sign-in-form",{
            x: 0
        }).to(".sign-in-form", {
            opacity: 1,
            delay:0.8,
            duration: 0.2,
            ease: "power3.inOut",
        });

        gsap.to(".sign-up-form", {
            opacity: 0,
            duration: 0.2,
            ease: "power3.inOut",
            onComplete: onSignInClick
        });
        gsap.to(".sign-in-form", {
            opacity: 1,
            delay:0.8,
            duration: 0.2,
            ease: "power3.inOut",
        })
    };


    return <div className="sign-up-container">
        <form className="sign-up-form" onSubmit={SingUpFormSubmit}>
            <img src="../../../../public/logo/logo-squidz.svg" alt="" className="logo-squidz__sign-up"/>

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
                <input className="input-email__sign-up" type="email" value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="input-telephone-container">
                <h2>Teléfono</h2>
                <input className="input-telephone__sign-up" type="number" value={telephone}
                       onChange={(e) => setTelephone(e.target.value)}/>
            </div>


            <div className="input-password-container">
                <h2>Contraseña</h2>
                <input className="input-password__sign-up" type="password" value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div className="input-password-repeat-container">
                <h2>Repetir contraseña</h2>
                <input className="input-password__sign-up" type="password" value={repeatPassword}
                       onChange={(e) => setRepeatPassword(e.target.value)}/>
            </div>

            <div className="buttom-link-container__sign-up">
                <button className="buttom-submit__sign-in" type="submit" disabled={loading}>
                    {loading ? 'Registrando...' : 'Registrarse'}
                </button>
                <h5>¿Ya tiene una cuenta en SquidZ? <a className="sign-in-link" onClick={handleSignInClick}>Iniciar sesión</a></h5>
            </div>
        </form>
    </div>
}

export {
    SignUp
};