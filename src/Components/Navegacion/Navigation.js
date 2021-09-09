import logo from './LOGO.png';
import React from 'react';
import style from './style.css';

const Navigation = (props) => {
    return (
        <header className="nav">
            <div className="logo m-3">
                <a href="/">
                    <img src={logo}></img>
                </a>
            </div>
            <div className="mt-4 m-5">
                <ul className="d-flex">
                    <li className="item-link">
                        <a href="" className="links">Inicio</a>
                    </li>
                    <li className="item-link">
                        <a href="" className="links">Productos</a>
                    </li>
                    <li className="item-link">
                        <a href="" className="links">Sobre Nosotros</a>
                    </li>
                    <li className="item-link">
                        <a href="" className="links">Contacto</a>
                    </li>
                    <button className="btn btn-primary">Iniciar Sesión</button>
                </ul>
            </div>
        </header>
    );
}

export default Navigation;