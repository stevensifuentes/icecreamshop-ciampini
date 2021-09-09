import Inicio from './Components/Inicio';
import Catalog from './Components/Catalog'
import About from './Components/About/About';
import Contact from './Components/Contact';
// import Navigation from './components/Navegacion/Navigation_';
import Footer from './Components/Footer/Footer';
import { Login } from './Components/Login'
import Register from './Components/Register/Register';
// import firebase from "./Firebase/firebase";
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';

function AppClient(props) {
  return (
    <BrowserRouter>
      <div className="">
        <Route exact path="/" component={Inicio}/>
        <Route exact path="/catalog" component={Catalog}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Footer/>
      </div>
    </BrowserRouter>
    
  );
}

export default AppClient;