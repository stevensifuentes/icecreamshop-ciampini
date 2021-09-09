import React from 'react';
import logo from './Logo.png';
import './style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationArrow, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <img src={logo} alt="Logo inicial"></img>
                        </div>
                        {/* <!-- Footer Social Icons--> */}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Nuestras Redes</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a>
                        </div>
                        
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            {/* <h4 className="text-uppercase mb-4">Location</h4> */}
                            <p className="lead mb-3"><FontAwesomeIcon icon={faLocationArrow}/>Av. Los Postes - SJL</p>
                            <p className="lead mb-3"><FontAwesomeIcon icon={faPhone}/>+51 921 134 500</p>
                            <p className="lead mb-3"><FontAwesomeIcon icon={faEnvelope}/>ciampini@heladería.com</p>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- Copyright Section--> */}
            <div className="copyright py-4 text-center text-white">
                <div className="container"><small>Copyright &copy; Hecho con ❤ en Perú por Stevens Sifuentes y Danny Sanchez</small></div>
            </div>
        </div>
    );
}

export default Footer;