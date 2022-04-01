import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Products } from './Products'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

const Home = ({ user }) => {

    const history = useHistory();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                history.push('/login');
            }
        })
    }, [])

    return (
        <div className='wrapper' style={{position:'relative'}}>
            <Navbar user={user} />
            <Products />
            <div className="mt-5">

            </div>
            <div className="py-4 text-center text-white mt-5"
            style={{
                bottom: '0',
                backgroundColor: '#1a252f',    
                position: 'absolute',
                width: '100%'
            }}>
                <small>Copyright &copy; Hecho con ❤ en Perú por Stevens Sifuentes y Danny Sanchez</small>
            </div>
        </div>
    )
}

export default Home;