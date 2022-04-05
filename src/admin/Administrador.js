import React, { useEffect } from 'react'
import AppAdmin from './AppAdmin'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

const Administrador = ({ user }) => {

    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/login')
            }
        })
    }, [])

    return (
        <div className='wrapper'>
            <AppAdmin user={user}/>
        </div>
    )
}

export default Administrador