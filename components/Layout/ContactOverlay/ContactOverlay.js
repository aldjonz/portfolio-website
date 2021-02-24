import React, { useState, useEffect } from 'react';
import SocialMedia from '../../UI/socialMediaIcons';
import CloseButton from './closeButton';

const ContactOverlay = () => {
    const [contactColour, setContactColour] = useState('#d6d6d6');
    const [prevXPos, setPrevXPos] = useState('200%');
    const [overlayXPos, setOverlayXPos] = useState('200%');

    const lightText = () => {
        setContactColour('#d6d6d6');
    };
    const darkText = () => {
        setContactColour('#2c2b30');
    }

    useEffect(() => {
        window.onscroll = () => {
            if(window.scrollY > window.innerHeight * 1.65) {
                lightText();
            } else if(window.scrollY > window.innerHeight * 0.95) {
                darkText();
            } else if(window.scrollY < window.innerHeight * 0.95) {
                lightText();
            } 
        }
        return function cleanup() {
            window.onscroll()
        }
    });


    const openOverlay = () => {
        setOverlayXPos('0%');

        document.documentElement.style.overflow = "hidden";

    }

    const closeOverlay = () => {
        if(prevXPos === '200%') {
            setOverlayXPos('-200%');
            setPrevXPos('-200%');
        } else { 
            setOverlayXPos('200%');
            setPrevXPos('200%');
        }

        document.documentElement.style.overflowY = "scroll";
        document.documentElement.style.overflowX = "hidden";
    }

    return (
        <div className="contactContainer">
            <div className="contactButtonWrapper">
                <h2 onClick={openOverlay} style={{ color: contactColour, transitionDuration: '0.2s' }}>contact</h2>
            </div>
            <div className="contactOverlay" style={{ transform: `translateX(${overlayXPos})` }}>
                <div className="contactDetailsContainer" >
                    <CloseButton 
                        closeOverlay={closeOverlay}
                    />
                    <div className="emailAddressContainer">
                        <h4>Get in Touch</h4>
                        <a href="mailto:support@aledjones.dev"><span>support@aledjones.dev</span></a>
                    </div>
                    <div className="socialMediaLinksContainer">
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactOverlay;