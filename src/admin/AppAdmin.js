import React from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import UserProfile from '../Components/UserProfile/UserProfile';
import Navbar from '../Components/Navbar';
import './AppAdmin.css';
import { Route, Routes } from 'react-router-dom';
import TableProducts from './components/Tables/TableProducts';
import TableOrders from './components/Tables/TableOrders';
import TableClients from './components/Tables/TableClients';

// https://freefrontend.com/react-carousels/

const AppAdmin = ({ user }) => {
    return (
        <div className="grid">
            <div>
                <Sidebar />
            </div>
            <div className="canvas ">
                <Navbar user={user} />
        {/*         {
                    window.location.pathname==='/userProfile' && <UserProfile />
                }
                {
                    window.location.pathname==='/products' && <TableProducts />
                }
                {
                    window.location.pathname==='/orders' && <UserProfile /> 
                }
                {
                    window.location.pathname==='/clients' && <TableClients />
                } */}
            </div>
        </div>
    );
}

export default AppAdmin;