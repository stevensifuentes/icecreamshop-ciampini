import React from 'react';
import Carousel from './Carrusel/Carousel';
import Products from './Products/Products';
import Paralax from './Parallax/Parallax';
import Pro from './Products/pro';
import Tiendas from './Tiendas/Tiendas'

const Home = () => {
    return (
        <>
            <Carousel />
            <Pro/>
            <Products titulo="Nuestros Productos"/>
            <Paralax/>
            <Tiendas/>
        </>
    );
}

export default Home;
