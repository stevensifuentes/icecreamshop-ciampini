import React from 'react';
import Products from './Products';
import { CatalogContainer } from './styles';

const Catalog = () => {
    return (
        <CatalogContainer>
            <h2 className="page-section-heading text-center text-uppercase mb-0 title">Catalogo de Productos</h2>
            <h4 className="text-center">Variedad para elegir</h4>
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-solid fa-store"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <Products />
        </CatalogContainer>
    );
}

export default Catalog;