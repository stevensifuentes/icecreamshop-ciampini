import React from 'react';
import Carrusel from './Carrusel/Carrusel';
import Products from './Products/Products';
import Paralax from './Parallax/Parallax';
import Pro from './Products/pro';
import Tiendas from './Tiendas/Tiendas'

const Inicio = () => {
    return (
        <div>
            <Carrusel />
            <Pro/>
            <Products titulo="Nuestros Productos"/>
            <Paralax/>
            <Tiendas/>
        </div>
    );
}

export default Inicio;
