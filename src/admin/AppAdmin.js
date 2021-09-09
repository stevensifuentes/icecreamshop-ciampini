import React from 'react';
import './AppAdmin.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route } from 'react-router-dom'
import UserProfile from '../Components/UserProfile/UserProfile';
import Productos from '../admin/components/Tables/TableProducts'
import Clientes from '../admin/components/Tables/TableClients'
import Pedidos from '../admin/components/Tables/TableOrders'
// import Home from './components/Home'
import Navbar from '../Components/Navbar';
// import Navigation from './Components/Navigation/Navigation';

// https://freefrontend.com/react-carousels/


const AppAdmin = ({user}) => {
    
      return (
        <BrowserRouter>
            <div className="grid">   
                <div>
                    <Sidebar/>
                </div>
                <div className="canvas ">
                    {/* <Navigation/> */}
                    {/* <Route exact path='/products' component={() => <Home user={this.state.user} />} /> */}
                    <Navbar user={user} />
                    {/* <UserProfile/> */}
                    <Route exact path="/userProfile" component={UserProfile}/>
                    <Route exact path="/productos" component={Productos}/>
                    <Route exact path="/pedidos" component={Pedidos}/>
                    <Route exact path="/clientes" component={Clientes}/>
                </div>
            </div>
        </BrowserRouter> 
      
    );
}

export default AppAdmin;