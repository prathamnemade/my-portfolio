import * as React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const LeftContainer = () => {
    const data = useStaticQuery(graphql`
        query Banner {
            file(relativePath: {eq: "prathamesh.jpg"}) {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
  ` )
    return (
        <StaticImage src={"../../images/prathamesh.jpg"} alt="Prathamesh Profile Picture" />
    )
}

export default LeftContainer