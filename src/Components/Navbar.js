import React, { useContext } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'
import { auth } from '../firebase/firebaseConfig'
import { signOut } from "firebase/auth"
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'

import logo from './Logo.png'

const Navbar = ({ user }) => {
    const navigate = useNavigate()
    const { totalQty } = useContext(CartContext)

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/login')
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            {
                !user && <div className='rightside'>
                    <span><NavLink to="/signup" className='navlink'>SIGN UP</NavLink></span>
                    <span><NavLink to="/login" className='navlink'>LOGIN</NavLink></span>
                </div>
            }

            {user==='Pedro' ?
                <div className='p-3' style={{backgroundColor: '#8692B7'}}>
                    <div className="d-flex justify-content-end">
                        <span><NavLink to="/UserProfile" className='navlink'
                        style={{
                            color:'black',
                            fontSize: '1em',
                            fontWeight: 'bold'
                            
                        }}>{user}</NavLink></span>
                        <span><button className='logout-btn btn-info p-1' onClick={handleLogout}>Cerrar Sesión</button></span>
                    </div>
                </div>
                :
                <div className='navbox'
                style={{
                    backgroundColor: '#1a252f',
                    padding: '5px'
                }}>
                    <div className='leftside' style={{width: '200px', marginLeft:'20px'}}>
                        <img src={logo} alt="Logo de la página" />
                    </div>
                    <div className='rightside'>
                        <span><NavLink to="/products-user" className='navlink text-white' style={{ fontSize: '18px'}}>{user}</NavLink></span>
                        <span><NavLink to="/cartproducts" className='navlink'><Icon icon={cart} style={{color: 'white'}}/></NavLink></span>
                        <span className='no-of-products' >{totalQty}</span>
                        <span><button className='logout-btn btn-info' onClick={handleLogout}>Cerrar Sesión</button></span>
                    </div>
                </div>
            }
        </>
    )
}

export default Navbar