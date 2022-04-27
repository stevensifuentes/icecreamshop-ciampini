import React, { useContext, useEffect } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_add_circle } from 'react-icons-kit/md/ic_add_circle';
import { ic_remove_circle } from 'react-icons-kit/md/ic_remove_circle';
import { ic_restore_from_trash_twotone } from 'react-icons-kit/md/ic_restore_from_trash_twotone';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from '../../firebase/firebaseConfig';
import { ReactComponent as Car } from './../../../images/carro.svg';

export const Cart = ({ setOpenModal }) => {
    const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);
    console.log(totalPrice)
    console.log(shoppingCart)
    // const navigate = useNavigate();

    /* useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(!user){
                navigate('/login');
            }
        })
    }) */

    return (
        <>
            {shoppingCart.length !== 0 && <h1 className="text-center">Cesta</h1>}
            <div className='cart-container' style={{ height: '60vh' }}>
                {
                    shoppingCart.length === 0 && <>
                        <Car style={{ width: '20%', padding: '5px', marginTop: '80px' }} />
                        <h4>¡Ups! su cesta se encuentra vacío</h4>
                        <Link to="/catalog">
                            <button>Seguir comprando</button>
                        </Link>
                    </>
                }
                {shoppingCart && shoppingCart.map(cart => (
                    <div className='cart-card' key={cart.ProductID}>
                        <div className='cart-img'>
                            <img src={cart.ProductImg} alt="not found" />
                        </div>

                        <div className='cart-name'>{cart.ProductName}</div>

                        <div className='cart-price-orignal'>S/{cart.ProductPrice}.00</div>

                        <div className='inc' onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })}>
                            <Icon icon={ic_add_circle} size={24} />
                        </div>

                        <div className='quantity'>{cart.qty}</div>

                        <div className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })}>
                            <Icon icon={ic_remove_circle} size={24} />
                        </div>

                        <div className='cart-price'>
                            S/ {cart.TotalProductPrice}.00
                        </div>

                        <button className='delete-btn' onClick={() => dispatch({ type: 'DELETE', id: cart.ProductID, cart })}>
                            <Icon icon={ic_restore_from_trash_twotone} size={24} />
                        </button>
                    </div>
                ))
                }
                {shoppingCart.length > 0 && <div className='cart-summary'
                    style={{
                        fontSize: '1.2em',
                        borderRadius: '10px'

                    }}>
                    <div className='cart-summary-heading text-center'>
                        Resumen de compra
                    </div>
                    <div className='cart-summary-price'>
                        <span>Precio Total</span>
                        <span>S/{totalPrice}.00</span>
                    </div>
                    <div className='cart-summary-price'>
                        <span>Cantidad Total</span>
                        <span>{totalQty}</span>
                    </div>
                    <button onClick={() => setOpenModal(prev => !prev)} className='btn btn-primary btn-md' style={{ marginTop: 5 + 'px' }}>
                        Comprar
                    </button>
                    {/* <NavLink to='/cashout' className='cashout-link'>
                    </NavLink> */}
                </div>}
            </div>
        </>
    )
}