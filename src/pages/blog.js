import React from "react"
import Navbar from "../components/navbar/Navbar"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { Row, Col } from "antd"

const blog = ({ data }) => {
  console.log(data) // TESTING
  const { title, date } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  return (
    <>
      <Helmet>
        <title>Kailey Tam - Blog</title>
      </Helmet>
      <Navbar />
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>{date}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Col>
      </Row>
    </>
  )
}

export default blog

export const IndexQuery = graphql`
  query BlogQuery {
    markdownRemark(fields: { slug: { eq: "example-blog-1" } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
