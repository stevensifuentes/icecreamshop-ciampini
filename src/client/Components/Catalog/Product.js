import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ShoppingCart } from './shoppingcart.svg';
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/fa/arrowRight';
import { toast } from 'react-toastify';
import Starts from './Starts';

const Product = ({ product, dispatch }) => {

    const { ProductID, ProductImg, ProductName, ProductPrice } = product

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', id: ProductID, product })
        toast('Producto agregado', {
            type: 'success',
            autoClose: 2000
        });
    }

    return (
        <ProductCard>
            <img src={ ProductImg } alt="not found" />
            <InfoContainer>
                <div>
                    <p>{ ProductName }</p>
                    <h5>S/ { ProductPrice }.00</h5>
                </div>
                <div>
                    <span>Ver detalles <Icon icon={arrowRight}/></span>
                    <Starts />
                </div>
            </InfoContainer>
            <ButtonContainer>
                <span><ShoppingCart /></span>
                <button
                    onClick={() => handleAddToCart()}>
                        Añadir a la cesta
                </button>
            </ButtonContainer>
        </ProductCard>
    )
}

const ProductCard = styled.div`
    padding: 30px;
    text-align: center;
    width: 100%;
    /* background: #DCE5E1; */
    background: #F3F7F6;
    border: 1px solid #DCE5E1;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(129, 129, 129, .4);

    p {
        color: rgba(129, 129, 129, .9);
        padding: 5px;
        font-size: 20px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: bold;
    }
    
    img {
        padding: 10px;
        width: 100%;
        height: 15em;
        border-radius: 20px;
        @media screen and (max-width: 300px){
            height: 10em;
        }
  }
  button {
    border: 1px solid #6AAE9F;
    color: #6AAE9F;
    padding: 10px;
    background: transparent;
    border-radius: 5px;
    transition: .2s all ease-in;
    box-shadow: 0 0 3px rgba(129, 129, 129, .4);

    &:hover{
        background: #6AAE9F;
        color: white;
    }
  }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    span {
        cursor: pointer;
        font-weight: bold;
    }
`
export default Product;