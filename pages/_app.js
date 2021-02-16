import React, { useEffect } from 'react';

import '../styles/globals.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    Aos.init({ 
        duration: 1000,
        easing: 'ease',
    });
    Aos.refresh();
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
