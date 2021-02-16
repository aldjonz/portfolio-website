import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from '../../Hooks/hooks';

import styles from '../../../styles/Experience.module.css';
import Slider from "react-slick";
import WebsiteImgCarousel from './WebsiteImgCarousel';
import Ripple from '../../svgAnimations/tapRipple';

function WebsiteInfo(props) {
    const [infoOpacity, setInfoOpacity] = useState('1');

    const isDesktopLg = useMediaQuery(1400);

    const carouselRef = useRef('');

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 15000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        draggable: true,
        autoplay: true,
        centerPadding: '0px',
        pauseOnFocus: true,
        fade: false,
        arrows: false,
        pauseOnHover: true,
        accessibility: true,
        rtl: true,
        swipeToSlide: true,
    };

    
    const focusImage = () => {
        if(isDesktopLg) {
            setInfoOpacity('0');
        }
        carouselRef.current.slickPause();
    };

    const unfocusImage = () => {
        if(isDesktopLg) {
            setInfoOpacity('1');
        }
        carouselRef.current.slickPlay();
    };

    return (
        <div className={styles.carouselWrapper} >

            <Slider {...settings} ref={carouselRef}>
            
                {props.projectProps.map((objArr) => {
                    return (
                        <div className={styles.carouselContainer}>

                        {isDesktopLg ? <Ripple opacity={infoOpacity} /> : null}
    
                        <div className={styles.imgCarouselContainer} style={{ left: props.carouselPos }}>
                            <WebsiteImgCarousel 
                                projectImages={objArr.img}
                                focus={focusImage}
                                unfocus={unfocusImage}
                            />
                        </div>
                        
                        <div className={styles.experienceInfoContainer} style={{ opacity: infoOpacity, right: props.carouselPos }}>
    
                            <div className={styles.projectTitle}>
                                <h2>{objArr.title}</h2>
                            </div>  
    
                            <div className={styles.projectDescription}>
                                <p>{objArr.text}</p>
                            </div>

                            <a href={objArr.link.url}>
                                <div className={styles.linkWrapper} >
                                    <span>{objArr.link.title}</span>
                                </div>
                            </a>

                        </div>
    
                    </div>
                    )
                })}

            </Slider>

        </div>  
    );
};

export default WebsiteInfo;