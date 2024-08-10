import { useState, useEffect } from 'react';
import Header from '../components/LayoutsComponents/Header.jsx';
import Sidebar from '../components/LayoutsComponents/Sidebar.jsx';
import ProfilePicture from '../components/ProfilePicture/ProfilePicture.jsx';
import AccountDetails from '../components/AccountDetails/AccountDetails.jsx';
import { DataUpdateService } from '../services/DataUpdate.service.js';
import './ProfilePage.css';

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dataUpdateService = new DataUpdateService();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await dataUpdateService.getUser();
                setUserData(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setError('Hubo un problema al cargar los datos del usuario.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div className="profile-page__loading">Cargando datos...</div>; // Indicador de carga
    }

    if (error) {
        return <div className="profile-page__error">{error}</div>; // Mensaje de error
    }

    return (

        <div className="profile-page">
                <Header />
                <Sidebar />
            <main className="profile-page__main">
                <section className="profile-page__profile">
                    <ProfilePicture />
                    <AccountDetails userData={userData} />
                </section>
            </main>
        </div>
    );
};

export default ProfilePage;
