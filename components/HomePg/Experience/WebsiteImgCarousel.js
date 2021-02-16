import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";

import styles from '../../../styles/Experience.module.css';

const WebsiteImgCarousel = (props) => {
    const [playSpeed, setPlaySpeed] = useState(2);
    const imgRef = useRef();

    useEffect(() => {
        setPlaySpeed(1500 / props.projectImages.length);
    });

    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        autoplaySpeed: playSpeed,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,
        autoplay: true,
        centerPadding: '0px',
        arrows: false,
        pauseOnFocus: true,
        pauseOnHover: false,
        easing: 'ease-in-out',
        fade: true
    };

    let displayImages = props.projectImages.map((image) => {
        return (
            <div className={styles.websiteImg} onMouseDown={props.focus} onMouseUp={props.unfocus} onTouchStart={props.focus} onTouchEnd={props.unfocus}>
                <img src={image} alt="bgImg" />
            </div>
        )
    })
                
    return(
        <div ref={imgRef} className={styles.imgContainer}>
            <Slider {...settings}>
                {displayImages}
            </Slider>
        </div>
    );
};

export default WebsiteImgCarousel;