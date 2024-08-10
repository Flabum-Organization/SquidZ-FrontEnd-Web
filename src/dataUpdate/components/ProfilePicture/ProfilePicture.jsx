
import defaultProfile from '../../assets/images/default-profile.png';
import './ProfilePicture.css';

const ProfilePicture = () => {
    return (
        <div className="profile-picture">
            <h2>Foto de Perfil</h2>
            <div className="picture-container">
                <img src={defaultProfile} alt="Foto de Perfil" />
            </div>
            <button>Subir nueva imagen</button>
        </div>
    );
}

export default ProfilePicture;
