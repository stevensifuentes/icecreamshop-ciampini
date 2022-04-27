import React from 'react';
import { Icon } from 'react-icons-kit';
import { user } from 'react-icons-kit/fa/user'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase/firebaseConfig';
import './navbarStyles.css';

const Navbar = ({ username }) => {
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <nav style={{ backgroundColor: '#8692B7', padding: '30px' }}>
            <div className='d-flex justify-content-end'>
                <span>
                    <p className='pUser'>{ username }</p>
                </span>
                <span>
                    <Icon icon={ user } className='iconUser'/>
                </span>
                <span>
                    <button 
                        className='buttonLogout' 
                        onClick={handleLogout}>
                        Cerrar Sesión
                    </button>
                </span>
            </div>
        </nav>
    )
}

export default Navbar;