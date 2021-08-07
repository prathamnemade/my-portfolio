import React, { useState } from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Spin as Hamburger } from 'hamburger-react'
import { graphql, useStaticQuery } from 'gatsby'

const HeaderNavBar = () => {
    const data = useStaticQuery(graphql`
        query GetNavSettings {
            allMarkdownRemark(filter: {frontmatter: {title: {eq: "Nav Bar Settings"}}}) {
            edges {
                node {
                frontmatter {
                    options {
                        name
                        slug
                    }
                    title
                    }
                }
            }
            }
        }
  ` )
    const [isOpen, setOpen] = useState(false)
    const menuOptions = data?.allMarkdownRemark?.edges[0]?.node?.frontmatter?.options
    const [selected, setSelected] = useState(menuOptions[0].name)

    return (
        <header className="header-container">
            <div className="name-container">
                <div className="profile-icon">
                    <StaticImage src={"../../images/prathamesh-icon.jpg"} alt="Prathamesh Profile Picture" />
                </div>
                <div>
                    <div>PRATHAMESH</div>
                    <div>NEMADE</div>
                </div>
            </div>
            <div className="options-container">
                <ul className="option-menu">
                    {menuOptions &&
                        menuOptions.map((option, index) =>
                            <li key={'menu' + index} className={selected !== option.name || "current"} onClick={() => { setOpen(false); setSelected(option.name) }}>
                                <a href="#" data-hover={option.name}>{option.name}</a>
                            </li>
                        )}
                </ul>
                <a href="https://media-exp1.licdn.com/dms/document/C4D2DAQHGCrPwlSUIIg/profile-treasury-document-pdf-analyzed/0/1628162692146?e=1628366400&v=beta&t=uwNeBZ7-eyURyq1YqBcWT3UtX81bhAJmCnqSirVOKbM"
                    rel="noreferrer" className="download-CV" target="_blank" download>DOWNLOAD CV</a>
            </div>
            <div className="options-hamburger">
                <Hamburger toggled={isOpen} toggle={setOpen} size={20} color="#58595b" />
                {isOpen && <div className="header-slider">
                    <ul className="option-menu">
                        {menuOptions &&
                            menuOptions.map((option, index) =>
                                <li key={'menu' + index} className={selected !== option.name || "current"} onClick={() => { setOpen(false); setSelected(option.name) }}>
                                    <a href="#" data-hover={option.name}>{option.name}</a>
                                </li>
                            )}
                    </ul>
                </div>}
            </div>
        </header>
    )
}

export default HeaderNavBar