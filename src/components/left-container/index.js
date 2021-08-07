import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
        <GatsbyImage image={getImage(data.file.childImageSharp.gatsbyImageData)} alt="Prathamesh Profile Picture" />
    )
}

export default LeftContainer