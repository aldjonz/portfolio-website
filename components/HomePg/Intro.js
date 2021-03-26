import styles from '../../styles/Intro.module.css';
import IntroBg from '../svgAnimations/introBg';

const Intro = () => {

    return (
        <div className={styles.introContainer}>
            <div className={styles.introBg}>
                    <div className={styles.introText}>
                        <h2 
                            data-aos="fade-right"
                            data-aos-easing="linear"    
                        >I am a UK based front end developer &amp; designer</h2>
                        <br />
                        <p 
                            data-aos="fade-left"
                            data-aos-easing="linear"    
                        >I design and build modern and high quality websites and applications tailored to your business whilst providing attentive customer service. I always strive to create the highest quality products and to push myself in my work.</p>
                    </div>
                <IntroBg />
            </div>
                
        </div>
    );              
};

export default Intro;