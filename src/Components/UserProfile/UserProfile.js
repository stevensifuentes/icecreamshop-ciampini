import React, { useEffect } from "react";
import ADMIN from './Admin.jpg'
import { db } from '../../Config/Config'

import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col,
} from "react-bootstrap";

let info = {
    nombre: '',
    apellido: 0,
    telefono: 0, 
    direccion: true,
    correo: ''
};

const UserProfile = () => {
    
    const obtenerRegistros = async () => {
        db.collection('Clients').onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let correo = doc.data().Email
                let correito = correo.split("@");     
                if(correito[1] === "admin.com"){
                    info = {
                        nombre: doc.data().Name,
                        apellido: doc.data().LastName,
                        telefono: doc.data().Phone, 
                        direccion: doc.data().Address,
                        correo: doc.data().Email
                    };
                }
            });
        });
    }

    useEffect(() => {
        obtenerRegistros();
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
                                                    defaultValue="Heladeria Ciampini"
                                                    disabled
                                                    placeholder="Company"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="px-1" md="3">
                                            <Form.Group>
                                                <label>Nombre de usuario</label>
                                                <Form.Control
                                                    defaultValue={info.nombre}
                                                    disabled
                                                    placeholder="Nombre de usuario"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <Form.Group>
                                                <label htmlFor="exampleInputEmail1">
                                                    Email
                                                </label>
                                                <Form.Control
                                                    placeholder="Email"
                                                    disabled
                                                    type="email"
                                                    defaultValue={info.correo}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Nombre</label>
                                                <Form.Control
                                                    defaultValue={info.nombre}
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
                                                    defaultValue={info.apellido}
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
                                                    defaultValue={info.direccion}
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
                        <Card className="card-user">
                            <div className="card-image">
                                <img
                    alt="Foto de perfil"
                    src={ADMIN}
                  ></img>
                            </div>
                            <Card.Body>
                                <div className="author text-center">
                                    <a href="#" onClick={(e) => e.preventDefault()}>
                                        <h5 className="title">{info.nombre +" "+info.apellido}</h5>
                                    </a>
                                    <p className="description">Administrador</p>
                                </div>
                            </Card.Body>
                            <hr></hr>
                            <div className="button-container mr-auto ml-auto">
                                <Button
                                    className="btn-simple btn-icon"
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    variant="link"
                                >
                                    <i className="fab fa-facebook-square"></i>
                                </Button>
                                <Button
                                    className="btn-simple btn-icon"
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    variant="link"
                                >
                                    <i className="fab fa-twitter"></i>
                                </Button>
                                <Button
                                    className="btn-simple btn-icon"
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    variant="link"
                                >
                                    <i className="fab fa-google-plus-square"></i>
                                </Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default UserProfile;