import React, { useEffect, useState } from "react";
import { db } from '../../../Config/Config'
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";
import './TableStyle.css'

import {
    Table,
    Button,
    Container,
} from "reactstrap";

const TableOrders = () => {

    const [datos, setDatos] = useState([]);
    // const [dataPedidos, setDataPedidos] = useState(initialStateValues);

    const obtenerRegistros = async () => {
        db.collection('Buyer-info').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                if(doc.data().State){
                    docs.push({...doc.data(), id: doc.id});
                }
            });
            setDatos(docs);
        });
    }

    useEffect(() => {
        obtenerRegistros();
    }, []);

    const eliminar = async (dato) => {
        if (window.confirm("¿Estás Seguro que deseas Eliminar el producto? " + dato.Nombre)) {
            await db.collection('Buyer-info').doc(dato.id).update({State: false})
            toast("Usted acaba de atender un pedido.", {
                type: "info",
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