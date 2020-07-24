import React from "react"
import { graphql } from "gatsby"

const blogTemplate = ({ data }) => {
  const { title, date } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  return (
    <div>
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
      }
      html
    }
  }
`
