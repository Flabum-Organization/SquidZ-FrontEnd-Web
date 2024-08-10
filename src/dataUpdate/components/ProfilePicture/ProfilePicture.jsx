import defaultProfile from '../../assets/images/default-profile.png';
import './ProfilePicture.css';

const ProfilePicture = () => {
    return (
        <div className="profile-picture">
            <h2 className="profile-picture__title">Foto de Perfil</h2>
            <div className="profile-picture__container">
                <img className="profile-picture__image" src={defaultProfile} alt="Foto de Perfil" />
            </div>
            <button className="profile-picture__button">Subir nueva imagen</button>
        </div>
    );
}

export default ProfilePicture;
