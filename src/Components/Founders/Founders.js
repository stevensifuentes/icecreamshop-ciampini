import React from 'react'
import founderOne from './founderOne.png'
import founderTwo from './founderTwo.png'

import './founders.style.scss'

const Founders = () => {    
    return (
        <section className="founders-section text-center">
            <div className="container">
                <h2 className="mb-5">Fundadores</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="founder-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={ founderOne } alt="FounderOne" />
                            <h5>Stevens Sifuentes</h5>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="founder-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid size rounded-circle mb-3" src={ founderTwo } alt="FounderTwo" />
                            <h5>Danny Sanchez</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Founders