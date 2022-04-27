import React from 'react'
import './statistics.style.scss'

const Statistics = ({ numeros, cadena }) => {    
    return (
        <section className="p-4 mb-2 bg text-white d-flex w-100">
            <div className="texto">
                Los números hablan por sí solos
            </div>
            <div className="d-flex numeros">
                <p>{ numeros[0] }+ <br/> { cadena[0] }</p>
                <p>{ numeros[1] }+ <br/> { cadena[1] }</p>
                <p>{ numeros[2] }+ <br/> { cadena[2] }</p>
            </div>
        </section>
    )
}

export default Statistics