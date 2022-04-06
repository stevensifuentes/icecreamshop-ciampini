import React, { useEffect, useState } from "react";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from '../../../firebase/firebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import './TableStyle.css'

import {
    Table,
    Button,
    Container,
} from "reactstrap";

const TableOrders = () => {

    const [datos, setDatos] = useState([]);

    const obtenerRegistros = async () => {
        onSnapshot(collection(db, 'Buyer-info'), (snapshot) => {
            const arrayData = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            const filteredArrayData = arrayData.filter(doc => doc.State===true)
            setDatos(filteredArrayData)
        }, (error) => console.log(error))
    }

    useEffect(() => {
        obtenerRegistros();
    }, []);

    const eliminar = async (dato) => {
        if (window.confirm(`¿Estás seguro que deseas eliminar a ${dato.BuyerName}?`)) {
            await updateDoc(doc(db, "Buyer-info", dato.id), {State: false})
            toast(`Se eliminó al cliente ${dato.BuyerName} con éxito.`, {
                type: "error",
                autoClose: 2000
            });
        }
    };

    return (
        <div>
            <div className="titulo">
                <h1>Pedidos por atender</h1>
            </div>
            <Container>
                <br />
                <br />
                <br />
                <Table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Teléfono</th>
                            <th>Dirección</th>
                            <th>Pago Total (S/)</th>
                            <th>Cantidad de compra</th>
                            <th>Fecha de pedido</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {datos.map((dato) => (
                            <tr key={dato.id}>
                                <td>{dato.BuyerName}</td>
                                <td>{dato.BuyerEmail}</td>
                                <td>{dato.BuyerCell}</td>
                                <td>{dato.BuyerAddress}</td>
                                <td>{dato.BuyerPayment}</td>
                                <td>{dato.BuyerQuantity}</td>
                                <td>{dato.TimeBuy}</td>
                                <td>   
                                    <Button color="danger" onClick={() => eliminar(dato)}>
                                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}
export default TableOrders;