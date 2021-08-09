import React from 'react'
import AboutSection from './about-section'
import HomeSection from './home-section'
import './style.scss'

const InformationContainer = () => {
    return (
        <div className="information-box">
            <HomeSection />
            <AboutSection />
            <div className="common-section">dff</div>
        </div>
    )
}

export default InformationContainer