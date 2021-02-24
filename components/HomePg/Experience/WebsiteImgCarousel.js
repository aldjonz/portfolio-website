import React, { useRef } from 'react';
// import Slider from "react-slick";
import { useWindowSize } from '../../Hooks/hooks';

// import { CarouselProvider, Slider, Slide, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
import Carousel from 'nuka-carousel';

import styles from '../../../styles/Experience.module.css';

const WebsiteImgCarousel = (props) => {
    const imgRef = useRef();
    const sliderRef = useRef('');

    const [width, height] = useWindowSize();

    let displayImagesLandscape = props.projectProps.img.map((image, i) => {
        return (
            <div className={styles.websiteImg} key={i}>
                <img src={image} alt="bgImg" />
            </div>
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
        <div ref={imgRef} className={styles.imgContainer} >
            {height < width ?    
                <Carousel
                    autoplay={true}
                    dragging={false}
                    swiping={false}
                    pauseOnHover={false}
                    wrapAround={true}
                    speed={2000}
                    width="100%"
                    defaultControlsConfig={{
                        nextButtonText: ' ',
                        nextButtonStyle: {
                            background: 'none',
                            // fontFamily: 'Poppins, sans-serif'
                            cursor: 'unset',
                        },
                        prevButtonText: ' ',
                        prevButtonStyle: {
                            background: 'none',
                            // fontFamily: 'Poppins, sans-serif',
                            cursor: 'unset',
                        },
                        pagingDotsStyle: {
                            fill: 'none',
                            cursor: 'unset',
                          }
                      }}
                >
                    {displayImagesLandscape} 
                </Carousel>
                : displayImagesPortrait
            }
        </div>
    );
};

export default WebsiteImgCarousel;