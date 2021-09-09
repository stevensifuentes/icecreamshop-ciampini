import React, { Component } from 'react'
import { ProductsContextProvider } from './Global/ProductsContext'
import Home from './Components/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import Signup from './Components/Register/Register'
import Navigation from './Components/Navegacion/Navigation_'
import Login from './Components/Login/Login'
import Catalog from './Components/Catalog'
import { auth, db } from './Config/Config'
import { CartContextProvider } from './Global/CartContext'
import { Cart } from './Components/Cart'
import { AddProducts } from './Components/AddProducts'
import { Cashout } from './Components/Cashout'
import Inicio from './Components/Inicio'
import About from './Components/About/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer/Footer'
import Administrador from './admin/Administrador'

export class App extends Component {

    state = {
        user: null,
    }
    
    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('Clients').doc(user.uid).get().then(snapshot => {
                    this.setState({
                        user: snapshot.data().Name,
                        email: snapshot.data().Email
                    })
                    console.log(user)
                })
            }
            else {
                this.setState({
                    user: null
                })
            }
            
        })

    }

    render() {
        return (
            <ProductsContextProvider>
                <CartContextProvider>
                    <BrowserRouter>
                        {
                            // Navegacion
                            this.state.user ? "" : <Navigation />
                        }
                        {/* inicio */}
                        <Route exact path="/" component={Inicio} />
                        {/* administrador */}
                        <Route exact path='/UserProfile' component={() => <Administrador user={this.state.user} />} />
                        {/* home */}
                        <Route exact path='/products' component={() => <Home user={this.state.user} />} />
                        {/* catalogo */}
                        <Route exact path="/catalog" component={Catalog} />
                        {/* about */}
                        <Route exact path="/about" component={About} />
                        {/* contacto */}
                        <Route exact path="/contact" component={Contact} />
                        {/* login */}
                        <Route exact path="/login" component={Login} />
                        {/* signup */}
                        <Route exact path="/signup" component={Signup} />
                        {/* cart products */}
                        <Route exact path="/cartproducts" component={() => <Cart user={this.state.user} />} />
                        {/* add products */}
                        <Route exact path="/addproducts" component={AddProducts} />
                        {/* cashout */}
                        <Route exact path='/cashout' component={() => <Cashout user={this.state.user} />} />
                        {
                            this.state.user == null ?  <Footer/> : ""
                        }
                    </BrowserRouter>
                </CartContextProvider>
            </ProductsContextProvider>
        )
    }
}

export default App
