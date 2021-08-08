import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const LeftContainer = () => {
    const data = useStaticQuery(graphql`
        query Banner {
            file(relativePath: {eq: "prathamesh-profile.jpg"}) {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
  ` )

    return (
        <GatsbyImage image={getImage(data.file)} alt="Developers Image" />
    )
}

export default LeftContainer