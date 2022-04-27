import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { CartContextProvider } from './context/CartContext';
import { ProductsContextProvider } from './context/ProductsContext';
import './index.css';

ReactDOM.render(
  <AuthContextProvider>
    <CartContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductsContextProvider>
    </CartContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
);