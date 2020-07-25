import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const blogTemplate = ({ data }) => {
  const { title, date, featuredImage } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  return (
    <div>
      <Img
        fluid={featuredImage.childImageSharp.fluid}
        objectFi="cover"
        alt="blogImage"
      />
      <h1>{title}</h1>
      <h2>{date}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default blogTemplate

export const blogTemplateQuery = graphql`
  query BlogPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        featuredImage {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
