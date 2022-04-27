import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../../firebase/firebaseConfig';
import { Icon } from 'react-icons-kit';
import { ic_facebook } from 'react-icons-kit/md/ic_facebook';
import { twitter } from 'react-icons-kit/fa/twitter';
import { ic_email } from 'react-icons-kit/md/ic_email';

import adminPhoto from './Admin.jpg';

import {
    Card,
    Form,
    Container,
    Row,
    Col,
} from "react-bootstrap";

const Profile = () => {
    const [info, setInfo] = useState({})

    const getAdmin = () => {
        onSnapshot(collection(db, 'Clients'), (snapshot) => {
            const admin = snapshot.docs.filter(doc => (doc.data().Email).split('@')[1] === 'admin.com')[0].data()
            setInfo({
                name: admin.Name,
                lastname: admin.LastName,
                phone: admin.Phone,
                address: admin.Address,
                email: admin.Email
            });
        }, (error) => console.log(error))
    }

    useEffect(() => {
        getAdmin();
    }, []);

    return (
        <div className="mt-5">
            <Container fluid>
                <Row>
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Perfil de Administrador</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="5">
                                            <Form.Group>
                                                <label>Compañia/Empresa</label>
                                                <Form.Control
                                                    defaultValue="Ciampini Ice Cream"
                                                    disabled
                                                    placeholder="Company"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="px-1" md="3">
                                            <Form.Group>
                                                <label>Nombre del Administrador</label>
                                                <Form.Control
                                                    defaultValue={info.name}
                                                    disabled
                                                    placeholder="Nombre del Administrador"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <Form.Group>
                                                <label htmlFor="exampleInputEmail1">
                                                    Correo Electrónico
                                                </label>
                                                <Form.Control
                                                    placeholder="Correo Electrónico"
                                                    disabled
                                                    type="email"
                                                    defaultValue={info.email}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Nombre</label>
                                                <Form.Control
                                                    defaultValue={info.name}
                                                    disabled
                                                    placeholder="Nombre"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Apellido</label>
                                                <Form.Control
                                                    defaultValue={info.lastname}
                                                    disabled
                                                    placeholder="Apellido"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <Form.Group>
                                                <label>Dirección</label>
                                                <Form.Control
                                                    defaultValue={info.address}
                                                    disabled
                                                    placeholder="Dirección"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md="12">
                                            <Form.Group>
                                                <label>Sobre Mi</label>
                                                <Form.Control
                                                    cols="80"
                                                    defaultValue="Soy el administrador de este sitio web que se dedica a la venta de helados y nos llamos Heladerí Ciampini."
                                                    placeholder="Descripción"
                                                    disabled
                                                    rows="4"
                                                    as="textarea"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <div className="clearfix"></div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card className="card-user rounded-3">
                            <div className="card-image">
                                <img alt="Foto de perfil" src={adminPhoto} />
                            </div>
                            <Card.Body>
                                <div className="author text-center">
                                    <h5 className="title">{`${info.name} ${info.lastname}`}</h5>
                                    <p className="description">Administrador</p>
                                </div>
                            </Card.Body>
                            <hr></hr>
                            <div className="mb-3 mr-auto ml-auto">
                                <Icon icon={ ic_facebook } />
                                <Icon icon={ twitter } />
                                <Icon icon={ ic_email } />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Profile;