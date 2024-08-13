import ChangePasswordForm from "../../components/ChangePasswordForm/ChangePasswordForm";
import "./ChangePasswordPage.css";

function ChangePasswordPage() {
    return (
        <div className="change-password-container">
            <img src="/material/pexels-maksgelatin-4422102.jpg" alt="" className="background-password-image" />
            <div className="background-password-image-layer"></div>
            <div className="change-password-form-container">
                <ChangePasswordForm />
            </div>
        </div>
    );
}

export default ChangePasswordPage;
