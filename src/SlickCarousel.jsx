import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { longList, list } from './data';
const SlickCarousel = () => {
    const [ people, setPeople ] = useState( list );

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true
    };
    return (
        <section className='slick-container'>
            <Slider {...settings}>
                {people.map( ( person, personIndex ) => {
                    const { id, quote, image, name, title } = person
                    return <article key={id}  >
                        <img src={image} alt={name} className='person-img' />
                        <h5 className='name'>{name}</h5>
                        <p className='title'>{title}</p>
                        <p className='text'>{quote}</p>
                        <FaQuoteRight className='icon' />

                    </article>
                } )}
            </Slider>
        </section>
    )
}

export default SlickCarousel
