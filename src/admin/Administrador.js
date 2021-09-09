import React, { useEffect } from 'react'
import AppAdmin from './AppAdmin'
import { useHistory } from 'react-router-dom'
import { auth } from '../Config/Config'

const Administrador = ({ user }) => {

    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
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