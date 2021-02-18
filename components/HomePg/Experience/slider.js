import { useState, useEffect } from 'react';
import styles from '../../../styles/Experience.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import WebsiteImgCarousel from './WebsiteImgCarousel';


const slider = (props) => {

    // setup drag slide and background for slides

    return (
        <div className={styles.sliderContainer} >
             {
             props.projectProps.map((objArr) => {
                return (
                    <div style={{ transform: `translateX(${props.sliderPos}%)`, minWidth: '100vw', transitionDuration: '0.5s' }}>
                        <div className={styles.carouselContainer}>    
                            <div className={styles.imgCarouselContainer} style={{ left: props.carouselPos }}>
                                <WebsiteImgCarousel 
                                    projectImages={objArr.img}
                                />
                            </div>
                            <div className={styles.experienceInfoContainer} style={{ transform: `translateX(${props.infoPos})`, right: props.carouselPos }}>

                                {props.isDesktopLg ? 
                                <div className={styles.tag} onClick={props.toggleInfoWidth}>
                                    {props.infoPos === '0' ? 
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
                    </div>
                );
            })
        };
        </div>
    );
};

export default slider;