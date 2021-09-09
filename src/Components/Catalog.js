import React from 'react';
import Products from './Products/Products';

const Catalog = (props) => {
    return (
        <div style={{
            marginTop: '80px'
        }}>
            <Products titulo="Catalogo de Productos"/>
        </div>
    );
}

export default Catalog;

