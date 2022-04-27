import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { NavLink } from 'react-router-dom'
import { toast } from "react-toastify";

import { auth, db } from '../../../firebase/firebaseConfig';
import './style.css';

const Signup = (props) => {

    // defining state
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // signup
    const signup = async (e) => {
        e.preventDefault();
        if(name && lastname && phone && address && email && password){
            createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const newClient = {
                    name, 
                    lastname,
                    phone,
                    address,
                    email,
                    password,
                    state: true
                }
                await setDoc(doc(db, 'Clients', userCredential.user.uid), newClient)
                    .then(() => {
                        setEmail('');
                        setPassword('');
                        toast("Registrado con exito.", { type: "info" });
                        props.history.push('/login');
                    })
                    .catch(err => setError(err.message));
            })
            .catch((error) => {
                console.log(`ErrorCode: ${error.code}`);
                console.log(`errorMessage: ${error.message}`);
            })
        }else {
            toast("Ingrese todos los campos.", { type: "warning" });
        }
    }

    return (
        <>
            <form autoComplete="off" className='form-group' onSubmit={signup}>
                <div className="form-group mt-3">
                    <input
                        type="text"
                        className="form-control"
                        required
                        value={name}
                        placeholder="Nombre"
                        id="in-nombre"
                        onChange={(e) => setName(e.target.value)}
                        
                    />
                </div>
                <div className="form-group mt-3">
                    <input
                        type="text"
                        className="form-control"
                        required
                        value={lastname}
                        placeholder="Apellido"
                        id="in-apellido"
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </div>
                <div className="form-group mt-3">
                    <input
                        type="email"
                        className="form-control"
                        required
                        value={email}
                        placeholder="Email"
                        id="in-email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group mt-3">
                    <input
                        type="text"
                        className="form-control"
                        required
                        value={address}
                        placeholder="Dirección"
                        id="in-direccion" 
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="form-group mt-3">
                    <input
                        type="text"
                        className="form-control"
                        required
                        value={phone}
                        placeholder="Teléfono"
                        id="in-telefono" 
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="form-group mt-3">
                    <input
                        type="password"
                        className="form-control"
                        required
                        value={password}
                        placeholder="Contraseña"
                        id="in-contrasenia" 
                        onChange={(e) => setPassword(e.target.value)}  
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-5 btn-container">
                    Crear Cuenta
                </button>
            </form>
            {error && <span className='error-msg'>{error}</span>}
            <div className="text-center">
                ¿Ya tienes una cuenta? 
                <NavLink to="/login" className="py-3 px-0 px-lg-3 text-center" >Iniciar Sesión</NavLink>
            </div>
        </> 
    )
}

export default Signup;