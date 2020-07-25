import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import Helmet from "react-helmet"
import Navbar from "../components/navbar/Navbar"
import { Row, Col } from "antd"
import moment from "moment"

const blogTemplate = ({ data }) => {
  console.log(data)
  const { title, date, featuredImage } = data.post.frontmatter
  const { html } = data.post

  let formattedDate = moment.utc(date).format("DD/MMM/YYYY")

  return (
    <>
      <Helmet>
        <style>{"body { background-color: #f6debc }"}</style>
        <title>Kailey Tam - {title}</title>
      </Helmet>
      <Navbar />
      <Row align="middle">
        <Col span={18}>
          <p>{title}</p>
        </Col>
        <Col span={2}>
          <Img
            fluid={data.avatar.childImageSharp.fluid}
            objectFit="cover"
            alt="avatar"
          />
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
      {featuredImage && (
        <Row>
          <Col span={24}>
            <Img
              fluid={featuredImage.childImageSharp.fluid}
              objectFit="cover"
              alt="blogImage"
            />
          </Col>
        </Row>
      )}
      <Row>
        <Col span={24}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Col>
      </Row>
    </>
  )
}

export default blogTemplate

export const blogTemplateQuery = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
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
    avatar: file(relativePath: { eq: "kailey-avatar.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
