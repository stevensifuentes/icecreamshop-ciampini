import React from 'react';
import T1 from './Tienda1.jpg'
import T2 from './Tienda2.png'
import T3 from './Tienda3.jpg'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const items = [
    {
        tile: 'Los Postes',
        subtitle: 'Tienda 1',
        text1: 'HORARIOS',
        text2: 'Lunes cerrado',
        text3: 'Martes a Jueves de 15 a 00 hs',
        text4: 'Viernes y Sábados de 13 a 01 hs',
        text5: 'Domingos de 11 a 23 hs',
        src: T1,

    },
    {
        tile: 'Av. Canto Grande',
        subtitle: 'Tienda 2',
        text1: 'HORARIOS',
        text2: 'Lunes cerrado',
        text3: 'Martes a Jueves de 15 a 00 hs',
        text4: 'Viernes y Sábados de 13 a 01 hs',
        text5: 'Domingos de 11 a 23 hs',
        src: T2,

    },
    {
        tile: 'Av. Las Flores',
        subtitle: 'Tienda 3',
        text1: 'HORARIOS',
        text2: 'Lunes cerrado',
        text3: 'Martes a Jueves de 15 a 00 hs',
        text4: 'Viernes y Sábados de 13 a 01 hs',
        text5: 'Domingos de 11 a 23 hs',
        src: T3,

    }

];

const Tiendas = (props) => {

    const Items = items.map((item) => {
        return (
            <Card>
                <CardImg top width="100%" src={item.src} alt="Card image cap" height="250px" />
                <div className="bg-info text-white p-3">
                        <CardTitle tag="h5" className="text-center">{item.tile}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2  text-center">{item.subtitle}</CardSubtitle>
                    </div>
                <CardBody>
                    <CardText className="text-center">{item.text1} <br/> {item.text2}  <br/> {item.text3}  <br/> {item.text4}  <br/> {item.text5} </CardText>
                </CardBody>
            </Card>
        );
    });

    return (
        <div className="container mt-5 mb-5">
            <h2 className="page-section-heading text-center text-uppercase mb-0 title">Nuestras Tiendas</h2>
                <h4 className="text-center">Te esperamos</h4>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-solid fa-store"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
            <div className="row">
                <div className="col">
                    {Items[0]}
                </div>
                <div className="col">
                    {Items[1]}
                </div>
                <div className="col">
                    {Items[2]}
                </div>
            </div>
        </div>
    );
};

export default Tiendas;