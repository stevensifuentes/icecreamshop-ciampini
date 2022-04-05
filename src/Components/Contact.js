import React from 'react';
import CardContact from './CardContact/CardContact';
import Map from './Maps/Map'

const Contact = () => {
    return (
        <div style={{
            marginTop: '100px'
        }}>
            <CardContact/>
            <Map/>
        </div>
    );
}

export default Contact;