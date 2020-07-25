import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import Helmet from "react-helmet"
import Navbar from "../components/navbar/Navbar"
import { Row, Col } from "antd"
import moment from "moment"

const blogTemplate = ({ data }) => {
  const { title, date, featuredImage } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  let formattedDate = moment.utc(date).format("DD/MMM/YYYY")

  return (
    <>
      <Helmet>
        <style>{"body { background-color: #f6debc }"}</style>
        <title>Kailey Tam - {title}</title>
      </Helmet>
      <Navbar />
      <Row>
        <Col span={24}>
          <p>{title}</p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <p>Written by Kailey Tam</p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <p>{formattedDate}</p>
        </Col>
      </Row>
      {/* <div>
        {featuredImage && (
          <Img
            fluid={featuredImage.childImageSharp.fluid}
            objectFi="cover"
            alt="blogImage"
          />
        )}
        <h1>{title}</h1>
        <h2>{date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div> */}
    </>
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
