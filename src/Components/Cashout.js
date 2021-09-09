import React, { useState, useEffect, useContext } from 'react'
import { auth, db } from '../Config/Config'
import { CartContext } from '../Global/CartContext'
import Navbar from './Navbar';
import { useHistory } from 'react-router-dom'
import { toast } from "react-toastify";

export const Cashout = (props) => {

    const history = useHistory();

    const { totalPrice, totalQty, dispatch } = useContext(CartContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cell, setCell] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('Clients').doc(user.uid).onSnapshot(snapshot => {
                    setName(snapshot.data().Name);
                    setEmail(snapshot.data().Email);
                    setCell(snapshot.data().Phone);
                    setAddress(snapshot.data().Address);
                })
            }
            else {
                history.push('/login')
            }
        })
    })

    const cashoutSubmit = (e) => {
        e.preventDefault();
        auth.onAuthStateChanged(user => {
            if (user) {
                const today = new Date();
                let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();;
                db.collection('Buyer-info').doc().set({
                    BuyerName: name,
                    BuyerEmail: email,
                    BuyerCell: cell,
                    BuyerAddress: address,
                    BuyerPayment: totalPrice,
                    BuyerQuantity: totalQty,
                    TimeBuy: date,
                    State: true
                }).then(() => {
                    setName('');
                    setEmail('');
                    setCell('');
                    setAddress('');
                    dispatch({ type: 'EMPTY' })
                    toast("¡Tu pedido se ha realizado de manera correcta! Gracias por la compra", {
                        type: "info",
                      });
                    setTimeout(() => {
                        history.push('/products')
                    }, 3000)
                }).catch(err => setError(err.message))
            }
        })
    }

    return (
        <>
            <Navbar user={props.user} />
            <div className='container mb-5'>
                <br />
                <h2>Detalles de la compra</h2>
                <br />
                {successMsg && <div className='success-msg'>{successMsg}</div>}
                <form autoComplete="off" className='form-group' onSubmit={cashoutSubmit}>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" className='form-control' required
                        value={name} disabled />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input type="email" className='form-control' required
                        value={email} disabled />
                    <br />
                    <label htmlFor="Cell No">Teléfono</label>
                    <input type="number" className='form-control' required disabled
                        onChange={(e) => setCell(e.target.value)} value={cell} placeholder='eg 03123456789' />
                    <br />
                    <label htmlFor="Delivery Address">Direccióin de envío</label>
                    <input type="text" className='form-control' required disabled
                        onChange={(e) => setAddress(e.target.value)} value={address} />
                    <br />
                    <label htmlFor="Price To Pay">Pago Total</label>
                    <input type="number" className='form-control' required
                        value={totalPrice} disabled />
                    <br />
                    <label htmlFor="Total No of Products">Cantidad de productos</label>
                    <input type="number" className='form-control' required
                        value={totalQty} disabled />
                    <br />
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <button type="submit" className='btn btn-primary'>PAGAR</button>
                    </div>
                    <button type="submit" className='btn btn-danger'>CANCELAR</button>
                </form>
                {error && <span className='error-msg'>{error}</span>}
            </div>
        </>
    )
}
