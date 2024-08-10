import './AccountDetails.css';
import { useState, useEffect } from 'react';
import { DataUpdateService } from '../../services/DataUpdate.service.js';
import AccountDetailsUpdate from '../AccountDetailsUpdate/AccountDetailsUpdate.jsx';

const AccountDetails = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const dataUpdateService = new DataUpdateService();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await dataUpdateService.getUser();
                setUserData(data);
            } catch (error) {
                console.error('Error al obtener los datos del usuario:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    const handleConfirmEdit = (updatedUserData) => {
        setUserData((prevData) => ({
            ...prevData,
            name: {
                firstName: updatedUserData.firstName,
                lastName: updatedUserData.lastName,
            },
            phoneNumber: {
                ...prevData.phoneNumber,
                number: updatedUserData.phoneNumber.number,
            }
        }));
        setIsEditing(false);
    };

    if (loading) {
        return <div>Cargando datos...</div>;
    }

    if (isEditing) {
        return (
            <AccountDetailsUpdate
                userData={{
                    ...userData,
                    phoneNumber: {
                        ...userData.phoneNumber,
                        number: String(userData.phoneNumber.number) // Convertir a string
                    }
                }}
                onCancel={handleCancelEdit}
                onConfirm={handleConfirmEdit}
            />
        );
    }

    return (
        <div className="account-details">
            <h2>Detalles de la Cuenta</h2>
            <div className="form-group">
                <input type="text" placeholder="Nombres" value={userData.name.firstName} disabled />
                <input type="text" placeholder="Apellidos" value={userData.name.lastName} disabled />
            </div>
            <div className="form-group">
                <input type="email" placeholder="Correo Electronico" value={userData.emailAddress.address} disabled />
            </div>
            <div className="form-group">
                <input type="tel" placeholder="Teléfono (+51)" value={userData.phoneNumber.number} disabled />
            </div>
            <button onClick={handleEditClick}>Actualizar Datos</button>
            <p><a href="#">¿Desea cambiar su contraseña?</a></p>
        </div>
    );
}

export default AccountDetails;
