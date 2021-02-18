import React, { useState, useRef } from 'react';
import { useMediaQuery } from '../../Hooks/hooks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../styles/Experience.module.css';
import WebsiteImgCarousel from './WebsiteImgCarousel';

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function WebsiteInfo(props) {
    const [infoPos, setInfoPos] = useState('0');

    const isDesktopLg = useMediaQuery(1400);

    const carouselRef = useRef('');

    const toggleInfoWidth = () => {
        if(infoPos === '0') {
            setInfoPos('100%');
        } else {
            setInfoPos('0');
        }
    }

    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={200}
            totalSlides={2}
            isPlaying={true}
            interval={8000}
        >
            <div className={styles.carouselWrapper}>
                <Slider>
                {props.projectProps.map((objArr) => {
                    return (
                        <Slide index={objArr.id}>
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