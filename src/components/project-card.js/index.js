import React from 'react'
import Tags from '../tags'
import './style.scss'

const ProjectCard = ({ data, key }) => {
    return (
        <div class="scale">
            <div class="card scale-image" style={{ background: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${data.frontmatter.thumb?.childImageSharp?.fluid?.src})` }}>
                {data.frontmatter.title}
                <Tags tags={data.frontmatter.stack} />
                {data.frontmatter?.link && <a href={data.frontmatter.link} className="button" target="_blank" rel="noreferrer" >VISIT</a>}
            </div>
        </div>
    )
}

export default ProjectCard