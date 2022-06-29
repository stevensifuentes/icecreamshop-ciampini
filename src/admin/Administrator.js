import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { Outlet } from 'react-router-dom';
import { db } from '../firebase/firebaseConfig';
import { useAuth } from '../hooks/useAuth';
import Navbar from './components/NavbarAdmin/Navbar'
import Sidebar from './components/Sidebar/Sidebar';
import './Administrator.css';

const Administrador = () => {
    const { user } = useAuth();
    const [name, setName] = useState('')

    useEffect(async () => {
        const docRef = doc(db, 'Clients', user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            setName(docSnap.data().Name)
        }
    }, []);
    
    return (
        <div className="wrapper">
            <div className="grid">
                <div>
                    <Sidebar />
                </div>
                <div className="canvas">
                    <Navbar username={name} />
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Administrador;