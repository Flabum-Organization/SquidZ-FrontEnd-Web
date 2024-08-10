import AuthenticationPage from "./authentication/pages/AuthenticationPage/AuthenticationPage.jsx";
import './App.css'
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import ProfilePage from "./dataUpdate/pages/ProfilePage.jsx";
import {AuthenticationService} from "./authentication/services/Authentication.service.js";
import {useEffect} from "react";

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
                console.log("se ejecuto");
                navigate("/user-management");
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
            <Route path="/user-management" element={<ProfilePage/>} />
        </Routes>
    );
}

export default App