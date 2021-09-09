import React from 'react';
import logo from './LOGO.png'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
 
const Sidebar = () => {
  return (
    <div 
      style={{display: 'flex', height: '100vh', overflow: 'scroll initial'}}
    >
       <CDBSidebar textColor="#fff" backgroundColor="black">
        
        <CDBSidebarHeader>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            <img src={logo} alt="Logo de la página" 
              style={{width: '100%'}}/>
          </a>
        </CDBSidebarHeader>
 
        <CDBSidebarContent className="sidebar-content" >
          <CDBSidebarMenu>
            <NavLink exact to="/userProfile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Perfil</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/productos" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Productos</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/pedidos" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Pedidos</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/clientes" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Clientes</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 5px',
              fontSize: '2em'
            }}
          >
            Heladería
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};
 
export default Sidebar;