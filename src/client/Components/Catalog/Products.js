import React, { useContext } from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';
import { ProductsContext } from '../../../context/ProductsContext';
import { CartContext } from '../../../context/CartContext';
import Product from './Product';

const Products = () => {
    const { products } = useContext(ProductsContext);
    const { dispatch } = useContext(CartContext);

    return (
        <ProductsContainer>
            { products.length === 0 && <ReactLoading 
                                            type='bubbles' 
                                            color='#092c4c' 
                                            height={'10%'} 
                                            width={'10%'}/> }
            { products.map(product => (
                <Product 
                    key={product.ProductID}
                    dispatch={dispatch}
                    product={product} />
            )) }
        </ProductsContainer>
    )
}

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    width: inherit;
    margin: 50px 15%;
    box-sizing: border-box;
`
export default Products;