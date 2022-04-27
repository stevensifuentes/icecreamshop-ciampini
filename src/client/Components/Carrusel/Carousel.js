import React, { useState } from 'react';
import uno from './1.jpg';
import dos from './2.jpg';
import tres from './3.jpg';
import './style.css';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: uno,
        altText: 'Los mejores sabores y los mejores helados',
        caption: 'Descubre el secreto de la tradición y disfruta nuestros productos'
    },
    {
        src: dos,
        altText: 'Elaborados con amor para ti',
        caption: 'Porque hacer las cosas con amor sale mucho mejor'
    },
    {
        src: tres,
        altText: 'Con entregas a domicilio',
        caption: 'El mejor servicio a tu disposición'
    },
];

const Carrusel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
                className="text-center">
                <img 
                    src={item.src} 
                    alt={item.altText} 
                    width="100%" 
                    height="850px" />
                <CarouselCaption 
                    captionText={item.caption} 
                    captionHeader={item.altText} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous} >
            <CarouselIndicators 
                activeIndex={activeIndex} 
                onClickHandler={goToIndex}
                items={[{},{},{}]} />
            {slides}
            <CarouselControl 
                direction="prev" 
                directionText="Previous" 
                onClickHandler={previous} />
            <CarouselControl 
                direction="next" 
                directionText="Next" 
                onClickHandler={next} />
        </Carousel>
    );
}

export default Carrusel;




















