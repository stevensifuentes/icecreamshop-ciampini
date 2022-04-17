import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { auth, db } from './firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from "firebase/firestore";

import Home from './Components/Home'
import Signup from './Components/Register/Register'
import Navigation from './Components/Navegacion/Navigation'
import Login from './Components/Login/Login'
import Catalog from './Components/Catalog/Catalog'
import { Cart } from './Components/Cart'
import { AddProducts } from './Components/AddProducts'
import { Cashout } from './Components/Cashout'
import Inicio from './Components/Inicio'
import About from './Components/About/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer/Footer'
import Administrador from './admin/Administrador'
import Error404 from './Components/Error404/Error404'
import UserProfile from './Components/UserProfile/UserProfile'
// import Products from './admin/components/Tables/TableProducts'
import Orders from './admin/components/Tables/TableOrders'
import Clients from './admin/components/Tables/TableClients'
import TableProducts from './admin/components/Tables/TableProducts';
import TableOrders from './admin/components/Tables/TableOrders';
import TableClients from './admin/components/Tables/TableClients';
import Products from  './Components/Catalog/Products'

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
                console.log('Hay usuario', user)
            }
            console.log('Imprimiendo user', user)
        })
    }, [])
    
    return (
        <>
            { !user && <Navigation /> }
                <Routes>
                    <Route index element={<Inicio />} />                                 
                    {/* <Route path='catalog' element={<Catalog />} /> */}
                    <Route path='catalog' element={<Catalog />} />
                    <Route path='about' element={<About />} />                             
                    <Route path='contact' element={<Contact />} /> 
                    <Route path='login' element={<Login />} />                             
                    <Route path='signup' element={<Signup />} />                           
                    <Route path='administrator' element={<Administrador user={user} />} />

                    {/* <Route path='products-user' element={<Home user={user} />} /> */}
                    {/* <Route path='products-user' element={<Products />} /> */}
                    <Route path='cartproducts' element={<Cart user={user} />} />
                    <Route path='addproducts' element={<AddProducts />} />                 
                    <Route path='cashout' element={<Cashout user={user} />} />
                    <Route path='userProfile' element={<UserProfile />} />

                    <Route path='products' element={<TableProducts />} />
                    <Route path='orders' element={<TableOrders />} />

                    <Route path='clients' element={<TableClients />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
            { !user  && <Footer/> }    
        </>
    )
}

export default App