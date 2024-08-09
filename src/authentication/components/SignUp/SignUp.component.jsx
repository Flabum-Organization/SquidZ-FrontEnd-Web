import './SignUp.css'
import {useState} from "react";
import {AuthenticationService} from "../../services/Authentication.service.js";
import {gsap} from "gsap";

const authenticationService = new AuthenticationService();

function SignUp({onSignInClick, errorSignUp, successSignUp, moveImage}) {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');


    const [nameValid, setNameValid] = useState(true);
    const [lastNameValid, setLastNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [telephoneValid, setTelephoneValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [repeatPasswordValid, setRepeatPasswordValid] = useState(true);

    const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validatePassword = (password) => {
        const minLength = /.{8,}/;
        const hasNumber = /[0-9]/;
        const hasSpecialChar = /[!@#$%^&*]/;
        return minLength.test(password) && hasNumber.test(password) && hasSpecialChar.test(password);
    };

    const validateTelephone = (telephone) => {
        return /^\d{9}$/.test(telephone);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameValid(validateName(e.target.value));
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        setLastNameValid(validateName(e.target.value));
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailValid(validateEmail(e.target.value));
    };

    const handleTelephoneChange = (e) => {
        setTelephone(e.target.value);
        setTelephoneValid(validateTelephone(e.target.value));
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordValid(validatePassword(e.target.value));
    };

    const handleRepeatPasswordChange = (e) => {
        setRepeatPassword(e.target.value);
        setRepeatPasswordValid(e.target.value === password);
    };


    const SingUpFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!validateName(name) || !validateName(lastName) || !validateEmail(email) || !validateTelephone(telephone) || !validatePassword(password) || password !== repeatPassword) {
            setLoading(false);
            errorSignUp()
            return;
        }

        try {
            await authenticationService.signUp(name, lastName, email, telephone,password, repeatPassword);
            successSignUp()
            handleSignInClick(e)
        }catch (error){
            errorSignUp()
        }finally {
            setLoading(false);
        }

    };

    const handleSignInClick = (e) => {
        e.preventDefault();

        var timeline = gsap.timeline();
        if(window.innerWidth > 1000) {
            timeline.to(".sign-up-form", {
                opacity: 0,
                duration: 0.2,
                ease: "power3.inOut",
                onComplete: onSignInClick
            }).to(".sign-up-form", {
                x: -9000

            }).to(".sign-in-form", {
                opacity: 1,
                x: 0,
                duration: 0.2,
                ease: "power3.inOut",
            });

            // gsap.to(".sign-up-form", {
            //     opacity: 0,
            //     duration: 0.2,
            //     ease: "power3.inOut",
            //     onComplete: onSignInClick
            // });
            // gsap.to(".sign-in-form", {
            //     opacity: 1,
            //     delay: 0.8,
            //     duration: 0.2,
            //     ease: "power3.inOut",
            // })
        }else {
            timeline.to(".sign-up-form", {
                opacity: 0,
                duration: 0.2,
                ease: "power3.inOut",
                onComplete: onSignInClick
            }).to(".sign-up-form", {
                left: "-50%"
            }).to(".sign-in-form", {
                opacity: 1,
                left: "50%"
            }).to(".sign-in-form", {
                opacity: 1,
                duration: 0.2,
                ease: "power3.inOut",
            });
        }
    };


    return <div className="sign-up-container">
        <form className={`sign-up-form ${moveImage ? 'sign-up-form-moveImage-true' : 'sign-up-form-moveImage-false'}`} onSubmit={SingUpFormSubmit}>
            <img src="/logo/squidzzz%201.svg" alt="" className="logo-squidz__sign-up"/>

            <div className="input-name-lastname-container">
                <div className="input-name-container">
                    <h2>Nombres</h2>
                    <input className={nameValid ? "" : "invalid"} type="text" value={name} onChange={handleNameChange}/>
                    <p className={nameValid ? "hide-valid-message" : "valid-message"}>Sus nombres no deben tener números ni caracteres especiales</p>
                </div>
                <div className="input-lastname-container">
                    <h2>Apellidos</h2>
                    <input className={lastNameValid ? "" : "invalid"} type="text" value={lastName}
                           onChange={handleLastNameChange}/>
                    <p className={lastNameValid ? "hide-valid-message" : "valid-message"}>Sus apellidos no deben tener números ni
                        caracteres especiales</p>
                </div>
            </div>

            <div className="input-email-container">
                <h2>Correo Electrónico</h2>
                <input className={`input-email__sign-up ${emailValid ? "" : "invalid"}`} type="email" value={email}
                       onChange={handleEmailChange}/>
                <p className={emailValid ? "hide-valid-message" : "valid-message"}>Por favor ingrese su correo electrónico correctamente</p>
            </div>

            <div className="input-telephone-container">
                <h2>Teléfono</h2>
                <input className={`input-telephone__sign-up ${telephoneValid ? "" : "invalid"}`} type="number"
                       value={telephone}
                       onChange={handleTelephoneChange}/>
                <p className={telephoneValid ? "hide-valid-message" : "valid-message"}>Su número de telefono debe tener 9 dígitos</p>
            </div>


            <div className="input-password-container">
                <h2>Contraseña</h2>
                <input className={`input-password__sign-up ${passwordValid ? "" : "invalid"}`} type="password"
                       value={password}
                       onChange={handlePasswordChange}/>
                <p className={passwordValid ? "hide-valid-message" : "valid-message"}>Su contraseña debe tener como mínimo 8 dígitos, al menos 1 número y al menos 1 caracter especial</p>
            </div>

            <div className="input-password-repeat-container">
                <h2>Repetir contraseña</h2>
                <input className={`input-password__sign-up ${repeatPasswordValid ? "" : "invalid"}`} type="password"
                       value={repeatPassword}
                       onChange={handleRepeatPasswordChange}/>
                <p className={repeatPasswordValid ? "hide-valid-message" : "valid-message"}>Las contraseñas deben ser iguales</p>
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

export {SignUp};