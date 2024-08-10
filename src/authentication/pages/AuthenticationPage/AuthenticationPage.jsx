import {SignIn} from "../../components/SignIn/SignIn.component.jsx";
import './AuthenticationPage.css'
import {SignUp} from "../../components/SignUp/SignUp.component.jsx";
import {gsap} from "gsap"
import {useEffect, useState} from "react";
import {CardAlert} from "../../../share/component/CardAlert/CardAlert.component.jsx";
import {AuthenticationService} from "../../services/Authentication.service.js";

const authenticationService = new AuthenticationService();

function AuthenticationPage() {

    const [moveImage, setMoveImage] = useState(false);
    const [type, setType] = useState('');
    const [message, setMessage] = useState('');
    const [details, setDetails] = useState('');

    const handleSignUpClick = () => {
        setMoveImage(true);
    };

    const handleSignInClick = () => {
        setMoveImage(false);
    };

    const moveCardAlert= async ()=>{

        await gsap.to(".card-alert", {
            right: 6,
            duration: 0.5,
            ease: "power3.inOut",
        })
        await gsap.to(".card-alert", {
            delay: 5,
            right: -1000,
            duration: 0.5,
            ease: "power3.inOut",
        })

    }

    const handleErroSignIn= async() =>{
        setType('warning');
        setMessage('Credenciales incorrectas')
        setDetails('Ingrese su correo y su contraseña correctamente')
        await moveCardAlert();
    }

    const handleSuccessSignIn= async() =>{
        try {
            const user = await authenticationService.getUser();
            if (user && user.name && user.name.firstName) {
                setType('success');
                setMessage(`Bienvenido ${user.name.firstName}`);
                setDetails('');


            } else {
                throw new Error("Invalid user structure");
            }
        } catch (error) {
            console.error("Error fetching user:", error);
            setType('error');
            setMessage("Error fetching user information");
            setDetails(error.message);
        }
        await moveCardAlert();
    }

    const handleErroSignUp= async() =>{
        setType('warning');
        setMessage('Datos Incorrectos')
        setDetails('Por favor revise que haya ingresado los datos correctamente')
        await moveCardAlert();
    }

    const handleSuccessSignUp= async() =>{
        setType('success');
        setMessage(`Registrado con éxito`);
        setDetails('');
        await moveCardAlert();
    }

    useEffect(() => {
            if (moveImage) {
                gsap.to(".background-authentication-image", {
                    left: "50%",
                    duration: 1,
                    ease: "power3.inOut",
                })
                gsap.to(".background-layer-authentication-image", {
                    left: "50%",
                    duration: 1,
                    ease: "power3.inOut",
                })
            } else {
                gsap.to(".background-authentication-image", {
                    left: 0,
                    right: undefined,
                    duration: 1,
                    ease: "power3.inOut",
                })
                gsap.to(".background-layer-authentication-image", {
                    left: 0,
                    right: undefined,
                    duration: 1,
                    ease: "power3.inOut",
                })
            }


    }, [moveImage]);


    return <div className="authentication-page">
        <CardAlert type={type} message={message} details={details===''?null:details}></CardAlert>
        <img src="/material/pexels-maksgelatin-4422102.jpg" alt="" className={`background-authentication-image`}/>
        <div className="background-layer-authentication-image"></div>
        <SignUp moveImage={moveImage} onSignInClick={handleSignInClick } errorSignUp={handleErroSignUp} successSignUp={handleSuccessSignUp}></SignUp>
        <SignIn moveImage={moveImage} onSignUpClick={handleSignUpClick} erroSignIn={handleErroSignIn} successSignIn={handleSuccessSignIn}></SignIn>
    </div>
}

export default AuthenticationPage;