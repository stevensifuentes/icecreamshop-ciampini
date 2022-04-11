import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../Global/CartContext'

import LOGO_MARCA from './LOGO.png'
import shoppingCart from './icon_shopping_cart.svg'
import './navigation.scss'

const Navigation = () => {
    const { totalQty } = useContext(CartContext)

    return (
        <header className='contenedor'>
            <nav className="navbar navbar-expand-lg fixed-top nav">
                <a href="/" className="ml-logo">
                    <img src={LOGO_MARCA}
                         alt="Ice cream Ciampini"
                         style={{ width: '180px', padding: '10px' }} />
                </a>

                <button
                    className="navbar-toggler btn btn-info text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={ faBars }></FontAwesomeIcon>
                </button>

                <div className="collapse navbar-collapse text-info" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1">
                            <NavLink 
                                to="/" 
                                className="links">Inicio</NavLink>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <NavLink 
                                to="/catalog" 
                                className="links">Productos</NavLink>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <NavLink 
                                to="/about" 
                                className="links">Sobre Nosotros</NavLink>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <NavLink 
                                to="/contact" 
                                className="links">Contacto</NavLink>
                        </li>
                    </ul>
                </div>

                <NavLink to='/cartproducts' className="nav-link py-3 px-0 px-lg-3 rounded">
                    <img src={ shoppingCart } alt="shopping cart"/>
                    <span className='navlink_span'>{ totalQty }</span>
                </NavLink>

                <NavLink to="/login">
                    <button className="btn btn-info" id="login">
                        Iniciar Sesión
                    </button>
                </NavLink>
            </nav>
        </header>
    );
}

export default Navigation