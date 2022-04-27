import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig';

const FormLogin = ({ openModal, setOpenModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(`From Login: ${user}`)
                if(email==='pedro@admin.com' && password==='administrador'){
                    navigate('/administrator')
                }else{
                    navigate('/catalog')
                }
            })
            .catch((error) => {
                console.log(`ErrorCode: ${error.code}`);
                console.log(`errorMessage: ${error.message}`);
            });
    }

    return (
        <form autoComplete="off" className={`form-group ${openModal && 'form_container'}`} onSubmit={login}>
            {openModal && <span onClick={() => setOpenModal(prev => !prev)}>x</span>}
            <div className="mb-3">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                <label
                    htmlFor="in-email"
                    className="form-label espacio">
                    Correo electrónico
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
                    placeholder='**********'
                    className='form-control'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    id="in-contrasenia"
                />
            </div>
            <div className="mb-5 form-check d-flex">
                <div>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
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
                    style={{ color: 'blue' }}>Registrate</NavLink>
            </div>
        </form>
    )
}

export default FormLogin