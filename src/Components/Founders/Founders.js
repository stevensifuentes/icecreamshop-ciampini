import React from 'react';
import './style.css'
import avatar from './avatar.png';
import avatar5 from './avatar5.png';

const Founders = () => {    
    return (
        <section className="founders text-center bg-light">
            <div className="container">
                <h2 className="mb-5">Fundadores</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="founder-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={avatar5} alt="Fundador 1" />
                            <h5>Stevens Sifuentes</h5>
                            {/* <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="founder-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid size rounded-circle mb-3" src={avatar} alt="Fundador 2" />
                            <h5>Danny Sanchez</h5>
                            {/* <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Founders;