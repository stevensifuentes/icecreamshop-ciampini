import React from 'react';
import { NavLink } from 'react-router-dom';
import { threeBars } from 'react-icons-kit/oct/threeBars';
import { Icon } from 'react-icons-kit';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import logo from './LOGO.png';

const Sidebar = () => {
  return (
    <CDBSidebar backgroundColor="#8692B7" style={{height: '100vh', overflow: 'scroll initial'}}>
     <CDBSidebarHeader prefix={<Icon icon={threeBars} />} >
       <div className='container' style={{ display: 'flex', alignItems: 'center' }}>
         <img 
           src={logo} 
           alt="ice cream logo" 
           style={{width: '100%', cursor: 'pointer'}}/>
       </div>
     </CDBSidebarHeader>
     <CDBSidebarContent>
       <CDBSidebarMenu>
         <NavLink to=''>
           <CDBSidebarMenuItem icon="user">Perfil</CDBSidebarMenuItem>
         </NavLink>
         <NavLink to='products' >
           <CDBSidebarMenuItem icon="table">Productos</CDBSidebarMenuItem>
         </NavLink>
         <NavLink to='orders' >
           <CDBSidebarMenuItem icon="shopping-bag">Pedidos</CDBSidebarMenuItem>
         </NavLink>
         <NavLink to='clients' >
           <CDBSidebarMenuItem icon="chart-line">Clientes</CDBSidebarMenuItem>
         </NavLink>
       </CDBSidebarMenu>
     </CDBSidebarContent>
     <CDBSidebarFooter style={{ textAlign: 'center' }}>
       <div className="sidebar-btn-wrapper">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{height: '150px'}}>
           <path fill="rgba(0, 0, 0, .2)" fillOpacity="1" d="M0,32L60,26.7C120,21,240,11,360,21.3C480,32,600,64,720,90.7C840,117,960,139,1080,149.3C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
         </svg>
       </div>
     </CDBSidebarFooter>
   </CDBSidebar>
  )
}
 
export default Sidebar;