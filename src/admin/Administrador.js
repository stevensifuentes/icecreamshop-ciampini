import React, { useEffect } from 'react'
import AppAdmin from './AppAdmin'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import UserProfile from '../Components/UserProfile/UserProfile'
import TableClients from './components/Tables/TableClients'
import TableOrders from './components/Tables/TableOrders'
import TableProducts from './components/Tables/TableProducts'

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