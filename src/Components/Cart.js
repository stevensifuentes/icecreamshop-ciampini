import React, { useContext, useEffect } from 'react'
import { CartContext } from '../Global/CartContext'
import  Navbar  from './Navbar';
import { Icon } from 'react-icons-kit'
import { ic_add } from 'react-icons-kit/md/ic_add'
import { ic_remove } from 'react-icons-kit/md/ic_remove'
import { iosTrashOutline } from 'react-icons-kit/ionicons/iosTrashOutline'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase/firebaseConfig'
import { onAuthStateChanged } from "firebase/auth";
import Carro from '../images/carro.svg'

export const Cart = ({ user }) => {
    const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);

    const history = useHistory();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(!user){
                history.push('/login');
            }
        })
    })

    return (
        <>
            <Navbar user={user} />
            <>
                {shoppingCart.length !== 0 && <h1 className="text-center">Carrito</h1>}
                <div className='cart-container' style={{height: '80vh'}}>
                    {
                        shoppingCart.length === 0 && <>
                            <img 
                                src={Carro} 
                                alt="Carro de compras" 
                                style={{width: '20%', padding:'5px', marginTop:'80px'}}/>
                            <h4>¡Ups! su carrito se encuentra vacío.</h4>
                            <div><Link to="/products">Añade un producto</Link></div>
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
                                <Icon icon={ic_add} size={24} />
                            </div>

                            <div className='quantity'>{cart.qty}</div>

                            <div className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })}>
                                <Icon icon={ic_remove} size={24} />
                            </div>

                            <div className='cart-price'>
                                S/ {cart.TotalProductPrice}.00
                            </div>

                            <button className='delete-btn' onClick={() => dispatch({ type: 'DELETE', id: cart.ProductID, cart })}>
                                <Icon icon={iosTrashOutline} size={24} />
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
                            <span>{totalPrice}</span>
                        </div>
                        <div className='cart-summary-price'>
                            <span>Cantidad Total</span>
                            <span>{totalQty}</span>
                        </div>
                        <Link to='cashout' className='cashout-link'>
                            <button className='btn btn-primary btn-md' style={{ marginTop: 5 + 'px' }}>
                                Comprar
                            </button>
                        </Link>
                    </div>}
                </div>
            </>
            <div className="py-4 text-center text-white mt-5"
            style={{
                bottom: '-10',
                backgroundColor: '#1a252f',    
                position: 'absolute',
                width: '100%'
            }}>
                <small>Copyright &copy; Hecho con ❤ en Perú por Stevens Sifuentes y Danny Sanchez</small>
            </div>
        </>
    )
}