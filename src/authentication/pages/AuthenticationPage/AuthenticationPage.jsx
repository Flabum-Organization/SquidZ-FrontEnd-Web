import {SignIn} from "../../components/SignIn/SignIn.component.jsx";
import './AuthenticationPage.css'
import {SignUp} from "../../components/SignUp/SignUp.component.jsx";
import {gsap} from "gsap"
import {useEffect, useState} from "react";


function AuthenticationPage() {

    const [moveImage, setMoveImage] = useState(false);

    const handleSignUpClick = () => {
        setMoveImage(true);
    };

    const handleSignInClick = () => {
        setMoveImage(false);
    };


    useEffect(() => {
        if (moveImage){
            gsap.to(".background-authentication-image", {
                //x: 1055,
                left:"50%",
                duration: 1,
                ease: "power3.inOut",
            })
            gsap.to(".background-layer-authentication-image", {
                //x: 1055,
                left:"50%",
                duration: 1,
                ease: "power3.inOut",
            })
        }else {
            gsap.to(".background-authentication-image", {
                //x: 0,
                left:0,
                right: undefined,
                duration: 1,
                ease: "power3.inOut",
            })
            gsap.to(".background-layer-authentication-image", {
                //x: 0,
                left:0,
                right: undefined,
                duration: 1,
                ease: "power3.inOut",
            })
        }
    }, [moveImage]);


    return <div className="authentication-page">
        <img src="../../../../public/material/pexels-maksgelatin-4422102.jpg" alt="" className="background-authentication-image"/>
        <div className="background-layer-authentication-image"></div>
        <SignUp onSignInClick={handleSignInClick}></SignUp>
        <SignIn onSignUpClick={handleSignUpClick}></SignIn>
    </div>
}

export default AuthenticationPage;