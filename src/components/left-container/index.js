import * as React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
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
        <StaticImage src={"../../images/prathamesh-profile.jpg"} alt="Prathamesh Profile Picture" />
    )
}

export default LeftContainer