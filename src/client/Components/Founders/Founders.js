import React from 'react'
import founderTwo from './founderTwo.png'

import './founders.style.scss'

const Founders = () => {    
    return (
        <section className="founders-section text-center">
            <div className="container">
                <h2 className="mb-5">Fundador</h2>
                <div className="row">
                    <div className="founder-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid size rounded-circle mb-3" src={ founderTwo } alt="FounderTwo" />
                        <h5>Stevens Sifuentes</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Founders;