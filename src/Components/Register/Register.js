import React from 'react';
import './style.css';
import portLogin from './portLogin.png';
import Signup from './Signup';

const Register = (props) => {
    return (
        <main className="principal">
            <section className="container-left mostrar-ocultar">
                <img src={portLogin} alt="Imagen de portada"></img>
            </section>
            <section className="container-height d-flex">
                <div className="carta">
                    <h1>Registrarse</h1>
                    <Signup />
                </div>
            </section>
        </main>
    );
}

export default Register;