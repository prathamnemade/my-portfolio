import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ProjectCard from '../project-card.js'

const PortfolioSection = () => {
    const data = useStaticQuery(graphql`
        query PortfolioData {
            allMarkdownRemark(
            filter: {frontmatter: {type: {eq: "portfolio"}}}
            sort: {order: DESC, fields: frontmatter___date}
            ) {
            nodes {
                frontmatter {
                stack
                title
                type
                link
                date(formatString: "DD-MM-YYYY")
                thumb {
                    childImageSharp {
                        fluid {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
                }
            }
            }
        }
    `)

    const PROECTS = data.allMarkdownRemark.nodes
    console.log("data", data.allMarkdownRemark.nodes);
    return (
        <div id="portfolio-section" className="common-section">
            <div className="heading">PROJECTS</div>
            {PROECTS && PROECTS.map((project, index) => <ProjectCard key={'project' + index} data={project} />)}
        </div>
    )
}

export default PortfolioSection