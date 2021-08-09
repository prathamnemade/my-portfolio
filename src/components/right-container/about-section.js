import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const AboutSection = () => {
    const data = useStaticQuery(graphql`
    query AboutData {
            allFile(
              filter: {name: {eq: "about"}, childMarkdownRemark: {frontmatter: {title: {eq: "About"}}}}
            ) {
              edges {
                node {
                  name
                  childrenMarkdownRemark {
                    frontmatter {
                      title
                    }
                    html
                  }
                }
              }
            }
          }
    `)
    const aboutData = data?.allFile?.edges[0]?.node?.childrenMarkdownRemark[0]?.html

    return (
        <div id="about-section" className="common-section align-center" >
            <div className="heading">ABOUT</div>
            <div
                className="about-content"
                dangerouslySetInnerHTML={{ __html: aboutData }}
            />
        </div>)
}

export default AboutSection





