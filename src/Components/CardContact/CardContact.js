import React from 'react';
import "./style.css";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';

const CardContact = () => {
    return (
        <section className="mt-5 mb-5">
            <div className="card rounded-3">
                <div className="card-body m-5">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contactanos</h2>
                    {/* <!-- Icon Divider--> */}
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><FontAwesomeIcon icon={faEnvelopeSquare}></FontAwesomeIcon></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationCustom01" className="form-label">Nombres y Apellidos</label>
                        <input type="text" className="form-control" id="validationCustom01" />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Correo </label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationCustom01" className="form-label">Número de teléfono</label>
                        <input type="text" className="form-control" id="validationCustom02" />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button className="btn btn-primary btn-xl" id="submitButton" type="submit">ENVIAR</button>
                </div>
            </div>
        </section>
    );
}

export default CardContact;

