import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const HeaderNavBar = () => {
    return (
        <header className="header-container">
            <div className="name-container">
                <StaticImage className="profile-icon" src={"../../images/prathamesh-icon.jpg"} alt="Prathamesh Profile Picture" />
                <div>
                    <div>PRATHAMESH</div>
                    <div>NEMADE</div>
                </div>
            </div>
            <div className="options-container">
                <a href="https://media-exp1.licdn.com/dms/document/C4D2DAQHGCrPwlSUIIg/profile-treasury-document-pdf-analyzed/0/1628162692146?e=1628366400&v=beta&t=uwNeBZ7-eyURyq1YqBcWT3UtX81bhAJmCnqSirVOKbM"
                    rel="noreferrer" className="download-CV" target="_blank" download>DOWNLOAD CV</a>
            </div>
            <div className="options-hamburger">
                
            </div>
        </header>
    )
}

export default HeaderNavBar