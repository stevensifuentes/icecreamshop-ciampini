import React, { useState } from 'react';
import FormLogin from './FormLogin';
import portLogin from './portLogin.png';
import './style.css';

const Login = () => {
    const [error, setError] = useState('');

    return (
        <main className="principal">
            <section className="container-left mostrar-ocultar">
                <img src={portLogin} alt="Imagen de portada"></img>
            </section>
            <section className="container-height d-flex align-content-items">
                <div className="carta">
                    <h1>Iniciar Sesión</h1>
                    <FormLogin />
                    {error && <span className='error-msg'>{error}</span>}
                </div>
            </section>
        </main>
    )
}

export default Login;