import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";
import useForm from '../../../hooks/useForm';
import "./CardContactStyle.css";

const CardContact = () => {
    const [values, handleInputChange, reset] = useForm({
        namecompleted: '',
        email: '',
        phone: '',
        message: ''
    })

    const { namecompleted, email, phone, message } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(namecompleted.length!==0 && email.length!==0 && phone.length!==0 && message.length!==0){
            toast('Mensaje enviado con éxito', {type: "success"});
            reset()
        }else{
            toast('Complete todos los campos', {type: "info"});
        }
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div className="card rounded-3">
                    <div className="card-body m-5">
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contáctanos</h2>
                        {/* <!-- Icon Divider--> */}
                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><FontAwesomeIcon icon={faEnvelopeSquare}></FontAwesomeIcon></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="validationCustom01"
                                className="form-label">
                                Nombres y Apellidos
                            </label>
                            <input
                                type="text"
                                name='namecompleted'
                                value={namecompleted}
                                onChange={handleInputChange}
                                autoComplete='off'
                                className="form-control"
                                placeholder='John Doe'
                                id="validationCustom01" />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                name='email'
                                value={email}
                                autoComplete='off'
                                onChange={handleInputChange}
                                id="exampleFormControlInput1"
                                placeholder="correo@example.com" />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="validationCustom01"
                                className="form-label">
                                Número de teléfono
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder='+51 923447890'
                                name='phone'
                                value={phone}
                                onChange={handleInputChange}
                                autoComplete='off'
                                id="validationCustom02" />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleFormControlTextarea1"
                                className="form-label">
                                Mensaje
                            </label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                name='message'
                                value={message}
                                onChange={handleInputChange}
                                placeholder='Escribenos tu mensaje...'
                                rows="3"></textarea>
                        </div>
                        <button
                            className="btn btn-xl rounded-3"
                            id="submitButton"
                            type="submit">
                            Enviar mensaje
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default CardContact;

