import React, { useState, useEffect } from 'react';
import SocialMedia from '../../UI/socialMediaIcons';
import CloseButton from './closeButton';

const ContactOverlay = () => {
    const [overlayHeight, setOverlayHeight] = useState('0vh');
    const [overlayZIndex, setOverlayZIndex] = useState('0');
    const [overlayTopPos, setOverlayTopPos] = useState('50vh');
    const [contactColour, setContactColour] = useState('#d6d6d6');

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
        setOverlayZIndex('2000');
        setOverlayHeight('100vh');
        setOverlayTopPos('0');
        document.documentElement.style.overflow = "hidden"
    }

    const closeOverlay = () => {
        setOverlayHeight('0vh');
        setOverlayZIndex('0');
        setOverlayTopPos('50vh');
        document.documentElement.style.overflow = "scroll"
    }

    return (
        <div className="contactContainer">
            <div className="contactButtonWrapper">
                <h2 onClick={openOverlay} style={{ color: contactColour, transitionDuration: '0.2s' }}>contact</h2>
            </div>
            <div className="contactOverlay" style={{ height: overlayHeight, zIndex: overlayZIndex, top: overlayTopPos }}>
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