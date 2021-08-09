import React from 'react'
import './style.scss'

const ProjectCard = ({ data, key }) => {
    return (
        <div class="scale">
            <div class="card scale-image" style={{ background: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${data.frontmatter.thumb?.childImageSharp?.fluid?.src})` }}>
                {data.frontmatter.title}
                <p>{data.frontmatter.stack}</p>
                {data.frontmatter?.link && <a href={data.frontmatter.link} className="button" target="_blank" rel="noreferrer" >VISIT</a>}
            </div>
        </div>
    )
}

export default ProjectCard