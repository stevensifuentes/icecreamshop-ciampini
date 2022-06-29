import React, { useContext, useEffect } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_add_circle } from 'react-icons-kit/md/ic_add_circle';
import { ic_remove_circle } from 'react-icons-kit/md/ic_remove_circle';
import { ic_restore_from_trash_twotone } from 'react-icons-kit/md/ic_restore_from_trash_twotone';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from '../../firebase/firebaseConfig';
import { ReactComponent as Car } from './../../../images/carro.svg';
import { ReactComponent as ShoppingCart } from './shoppingcart.svg'
import styled from 'styled-components';

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
        <ContainerCart>
            {shoppingCart.length!==0 && <h1>Cesta</h1>}
            <div className='cart-container' style={{ height: '60vh' }}>
                {shoppingCart.length === 0 && <>
                    <Car style={{ width: '20%', padding: '5px', marginTop: '80px' }} />
                    <h4>¡Ups! su cesta se encuentra vacío</h4>
                    <Link to="/catalog">
                        <ButtonShop>Seguir comprando</ButtonShop>
                    </Link>
                </>}
                <div className='cesta__full'>
                    <div>
                        {shoppingCart && shoppingCart.map((cart, index) => (
                            <div key={cart.ProductID}>
                                { index===0 && <div className='cart-card'>
                                    <span>Nombre del producto</span>
                                    <span>Precio</span>
                                    <span>Cantidad</span>
                                    <span>Subtotal</span>
                                </div> }
                                <div className='cart-card'>
                                    <div className='cart-img'>
                                        <img src={cart.ProductImg} alt="not found" />
                                    </div>
                                    <div className='cart-name'>{cart.ProductName}</div>
                                    <div className='cart-price-orignal'>S/ {cart.ProductPrice}.00</div>
                                    <div className='inc' onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })}>
                                        <Icon icon={ic_add_circle} size={24} />
                                    </div>
                                    <div className='quantity'>{cart.qty}</div>
                                    <div className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })}>
                                        <Icon icon={ic_remove_circle} size={24} />
                                    </div>
                                    <div className='cart-price text-'>
                                        S/ {cart.TotalProductPrice}.00
                                    </div>
                                    <button className='delete-btn' onClick={() => dispatch({ type: 'DELETE', id: cart.ProductID, cart })}>
                                        <Icon icon={ic_restore_from_trash_twotone} size={24} />
                                    </button>    
                                </div>
                            </div>
                        ))
                        }
                    </div>
                    <div>
                        {shoppingCart.length > 0 && <div className='cart-summary'>
                            <div className='cart-summary-heading'>
                                Tu compra
                            </div>
                            <p className='cart-summary-price'>
                                <span>Cantidad Total</span>
                                <span>{totalQty}</span>
                            </p>
                            <p className='cart-summary-price'>
                                <span>Precio Total</span>
                                <span>S/ {totalPrice}.00</span>
                            </p>
                            <button onClick={() => setOpenModal(prev => !prev)} className='custom_btn'>
                                Pagar
                            </button>
                            <ContainerLink>
                                <Link to="/catalog">
                                    <ButtonShop cart>
                                        <ShoppingCart />
                                        Seguir comprando
                                    </ButtonShop>
                                </Link>
                            </ContainerLink>
                            {/* <NavLink to='/cashout' className='cashout-link'>
                    </NavLink> */}
                        </div>}
                    </div>
                </div>
            </div>
        </ContainerCart>
    )
}


const ButtonShop = styled.button`
    border: 1px solid ${props => props.cart ? '#6aae9fa7' : '#6AAE9F'};
    color:  #6AAE9F;
    padding: 10px;
    background: transparent;
    border-radius: 5px;
    transition: .2s all ease-in;
    box-shadow: 0 0 3px rgba(129, 129, 129, .4);

    &:hover{
        background: ${props => props.cart ? '#6aae9fa7' : '#6AAE9F'};
        color: white;
    }
`

const ContainerLink = styled.div`
    margin: 10px auto;
`

const ContainerCart = styled.div`
    padding-top: 100px;
`