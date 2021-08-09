import React from 'react'
import AboutSection from './about-section'
import ContactSection from './contact-section'
import HomeSection from './home-section'
import './style.scss'

const InformationContainer = () => {
    return (
        <div className="information-box">
            <HomeSection />
            <AboutSection />
            <ContactSection/>
        </div>
    )
}

export default InformationContainer