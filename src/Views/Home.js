import React from 'react'
import Welcome from './Welcome';
import Slider from './Slider';
import SEOtools from './SEOtools';
import Features from './Features';
import Steps from './Steps';
import ReviewSlider from './ReviewSlider';
import Faq from './Faq';
import Pricing from "./Pricing";
import Footer from '../Common/Footer';
import Navbar from '../Common/Navbar';

export default function Home() {
    return (
        <>
            <div id="top" className='absolute top-0'></div>
            <Navbar />
            <Welcome />
            <Slider />
            <SEOtools />
            <Features />
            <Steps />
            <Pricing />
            <ReviewSlider />
            <Faq />
            <Footer />
        </>
    )
}
