import './AccountDetailsUpdate.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { DataUpdateService } from '../../services/DataUpdate.service.js';

const AccountDetailsUpdate = ({ userData, onCancel, onConfirm }) => {
    const [firstName, setFirstName] = useState(userData?.name?.firstName || '');
    const [lastName, setLastName] = useState(userData?.name?.lastName || '');
    const [phoneNumber, setPhoneNumber] = useState(userData?.phoneNumber?.number || '');
    const [countryCode] = useState(userData?.phoneNumber?.countryCode || '51');
    const dataUpdateService = new DataUpdateService();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedUserData = {
                firstName,
                lastName,
                phoneNumber: {
                    countryCode,
                    number: phoneNumber
                }
            };
            const response = await dataUpdateService.updateUser(updatedUserData);

            if (response.ok) {
                const message = await response.text();
                console.log('Respuesta del servidor:', message);
                alert('Datos actualizados exitosamente');
                onConfirm(updatedUserData); // Pasar los datos actualizados al callback
            } else {
                throw new Error('Error actualizando los datos');
            }
        } catch (error) {
            console.error('Error actualizando los datos:', error);
            alert('Error actualizando los datos');
        }
    };

    return (
        <div className="account-details">
            <h2>Editar Detalles de la Cuenta</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Nombres"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Apellidos"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="tel"
                        placeholder="Teléfono"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="form-actions">
                    <button type="submit">Confirmar cambios</button>
                    <button type="button" onClick={onCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}

AccountDetailsUpdate.propTypes = {
    userData: PropTypes.shape({
        name: PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string
        }),
        phoneNumber: PropTypes.shape({
            countryCode: PropTypes.string,
            number: PropTypes.string // Cambiado a string
        }),
    }).isRequired,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

export default AccountDetailsUpdate;
