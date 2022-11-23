import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselItem = (props) => {

    const [current, setCurrent] = useState(0);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            paritialVisibilityGutter: 80
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            paritialVisibilityGutter: 10
          },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            paritialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30
        }
    };

    

    return (
        <Carousel
            responsive={responsive}
            {...props}
            ref={el => {

                if (el) {
                    el.goToSlide(props.indexSelected, true)
                    setCurrent(props.indexSelected)
                }
            }}
            afterChange={(previousSlide, { currentSlide, onMove }) => {
                //doSpeicalThing();
              }}
              beforeChange={(nextSlide, { currentSlide, onMove }) => {
                //doSpeicalThing();
              }}
        >
            {props.children}
        </Carousel>
    )
}

export default CarouselItem;