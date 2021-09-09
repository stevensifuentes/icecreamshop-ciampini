import React from 'react';
import './style.css'

const Estadisticas = (props) => {    
    return (
        <section className="p-4 mb-2 bg text-white d-flex w-100">
            <div className="texto">
                Los números hablan por sí solos
            </div>
            <div className="d-flex numeros">
                <p>{props.numeros[0]}+ <br/> {props.cadena[0]}</p>
                <p>{props.numeros[1]}+ <br/> {props.cadena[1]}</p>
                <p>{props.numeros[2]}+ <br/> {props.cadena[2]}</p>
            </div>
        </section>
    );
}

export default Estadisticas;