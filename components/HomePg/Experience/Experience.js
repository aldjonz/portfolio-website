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
                setCarouselPos('-25%');
            } else {
                setCarouselPos('0%');
            }
        }
    })

    const projectProperties = [
        {
            id: '0',
            title: 'Delpero Freight',
            text: 'Delpero Freight Text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio.',
            img: [
                'https://images.unsplash.com/photo-1612219081356-5b8e07ca3b6d?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8cm5TS0RId3dZVWt8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1612203067417-e94daab1bed2?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8cm5TS0RId3dZVWt8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1468127225977-85bc4aa3fe0f?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fHJuU0tESHd3WVVrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1483397242829-5a301431e002?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfHJuU0tESHd3WVVrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            ],
            link: {
                title: 'delperofreight.com',
                url: '/https://delperofreight.com/',
            },
        },
        {
            id: '1',
            title: 'Personal Project',
            text: 'Personal Projec Text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio.',
            img: [
                'https://images.unsplash.com/photo-1613047503507-b8d01ce6af26?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Sjl5clBhSFhSUVl8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1612677318581-c9cb7197d0a6?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Sjl5clBhSFhSUVl8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            ],
            link: {
                title: 'heloo.com',
                url: ''
            }
        },
    ];

    const dragSlider = (e) => {
        let posX = e.clientX
        let width = window.innerWidth;
        let mouseDif = initialMousePos - posX;

        setCurrentMousePos(posX);
        setMousePosDif(mouseDif);
        setSliderPos(prevState => prevState);

        
        console.log(initialMousePos, mouseDif);

    }

    const handleDragEnd = (e) => {
        expRef.current.removeEventListener('mousemove', dragSlider, true);

        let finalPosX = e.clientX;

        setFinalMousePos(finalPosX);

    }

    const handleDragStart = (e) => {
        let initialPosX = e.clientX;
        setInitialMousePos(initialPosX);

        expRef.current.addEventListener('mousemove', dragSlider, true);
        expRef.current.addEventListener('mouseup', handleDragEnd, true)

    }



    const handleKeyDown = (e) => {
        if(e.keyCode === 37 && sliderPos < 0) {
            setSliderPos(prevState => prevState + 100);
        } else if (e.keyCode === 39 && sliderPos > (projectProperties.length - 1) * -100 ) {
            setSliderPos(prevState => prevState - 100);
        }
        // console.log(sliderPos)
    }

    return (
        <div ref={expRef} className={styles.experienceContainer} onKeyDown={e => handleKeyDown(e)} onMouseDown={e => handleDragStart(e)} >
            <div className={styles.experienceBg}>
                {/* <ExperienceBg /> */}
            </div>
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