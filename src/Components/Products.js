import React, { useContext } from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext'

export const Products = () => {

    const { products } = useContext(ProductsContext);
    const { dispatch } = useContext(CartContext);

    return (
        <>
            {products.length !== 0 && <h1 className="text-center">Nuestros Helados</h1>}
            <div className='products-container'>
                {products.length === 0 && <div>Su internet está lento... o no hay productos</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}
                    style={{
                        borderRadius: '10px',
                        fontSize: '1em'
                    }}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name '>
                            {product.ProductName}
                        </div>
                        <div className='product-price'>
                            S/ {product.ProductPrice}.00
                        </div>
                        <button 
                            className='addcart-btn' 
                            onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}
                            style={{
                                backgroundColor: '#61BA9E',
                                borderRadius: '50px',                     
                            }}
                            >Añadir al carrito</button>
                    </div>
                ))}
            </div>
        </>
    )
}