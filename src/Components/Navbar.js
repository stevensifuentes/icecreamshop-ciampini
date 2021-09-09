import React, { useContext } from 'react'
import logo from './Logo.png'
import { Link } from 'react-router-dom'
import { auth } from '../Config/Config'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'

const Navbar = ({ user }) => {

    const history = useHistory();
    const { totalQty } = useContext(CartContext);

    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }
    console.log(user);
    return (
        <>

            {!user && <div className='rightside'>
                <span><Link to="signup" className='navlink'>SIGN UP</Link></span>
                <span><Link to="login" className='navlink'>LOGIN</Link></span>
            </div>

            }

            {user === "Pedro" ?
                <div className='p-3' style={{backgroundColor: '#8692B7'}}>
                    <div className="d-flex justify-content-end">
                        <span><Link to="/UserProfile" className='navlink'
                        style={{
                            color:'black',
                            fontSize: '1em',
                            fontWeight: 'bold'
                            
                        }}>{user}</Link></span>
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
                        <span><Link to="/products" className='navlink text-white' style={{ fontSize: '18px'}}>{user}</Link></span>
                        <span><Link to="cartproducts" className='navlink'><Icon icon={cart} style={{color: 'white'}}/></Link></span>
                        <span className='no-of-products' >{totalQty}</span>
                        <span><button className='logout-btn btn-info' onClick={handleLogout}>Cerrar Sesión</button></span>
                    </div>
                </div>
            }
        </>
    )
}

export default Navbar;