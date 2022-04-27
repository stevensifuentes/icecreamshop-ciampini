import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Administrator from './admin/Administrator';
import About from './client/Components/About/About';
import Catalog from './client/Components/Catalog/Catalog';
import Contact from './client/Components/Contact/Contact';
import Error404 from './client/Components/Error404/Error404';
import Footer from './client/Components/Footer/Footer';
import FormLogin from './client/Components/Login/FormLogin';
import Home from './client/Components/Home';
import Signup from './client/Components/Register/Register';
import Modal from './client/Components/Modal/Modal';
import Navigation from './client/Components/Navegacion/Navigation';
import Profile from './admin/components/Profile/Profile'
import PrivateRoute from './PrivateRoute';
import Login from './client/Components/Login/Login';
import TableClients from './admin/components/Tables/TableClients'
import TableProducts from './admin/components/Tables/TableProducts';
import TableOrders from './admin/components/Tables/TableOrders';
import { Cart } from './client/Components/ShoppingCart/Cart';
import { Cashout } from './client/Components/Cashout';
import { useAuth } from './context/AuthContext';

const App = () => {
    const [openModal, setOpenModal] = useState(false)
    const { user } = useAuth()
    // const [user, setUser] = useState('')
    // const [email, setEmail] = useState('')

    // useEffect(() => {
    //     onAuthStateChanged(auth, async (user) => {
    //         if (user) {
    //             const docRef = doc(db, 'Clients', user.uid)
    //             const docSnap = await getDoc(docRef)
    //             if (docSnap.exists()) {
    //                 setUser(docSnap.data().Name)
    //                 setEmail(docSnap.data().Email)
    //             }
    //             console.log('Hay usuario', user)
    //         }
    //         console.log('Imprimiendo user', user)
    //     })
    // }, [])

    return (
        <>
            { !user && <Navigation />}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/cartproducts' element={<Cart setOpenModal={setOpenModal} />} />

                {/* Para pagar cuando hay usuario */}
                <Route path='/cashout' element={
                    <PrivateRoute>
                        <Cashout />
                    </PrivateRoute>
                } />

                <Route path='/administrator/*' element={
                    <PrivateRoute>
                        <Administrator />
                    </PrivateRoute>
                } >
                    <Route index element={<Profile />} /> 
                    <Route path='products' element={<TableProducts />} />
                    <Route path='orders' element={<TableOrders />} />
                    <Route path='clients' element={<TableClients />} /> 
                </Route>

                <Route path='*' element={<Error404 />} />
            </Routes>

            { openModal && (
                <Modal>
                    <FormLogin 
                        openModal={openModal} 
                        setOpenModal={setOpenModal}/>
                </Modal>
            )}
            { !user && <Footer />}      
        </>
    )
}

export default App;