import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar/Sidebar';
import UserProfile from '../Components/UserProfile/UserProfile';
import Productos from '../admin/components/Tables/TableProducts'
import Clientes from '../admin/components/Tables/TableClients'
import Pedidos from '../admin/components/Tables/TableOrders'
import Navbar from '../Components/Navbar';
import './AppAdmin.css';

// https://freefrontend.com/react-carousels/

const AppAdmin = ({ user }) => {
      return (
        <div className="grid">   
            <div>
                <Sidebar/>
            </div>
            <div className="canvas ">
                <Navbar user={user} />
                <Routes>
                    <Route path='/userProfile' element={<UserProfile />}/>
                    <Route path='/productos' element={<Productos />}/>
                    <Route path='/pedidos' element={<Pedidos />}/>
                    <Route path='/clientes' element={<Clientes />}/>
                </Routes>
            </div>
        </div>
    );
}

export default AppAdmin;