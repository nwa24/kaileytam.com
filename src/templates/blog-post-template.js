import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import Helmet from "react-helmet"
import Navbar from "../components/navbar/Navbar"
import { Row, Col } from "antd"
import moment from "moment"
import Footer from "../components/footer"

const blogTemplate = ({ data }) => {
  const { title, date, featuredImage } = data.post.frontmatter
  const { html } = data.post

  let formattedDate = moment.utc(date).format("DD/MMM/YYYY")

  return (
    <>
      <Helmet>
        <style>{"body { background-color: #f7f3e9 }"}</style>
        <title>Kailey Tam - {title}</title>
      </Helmet>
      <Navbar />
      <div style={{ paddingTop: "60px" }}>
        <Row align="middle" gutter={[8, 8]}>
          <Col span={18} offset={2}>
            <p
              style={{
                fontFamily: "Montserrat Medium",
                fontSize: "40px",
                marginBottom: "0px",
                letterSpacing: "2px",
              }}
            >
              {title}
            </p>
            <p
              style={{
                fontFamily: "Avenir Light",
                color: "#ca5743",
                marginBottom: "0px",
              }}
            >
              Written by Kailey Tam
            </p>
            <p style={{ fontFamily: "Avenir Light" }}>{formattedDate}</p>
          </Col>
          <Col lg={2} xs={0}>
            <Img
              fluid={data.avatar.childImageSharp.fluid}
              objectFit="cover"
              alt="avatar"
            />
          </Col>
        </Row>
        {featuredImage && (
          <Row justify="center" gutter={[8, 48]}>
            <Col span={20}>
              <Img
                fluid={featuredImage.childImageSharp.fluid}
                objectFit="cover"
                alt="blogImage"
              />
            </Col>
          </Row>
        )}
        <Row justify="center" gutter={[8, 48]}>
          <Col span={20}>
            <div
              style={{ fontFamily: "Avenir Light", color: "#000000" }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Col>
        </Row>
      </div>
      <Footer />
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
            fluid(quality: 100, maxWidth: 1000, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
    avatar: file(relativePath: { eq: "kailey-avatar.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
