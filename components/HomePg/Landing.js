import React, { useRef, useState, useEffect } from 'react';

import styles from '../../styles/Home.module.css';
import LandingPageBg from '../svgAnimations/landingPageBg';
import NameSvg from '../svgAnimations/TextSvg/nameSvg';
import DesignerSvg from '../svgAnimations/TextSvg/designerSvg';

const LandingPage = () => {
    const [fillTitle, setFillTitle] = useState('transparent');
    const [svgLoaded, setSvgLoaded] = useState(false);
    const [iterationCounter, setIterationCounter] = useState(0);

    const developerRef = useRef('');

    const colour0 = '#f58f7c';
    const colour1 = '#4f4f51';
    const colour2 = '#f2c4ce';

    let counter = 0

    const triggerDesignAnimation = () => {
        counter++;
        setIterationCounter(counter);
        console.log(iterationCounter)
    }

    useEffect(() => {
        if(svgLoaded) {
            setTimeout(() => {
            setFillTitle('#d6d6d6');
                
            }, 3000);
        }
    })

    useEffect(() => {
        developerRef.current.addEventListener('animationiteration', triggerDesignAnimation);

        return () => {
            developerRef.current.removeEventListener('animationiteration', triggerDesignAnimation);
        } 
    },[])

    return (
        <div className={styles.landingContainer}>
            <LandingPageBg 
                setSvgLoaded={setSvgLoaded}
            />
            <div className={styles.mainTitle}>
                <NameSvg 
                    fillTitle={fillTitle}
                    svgLoaded={svgLoaded}
                />
            </div>
            <div className={styles.secondaryTitle}>
                <h2 className={svgLoaded ? "frontEndAnimation frontEnd" : "frontEnd"}>front end</h2>
                <div className={styles.innerSecondaryTitle}>
                    <h2 ref={developerRef} className={ svgLoaded ? "developer developerAnim" : "developer" }>developer &amp; </h2>
                    <DesignerSvg 
                        iterationCounter={iterationCounter}
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;