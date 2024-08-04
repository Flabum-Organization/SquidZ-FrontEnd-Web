import {SignIn} from "../../components/SignIn/SignIn.component.jsx";
import './AuthenticationPage.css'
import {SignUp} from "../../components/SignUp/SignUp.component.jsx";


function AuthenticationPage() {
    return <div className="authentication-page">
        <SignUp></SignUp>
        <SignIn></SignIn>
    </div>
}

export default AuthenticationPage;