import React, { useEffect, useState, useCallback } from 'react';
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout';
import LandingPage from '../components/HomePg/Landing';
import Experience from '../components/HomePg/Experience/Experience';
import IntroSection from '../components/HomePg/Intro';
import Skills from '../components/HomePg/Skills';
import ContactSection from '../components/HomePg/ContactSection';



export default function Home() {

  return (
    <Layout>
      <LandingPage />
      <IntroSection />
      <Experience />
      <Skills />
      <ContactSection />
    </Layout>
  )
}