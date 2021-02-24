import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from '../../Hooks/hooks';
import styles from '../../../styles/Experience.module.css';
import { useIsVisible } from 'react-is-visible';
import ExperienceBg from '../../svgAnimations/experienceBg';

import WebsiteInfo from './WebsiteInfo';

const Experience =(props) => {
    const [carouselPos, setCarouselPos] = useState('0');
    const [sliderPos, setSliderPos] = useState(0);
    const [initialMousePos, setInitialMousePos] = useState(0);
    const [finalMousePos, setFinalMousePos] = useState(0);
    const [currentMousePos, setCurrentMousePos] = useState(0);
    const [mousePosDif, setMousePosDif] = useState();

    const isDesktopLg = useMediaQuery(1400);

    const expRef = useRef();
    const isVisible = useIsVisible(expRef);

    useEffect(() => {
        if(!isDesktopLg) {
            if(isVisible) {
                setCarouselPos('-20%');
            } else {
                setCarouselPos('0%');
            }
        }
    })

    const projectProperties = [
        {
            id: '0',
            orientation: 'portrait',
            title: 'Delpero Freight',
            text: 'Delpero Freight is a virtual trucking company for the popular games European Truck Simulator and Euro Truck Simulator. When building this website I used Next.js with CSS. I really developed my understanding of scroll and page transition animations in this project.',
            img: [
                '/images/delpero-freight-img-0.png',
                '/images/delpero-freight-img-1.png',
                '/images/delpero-freight-img-2.png',
                '/images/delpero-freight-img-3.png',
                '/images/delpero-freight-img-4.png',
                '/images/delpero-freight-img-5.png',
                '/images/delpero-freight-img-6.png',
            ],
            // link: {
            //     title: 'delperofreight.com',
            //     url: '/https://delperofreight.com/',
            // },
        },
        {
            id: '1',
            orientation: 'landscape',
            title: 'Antur Expeditions',
            text: 'Antur Expeditions is a hypothetical outdoor adventure sports and expedition company. I built the entire landscape in CSS and really enhanced my knowledge of CSS animations. The sky changes colour depending on the time of day that the user accesses the website as well as the shadows changing position depending on the position of the sun.',
            img: [
                '/images/antur-img-0.png',
                '/images/antur-img-1.png',
                '/images/antur-img-2.png',
            ],
            // link: {
            //     title: 'heloo.com',
            //     url: ''
            // }
        },
        {
            id: '2',
            orientation: 'landscape',
            title: 'Ahoj Tours',
            text: 'Ahoj Tours is a hypothetical city tour and guide company. One of my first projects in Next.js, it mainly came about in order to develop my skill with the technology and my eye for web design.',
            img: [
                '/images/ahoj-img-0.png',
                '/images/ahoj-img-1.png',
            ],
            // link: {
            //     title: 'heloo2.com',
            //     url: ''
            // }
        },
    ];

    return (
        <div ref={expRef} className={styles.experienceContainer} >
            <WebsiteInfo
                projectProps={projectProperties} 
                carouselPos={carouselPos}
                isDesktopLg={props.isDesktopLg}
                sliderPos={sliderPos}
            />
        </div>
    );
};

export default Experience;