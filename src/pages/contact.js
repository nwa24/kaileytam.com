import React from "react"
import Navbar from "../components/navbar/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import ContactForm from "../components/contact/ContactForm"
import Helmet from "react-helmet"
import { Row, Col } from "antd"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import LineBreak from "../components/LineBreak"

// Row = 12 cols or 100%
const contact = props => {
  return (
    <div style={{ backgroundColor: "#f6debc" }}>
      <Helmet>
        <style>{"body { background-color: #f6debc }"}</style>
        <title>Kailey Tam - Contact</title>
      </Helmet>
      <Navbar />
      <Row
        justify="center"
        align="middle"
        gutter={[64, 64]}
        style={{ backgroundColor: "#f6debc", paddingTop: "60px" }}
      >
        <Col lg={8} xs={24}>
          <Img
            fluid={props.data.headshot.childImageSharp.fluid}
            objectFit="cover"
            alt="headshot"
          />
        </Col>
        <Col lg={8} xs={24}>
          <Row justify="start" align="middle" gutter={[0, 48]}>
            <Col lg={16} xs={20}>
              <h2 style={{ fontFamily: "Avenir Light", color: "#2c422f" }}>
                Hi friends,
              </h2>
            </Col>
            <Col lg={6} xs={4}>
              <Img
                fluid={props.data.avatar.childImageSharp.fluid}
                objectFit="cover"
                alt="avatar"
              />
            </Col>
            <Row justify="start" style={{ backgroundColor: "#f6debc" }}>
              <Col lg={24} xs={24}>
                <p style={{ fontFamily: "Avenir Light", color: "#000000" }}>
                  My name is Kailey and welcome to my blog. I write poetry and
                  occasionally copywrite for other people. On this blog, you’ll
                  find line-by-line analyses of my poems, the behind-the-scenes
                  look at the making of on the way home, as well as the sporadic
                  journal entry. What began as a fun project in the midst of
                  quarantine season became a legitimate poetry chapbook,
                  copyright and all. I’m so excited for you to see not only my
                  work, but the process behind it. Thank you for all your
                  support and enjoy!
                </p>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
      <LineBreak width="350px" colour="#2c422f" />
      <Row
        justify="center"
        style={{
          paddingBottom: "10px",
          backgroundColor: "#f6debc",
          paddingTop: "50px",
        }}
      >
        <Col>
          <h1 className="contact-form-header">Get In Touch</h1>
        </Col>
      </Row>
      <Row
        justify="center"
        style={{ paddingBottom: "20px", backgroundColor: "#f6debc" }}
      >
        <Col span={24}>
          <ContactForm />
        </Col>
      </Row>
    </div>
  )
}

export default contact

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    headshot: file(relativePath: { eq: "headshot2.jpeg" }) {
      ...fluidImage
    }
    avatar: file(relativePath: { eq: "kailey-avatar.png" }) {
      ...fluidImage
    }
  }
`
