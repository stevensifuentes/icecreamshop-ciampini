import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { auth, db } from './firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from "firebase/firestore";

import Home from './Components/Home'
import Signup from './Components/Register/Register'
import Navigation from './Components/Navegacion/Navigation_'
import Login from './Components/Login/Login'
import Catalog from './Components/Catalog'
import { Cart } from './Components/Cart'
import { AddProducts } from './Components/AddProducts'
import { Cashout } from './Components/Cashout'
import Inicio from './Components/Inicio'
import About from './Components/About/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer/Footer'
import Administrador from './admin/Administrador'

const App = () => {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docRef = doc(db, 'Clients', user.uid)
                const docSnap = await getDoc(docRef)
                if(docSnap.exists()){
                    setUser(docSnap.data().Name)
                    setEmail(docSnap.data().Email)
                }
                console.log(user)
            }
        })
    }, [])
    
    return (
        <>
            { !user && <Navigation /> }
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/UserProfile' element={() => <Administrador user={user} />} />
                <Route path='/products' element={() => <Home user={user} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/cartproducts" element={() => <Cart user={user} />} />
                <Route path="/addproducts" element={<AddProducts />} />
                <Route path='/cashout' element={() => <Cashout user={user} />} />
            </Routes>
            { !user  && <Footer/> }    
        </>
    )
}

export default App