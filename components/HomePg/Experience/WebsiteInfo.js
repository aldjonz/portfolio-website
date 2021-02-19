import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery, useWindowSize } from '../../Hooks/hooks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../styles/Experience.module.css';
import WebsiteImgCarousel from './WebsiteImgCarousel';

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function WebsiteInfo(props) {
    const [infoPos, setInfoPos] = useState('0');
    const [windowHeight, setWindowHeight] = useState(null);
    const [widnowWidth, setWindowWidth] = useState(null);

    const carouselRef = useRef('');

    const [width, height] = useWindowSize();
    const isDesktopLg = useMediaQuery(1400);


    const toggleInfoWidth = () => {
        if(infoPos === '0') {
            setInfoPos('100%');
        } else {
            setInfoPos('0');
        }
    }

    const updateDimensions = () => {
        setWindowHeight(window.innerHeight);
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        }
    },[])

    return (
        <CarouselProvider
            ref={carouselRef}
            naturalSlideWidth={widnowWidth}
            naturalSlideHeight={windowHeight}
            totalSlides={props.projectProps.length}
            isPlaying={true}
            interval={8000}
            // className="carouselStyle"
        >
            <div className={styles.carouselWrapper}>
                <Slider>
                {props.projectProps.map((objArr) => {
                    return (
                        <Slide index={objArr.id} key={objArr.id} className="carouselStyle">
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
                        </Slide>
                    ) 
                })} 
                </Slider>
            </div>  
        </CarouselProvider>
    );
};

export default WebsiteInfo;