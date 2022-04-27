import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';

import LOGO_MARCA from './LOGO.png';
import { ReactComponent as ShoppingCart } from './shoppingcart.svg'
import './navigation.scss';

const Navigation = () => {
    const { totalQty } = useContext(CartContext)

    return (
        <header>
            <nav className="navbar navbar-expand-lg nav">
                <Link to="/" className="ml-logo">
                    <img src={LOGO_MARCA}
                         alt="Ice cream Ciampini"
                         style={{ width: '150px', padding: '10px' }} />
                </Link>

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
                                className='links'>Inicio</NavLink>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <NavLink 
                                to="/catalog" 
                                className="links">Catálogo</NavLink>
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

                <div>
                    <Link to='/cartproducts' className="py-3 px-0 px-lg-3">
                        <ShoppingCart />
                        <span className='navlink_span'>{ totalQty }</span>
                    </Link>

                    <Link to="/login">
                        <button className="btnLogin rounded" id="login">
                            Iniciar Sesión
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;