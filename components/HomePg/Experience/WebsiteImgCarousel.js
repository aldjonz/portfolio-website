import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import { useWindowSize } from '../../Hooks/hooks';

import styles from '../../../styles/Experience.module.css';

const WebsiteImgCarousel = (props) => {
    const imgRef = useRef();

    const [width, height] = useWindowSize();

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        autoplaySpeed: 8000,
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

    let displayImagesLandscape = props.projectProps.img.map((image, i) => {
        return (
            <Slider>
                <div key={i} className={styles.websiteImg}>
                    <img src={image} alt="bgImg" />
                </div>
            </Slider>
        );
    });

    let displayImagesPortrait = props.projectProps.img.length < 3 ? 
        <div className={styles.websiteImg}>
            <div className={styles.portraitImgContainer} >
                <img src={props.projectProps.img[0]} alt="bgImg" style={{ height: '45vh' }} />
            </div>
            <div className={styles.portraitImgContainer} >
                <img src={props.projectProps.img[1]} alt="bgImg" style={{ height: '45vh' }} />
            </div>
        </div> :
        <div className={styles.websiteImg}>
            <div className={styles.portraitImgContainer}>
                <img src={props.projectProps.img[0]} alt="bgImg" style={{ height: '30vh' }} />
            </div>
            <div className={styles.portraitImgContainer}>
                <img src={props.projectProps.img[1]} alt="bgImg" style={{ height: '30vh' }} />
            </div>
            <div className={styles.portraitImgContainer}>
                <img src={props.projectProps.img[2]} alt="bgImg" style={{ height: '30vh' }} />
            </div>
        </div>;
                
    return(
        <div ref={imgRef} className={styles.imgContainer}>
            {height < width ? displayImagesLandscape : displayImagesPortrait}
        </div>
    );
};

export default WebsiteImgCarousel;