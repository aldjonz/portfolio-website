import React, { useState, useRef } from 'react';
import { useWindowSize } from '../../Hooks/hooks';
import styles from '../../../styles/Experience.module.css';
import WebsiteImgCarousel from './WebsiteImgCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CarouselProvider, Slider, Slide, ButtonNext, ButtonBack } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function WebsiteInfo(props) {
    const [infoPos, setInfoPos] = useState('200%');
    const [headerPos, setHeaderPos] = useState('80%');

    const carouselRef = useRef('');

    const [width, height] = useWindowSize();
    
    const openInfoTab = () => {
        setInfoPos('0');
        setHeaderPos('-50vw');
    }

    const closeInfoTab = () => {
        setHeaderPos('80%');            
        setInfoPos('200%');
    }

    return (
        <CarouselProvider
            ref={carouselRef}
            naturalSlideWidth={width}
            naturalSlideHeight={height}
            totalSlides={props.projectProps.length}
            isPlaying={true}
            interval={10000}
            infinite={true}
        >
            <div className={styles.carouselWrapper}>
                <Slider moveThreshold={0.3}>
                {props.projectProps.map((objArr) => {
                    return (
                        <Slide index={objArr.id} key={objArr.id} className="carouselStyle">
                            <div className={styles.carouselContainer} >    
                                <div className={styles.imgCarouselContainer} onClick={closeInfoTab} style={{ left: props.carouselPos }}>
                                    <WebsiteImgCarousel 
                                        projectProps={objArr}
                                        closeInfoTab={closeInfoTab}
                                    />
                                </div>
                                {props.isDesktopLg ? 
                                    <div className={styles.titleTag} onClick={openInfoTab} style={{ transform: `rotateZ(90deg) translateY(${headerPos})` }}>
                                        <p className={styles.titleTagText}>{objArr.title}</p>
                                        <p className={styles.titleTagLink}>Learn <br/>More</p>
                                    </div> :
                                    null
                                }
                                <div className={styles.experienceInfoContainer} style={{ transform: props.isDesktopLg ? `translateX(${infoPos})` : null, right: props.carouselPos }}>
        
                                    <div className={styles.projectTitle}>
                                        <h2>{objArr.title}</h2>
                                    </div>  
            
                                    <div className={styles.projectDescription}>
                                        <p>{objArr.text}</p>
                                    </div>

                                    {/* <a href={objArr.link.url}>
                                        <div className={styles.linkWrapper} >
                                            <span>{objArr.link.title}</span>
                                        </div>
                                    </a> */}
                                </div>
                            </div>
                        </Slide>
                    ) 
                })} 
                </Slider>
                <ButtonNext className="sliderButtonNext">
                    <FontAwesomeIcon icon={faChevronRight} />
                </ButtonNext>
                <ButtonBack className="sliderButtonBack">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </ButtonBack>
            </div>  
        </CarouselProvider>
    );
};

export default WebsiteInfo;