import React, { useEffect, useState } from "react";
import { storage, db } from '../../../firebase/firebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import './TableStyle.css'

import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
} from "reactstrap";

import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";

const TableProducts = () => {

    const initialStateValues = {
        nombre: '',
        precio: 0,
        cantidad: 0, 
        estado: true
    };

    const [datos, setDatos] = useState([]);
    const [dataProducto, setDataProducto] = useState(initialStateValues);
    const [modalActualizar, setModalActualizar] = useState(false);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [imagen, setImagen] = useState(null);
    const [error, setError] = useState('');
    const [currentId, setCurrentId] = useState('');

    const types = ['image/png', 'image/jpeg']; // image types

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDataProducto({ ...dataProducto, [name]: value });
    }

    const mostrarModalActualizar = (dato) => {
        setCurrentId(dato.id);
        setDataProducto({ 
            nombre: dato.Nombre,
            precio: dato.Precio,
            cantidad: dato.Cantidad
        });
        setModalActualizar(true);
    };

    const cerrarModalActualizar = () => {
        setModalActualizar(false);
    };

    const mostrarModalInsertar = () => {
        setModalInsertar(true);
    };

    const cerrarModalInsertar = () => {
        setModalInsertar(false);
    };

    const obtenerRegistros = async () => {
        onSnapshot(collection(db, 'Products'), (snapshot) => {
            const arrayData = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            const filteredArrayData = arrayData.filter(doc => doc.Estado===true)
            setDatos(filteredArrayData)
        }, (error) => console.log(error))
    }

    useEffect(() => {
        obtenerRegistros();
    }, []);

    const editar = async (dato) => {
        const dataActualizar = {
            Nombre: dato.nombre,
            Precio: dato.precio,
            Cantidad: dato.cantidad
        }

        try {
            await updateDoc(doc(db, "Products", currentId), dataActualizar)
            toast("Producto actualizado con éxito!", {type: "info"});
            setModalActualizar(false);
        } catch (error) {
            console.log('Hubo un error al intentar actualizar al cliente')
            console.log(error)
        }
    };

    const eliminar = async (dato) => {
        if (window.confirm(`¿Estás Seguro que deseas eliminar el producto? ${dato.Nombre}`)) {
            await updateDoc(doc(db, "Products", dato.id), {Estado: false})
            toast(`Se eliminó el producto ${dato.Nombre} con éxito.`, {
                type: "error",
                autoClose: 2000
            });
        }
    };

    const insertar = (e) => {
        const uploadTask = storage.ref(`product-images/${imagen.name}`).put(imagen);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        }, err => setError(err.message)
            , () => {
                storage.ref('product-images').child(imagen.name).getDownloadURL().then(url => {
                    db.collection('Products').add({
                        Nombre: dataProducto.nombre,
                        Precio: Number(dataProducto.precio),
                        Cantidad: Number(dataProducto.cantidad),
                        Imagen: url, 
                        Estado: true
                    }).then(() => {
                        setDataProducto({ ...initialStateValues });
                        setImagen('');
                        document.getElementById('file').value = '';
                        setModalInsertar(false);
                        setError('');
                        toast("Producto añadido con éxito.", {
                            type: "info",
                          });
                    }).catch(err => setError(err.message))
                })
            })
    }

    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setImagen(selectedFile);
            setError('')
        }
        else {
            setImagen(null);
            setError('Please select a valid image type (jpg or png)');
        }
    }

    return (
        <div>
            <div className="titulo">
                <h1>Tabla de productos</h1>
            </div>
            <Container>
                <br />
                <Button
                    color="primary"
                    onClick={() => mostrarModalInsertar()}>
                    Añadir producto
                </Button>
                <br />
                <br />
                <Table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {datos.map((dato) => (
                            <tr key={dato.id}>
                                <td>{dato.Nombre}</td>
                                <td>{dato.Precio}</td>
                                <td>{dato.Cantidad}</td>
                                <td>
                                    <Button
                                        color="primary"
                                        onClick={() => mostrarModalActualizar(dato)}
                                    >
                                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                    </Button>{" "}
                                    <Button color="danger" onClick={() => eliminar(dato)}>
                                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>

            <Modal isOpen={modalActualizar}>
                <ModalHeader>
                    <div><h3 className="text-center">Editar Registro</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>
                            Nombre:
                        </label>
                        <input
                            className="form-control"
                            name="nombre"
                            type="text"
                            onChange={handleInputChange}
                            value={dataProducto.nombre}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Precio:
                        </label>
                        <input
                            className="form-control"
                            name="precio"
                            type="number"
                            onChange={handleInputChange}
                            value={dataProducto.precio}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>
                            Cantidad:
                        </label>
                        <input
                            className="form-control"
                            name="cantidad"
                            type="number"
                            onChange={handleInputChange}
                            value={dataProducto.cantidad}
                        />
                    </FormGroup>

                </ModalBody>

                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={() => editar(dataProducto)}
                    >
                        Editar
                    </Button>
                    <Button
                        color="danger"
                        onClick={() => cerrarModalActualizar()}
                    >
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalInsertar}>
                <ModalHeader>
                    <div><h3 className="text-center">Añadir</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>
                            Id:
                        </label>

                        <input
                            className="form-control"
                            readOnly
                            type="text"
                            value={datos.length + 1}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="nombre">
                            Nombre:
                        </label>
                        <input
                            className="form-control"
                            name="nombre"
                            type="text"
                            required
                            onChange={handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="precio">
                            Precio:
                        </label>
                        <input
                            className="form-control"
                            name="precio"
                            type="number"
                            required
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>
                            Cantidad:
                        </label>
                        <input
                            className="form-control"
                            name="cantidad"
                            type="number"
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label
                            htmlFor="foto"
                        >
                            Imagen del producto
                        </label>

                        <input
                            className="form-control"
                            name="foto"
                            type="file"
                            id="file"
                            required
                            onChange={productImgHandler}
                        />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={() => insertar()}
                    >
                        Insertar
                    </Button>
                    <Button
                        className="btn btn-danger"
                        onClick={() => cerrarModalInsertar()}
                    >
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
export default TableProducts;