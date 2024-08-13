import { useEffect } from 'react';
import { gsap } from 'gsap';
import './ChangePasswordForm.css';

function ChangePasswordForm() {
    useEffect(() => {
        gsap.fromTo('.recover-form', 
            { opacity: 0, y: 50 }, 
            { duration: 1, opacity: 1, y: 0, ease: 'power3.out' }
        );

        gsap.fromTo('.logo-squidz', 
            { opacity: 0, scale: 0.5 }, 
            { duration: 1, opacity: 1, scale: 1, ease: 'power3.out', delay: 0.5 }
        );

        gsap.fromTo('.email-input', 
            { opacity: 0, x: -50 }, 
            { duration: 1, opacity: 1, x: 0, stagger: 0.2, ease: 'power3.out', delay: 1 }
        );

        gsap.fromTo('.buttom-submit__confirm', 
            { opacity: 0, y: 30 }, 
            { duration: 0, opacity: 1, y: 0, ease: 'power3.out', delay: 0.2 }
        );
    }, []);

    return (
        <>
            <form className="password-form">
                <img src="/logo/logo-squidz.svg" alt="" className="logo-squidz" />
                
                <div className='input-password-container'>
                    <h2>Ingrese su contraseña actual</h2>
                    <input type="password" className='password-input'  />
                </div>
                <div className='input-password-container'>
                    <h2>Ingrese su nueva contraseña</h2>
                    <input type="password" className='password-input' />
                </div>
                <div className='input-password-container'>
                    <h2>Repetir su contraseña</h2>
                    <input type="password" className='password-input'/>
                </div>
                <div className='button-confirm-container'>
                    <button className='buttom-submit__confirm' type='submit'>Actualizar</button>
                </div>
            </form>
        </>
    );
}

export default ChangePasswordForm;
