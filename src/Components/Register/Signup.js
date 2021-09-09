import React, { useState } from 'react'
import { auth, db } from '../../Config/Config';
import { Link } from 'react-router-dom'
import './style.css';
import { toast } from "react-toastify";

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
    const signup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((cred) => {
            db.collection('Clients').doc(cred.user.uid).set({
                Name: name,
                LastName: lastname,
                Phone: phone,
                Address: address,
                Email: email,
                Password: password
            }).then(() => {
                setEmail('');
                setPassword('');
                toast("Registrado con exito.", {
                    type: "info",
                  });
                props.history.push('/login');
            }).catch(err => setError(err.message));
        }).catch(err => setError(err.message));
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
                <Link to="/login" className="py-3 px-0 px-lg-3 text-center" href="#contact">Iniciar Sesión</Link>
            </div>
        </> 
    )
}

export default Signup;