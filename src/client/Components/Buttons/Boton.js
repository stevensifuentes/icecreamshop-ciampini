import React from 'react';
import './style.css';

const Boton = (props) => {
    return (
        <div className="button-main">
            <button 
                type="button" 
                className="button-design">
                    {props.texto}
            </button>
        </div>
    );
}

export default Boton;