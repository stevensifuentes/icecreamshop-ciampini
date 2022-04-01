import React, { useEffect } from 'react'
import AppAdmin from './AppAdmin'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

const Administrador = ({ user }) => {

    const history = useHistory();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                history.push('/login');
            }
        })
    })

    return (
        <div className='wrapper'>
            <AppAdmin user={user}/>
        </div>
    )
}

export default Administrador;