import React from 'react'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import LOGO_MARCA from './LOGO.png'

const Navigation_ = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg  fixed-top nav" id="mainNav">
                <a
                    className="ml-logo"
                    href="/">
                    <img src={LOGO_MARCA}
                        alt="Marca de la heladería"
                        style={{ width: '180px', padding: '10px' }} />
                </a>
                <button
                    className="navbar-toggler font-weight-bold text-uppercase bg-info text-white rounded"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </button>
                <div className="collapse navbar-collapse ml text-info" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li 
                            className="nav-item mx-0 mx-lg-1">
                                <Link to="/" className="nav-link py-3 px-0 px-lg-3 rounded" href="#home">Inicio</Link>
                        </li>
                        <li 
                            className="nav-item mx-0 mx-lg-1">
                                <Link to="/catalog" className="nav-link py-3 px-0 px-lg-3 rounded" href="#products">Productos</Link>
                        </li>
                        <li 
                            className="nav-item mx-0 mx-lg-1">
                                <Link to="/about" className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">Sobre Nosotros</Link>
                        </li>
                        <li 
                            className="nav-item mx-0 mx-lg-1">
                                <Link to="/contact" className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contacto</Link>
                        </li>
                    </ul>
                    <Link to="/login">
                        <button
                            className="btn btn-info"
                            id="login"
                        >
                            Iniciar Sesión
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navigation_;