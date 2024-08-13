import { useEffect } from 'react';
import { gsap } from 'gsap';
import './Recover.css';

export function Recover() {
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
            <form className="recover-form">
                <img src="/logo/logo-squidz.svg" alt="" className="logo-squidz" />
                <h2>Por favor, ingrese su correo electrónico registrado</h2>
                <div className='input-email-container'>
                    <input type="email" className='email-input' placeholder='Correo electrónico' />
                </div>
                <div className='button-confirm-container'>
                    <button className='buttom-submit__confirm' type='submit'>Enviar</button>
                </div>
            </form>
        </>
    );
}

export default Recover;
