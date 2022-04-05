import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/firebaseConfig';
import { NavLink, useNavigate } from 'react-router-dom'

import portLogin from './portLogin.png';
import './style.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(`From Login: ${user}`)
                if(email==='pedro@admin.com' && password==='administrador'){
                    navigate('/UserProfile')
                }else{
                    navigate('/products')
                }
            })
            .catch((error) => {
                console.log(`ErrorCode: ${error.code}`);
                console.log(`errorMessage: ${error.message}`);
            });
    }

    return (
        <main className="principal">
            <section className="container-left mostrar-ocultar">
                <img src={portLogin} alt="Imagen de portada"></img>
            </section>
            <section className="container-height d-flex align-content-items">
                <div className="carta">
                    <h1>Iniciar Sesión</h1>
                    <form autoComplete="off" className='form-group' onSubmit={login}>
                        <div className="mb-3">
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            <label
                                htmlFor="in-email"
                                className="form-label espacio">
                                Correo
                            </label>
                            <input
                                type="email"
                                className='form-control'
                                required
                                placeholder="usuario@example.com"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                id="in-email"
                            />
                        </div>
                        <div className="mb-3">
                            <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                            <label
                                htmlFor="in-contrasenia"
                                className="form-label espacio">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                className='form-control'
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                id="in-contrasenia"
                            />
                        </div>
                        <div className="mb-5 form-check d-flex">
                            <div>
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Recuérdame</label>
                            </div>
                            <label className="form-check-label" htmlFor="exampleCheck2">¿Olvidaste tu contraseña?</label>
                        </div>
                        <button
                            type="submit"
                            className='btn btn-primary mt-5 btn-md mybtn btn-container'>
                            Ingresar
                        </button>
                        <div className="mt-3 text-center">
                            <label className="form-check-label" htmlFor="exampleCheck3">¿No tienes una cuenta?</label>
                            <NavLink to="/signup" className="py-3 px-0 px-lg-3" 
                            style={{color: 'blue'}}>Registrate</NavLink>
                        </div>
                    </form>
                    {error && <span className='error-msg'>{error}</span>}
                </div>
            </section>
        </main>
    )
}

export default Login;