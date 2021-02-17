import React, { useState, useRef } from 'react';
import { useMediaQuery } from '../../Hooks/hooks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../styles/Experience.module.css';
import Slider from "react-slick";
import WebsiteImgCarousel from './WebsiteImgCarousel';

function WebsiteInfo(props) {
    const [infoPos, setInfoPos] = useState('0');

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
        pauseOnFocus: false,
        fade: false,
        arrows: false,
        pauseOnHover: false,
        accessibility: true,
        rtl: true,
        swipeToSlide: true,
    };

    const toggleInfoWidth = () => {
        if(infoPos === '0') {
            setInfoPos('100%');
            carouselRef.current.slickPause();
        } else {
            setInfoPos('0');
            carouselRef.current.slickPlay();
        }
    }

    return (
        <div className={styles.carouselWrapper} >

            <Slider {...settings} ref={carouselRef}>
            
                {props.projectProps.map((objArr) => {
                    return (
                        <div className={styles.carouselContainer}>    
                            <div className={styles.imgCarouselContainer} style={{ left: props.carouselPos }}>
                                <WebsiteImgCarousel 
                                    projectImages={objArr.img}
                                />
                            </div>
                            <div className={styles.experienceInfoContainer} style={{ transform: `translateX(${infoPos})`, right: props.carouselPos }}>
        
                                {isDesktopLg ? 
                                <div className={styles.tag} onClick={toggleInfoWidth}>
                                    {infoPos === '0' ? 
                                        <FontAwesomeIcon className={styles.icon} icon={faChevronRight} /> :
                                        <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
                                    }
                                </div> : null }

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