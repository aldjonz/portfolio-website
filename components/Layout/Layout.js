 import React from 'react';
import ContactOverlay from './ContactOverlay/ContactOverlay';

const Layout = (props) => (
    <div className="container">
        <ContactOverlay />
        {props.children}
    </div>
);

export default Layout;