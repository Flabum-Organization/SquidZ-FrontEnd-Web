import AuthenticationPage from "./authentication/pages/AuthenticationPage/AuthenticationPage.jsx";
import './App.css'
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import {AuthenticationService} from "./authentication/services/Authentication.service.js";
import {useEffect} from "react";
import Application from "./share/pages/Application/application.jsx";
import RecoverAccountPage from "./authentication/pages/RecoverAccount/RecoverAccountPage.jsx";
import ChangePasswordPage from "./dataUpdate/pages/ChangePasswordPage/ChangePasswordPage.jsx";

function App() {

  return (
      <BrowserRouter>
          <AppRoutes />
      </BrowserRouter>
  )
}

function AppRoutes() {
    const navigate = useNavigate();
    const authService = new AuthenticationService();

    async function checkUser() {
        try {
            const user = await authService.getUser();
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                navigate("/app");
            } else {
                localStorage.removeItem('user');
                navigate("/authentication");
            }
        } catch (error) {
            console.error('Error al obtener el usuario:', error);
            localStorage.removeItem('user');
            navigate("/authentication");
        }
    }

    useEffect(() => {
        checkUser();
    }, [navigate]);

    return (
        <Routes>
            <Route path="/authentication" element={<AuthenticationPage/>} />
            <Route path="/recoverAccount" element={<RecoverAccountPage/>}/>
            <Route path="/changePassword" element={<ChangePasswordPage/>} />
            <Route path="/app" element={<Application/>} />
        </Routes>
    );
}

export default App