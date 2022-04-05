import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Inicio from './Components/Inicio';
import Catalog from './Components/Catalog'
import About from './Components/About/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer/Footer';
import Register from './Components/Register/Register';
import { Login } from './Components/Login'

const AppClient = () => {
  return (
      <div>
        <Routes>
          <Route path='/' element={ <Inicio /> }/>
          <Route path='/catalog' element={ <Catalog /> }/>
          <Route path='/about' element={ <About /> }/>
          <Route path='/contact' element={ <Contact /> }/>
          <Route path='/login' element={ <Login /> }/>
          <Route path='/register' element={ <Register /> }/>
        </Routes>

        <Footer />
      </div>  
  );
}

export default AppClient;