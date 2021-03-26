import React, { useRef } from 'react';
import styles from '../../../styles/Experience.module.css';
import { useWindowSize } from '../../Hooks/hooks';
import { CarouselProvider, Slider, Slide, ButtonNext, ButtonBack } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const WebsiteImgCarousel = (props) => {
    const imgRef = useRef();

    const [width, height] = useWindowSize();

    let displayImagesLandscape = props.projectProps.img.map((image, i) => {
        return (
            <Slide index={i} key={i}>
                <div className={styles.websiteImg}>
                    <img src={image} alt="Background Image" />
                </div>
            </Slide>
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
                <CarouselProvider
                    naturalSlideWidth={width}
                    naturalSlideHeight={height * 1.8}
                    totalSlides={props.projectProps.img.length}
                    isPlaying={true}
                    interval={4000}
                    dragEnabled={false}
                    infinite={true}
                >
                    <Slider>
                        {displayImagesLandscape} 
                    </Slider>
                    <ButtonBack className="carouselNextImg" onClick={props.closeInfoTab}></ButtonBack>
                    <ButtonNext className="carouselBackImg" onClick={props.closeInfoTab}></ButtonNext>
                </CarouselProvider>
                : displayImagesPortrait
            }
        </div>
    );
};

export default WebsiteImgCarousel;