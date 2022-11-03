import React, { useState } from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Spin as Hamburger } from 'hamburger-react'
import { graphql, useStaticQuery } from 'gatsby'
import './style.scss'

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

    const _clickHandler = (option) => {
        setOpen(false);
        setSelected(option.name)
    }

    const _handleScroll = (id) => {
        const titleElement = document.getElementById(id)
        titleElement.scrollIntoView({ behavior: 'smooth' })
        return false
    }

    const _getList = () => <ul className="option-menu">
        {menuOptions &&
            menuOptions.map((option, index) =>
                <li role="presentation" key={'menu2' + index} className={selected === option.name ? "current" : ""} onClick={() => _clickHandler(option)}>
                    <a href={() => false} onClick={() => _handleScroll(option.slug)} data-hover={option.name}>{option.name}</a>
                </li>
            )}
    </ul>

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
                {_getList()}
                <a href="https://media-exp1.licdn.com/dms/document/C562DAQH6DsyaFYBNwQ/profile-treasury-document-pdf-analyzed/0/1657293979538?e=1668643200&v=beta&t=u0iDRA_v9w8xdJJXBu2bO_G36vHMwAui-t8nmjkEcXo"
                    rel="noreferrer" className="download-CV" target="_blank" download>DOWNLOAD CV</a>
            </div>
            <div className="options-hamburger">
                <Hamburger toggled={isOpen} toggle={setOpen} size={20} color="#58595b" />
                {isOpen && <div className="header-slider">
                    {_getList()}
                </div>}
            </div>
        </header>
    )
}

export default HeaderNavBar
