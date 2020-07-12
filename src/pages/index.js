import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/navbar/Navbar"
import ImageCarousel from "../components/ImageCarousel"
import Helmet from "react-helmet"
import { Row, Col } from "antd"
import Img from "gatsby-image/withIEPolyfill"

const IndexPage = props => {
  return (
    <>
      <Helmet>
        <title>Kailey Tam</title>
      </Helmet>
      <Navbar />
      <Row
        gutter={[16, 100]}
        justify="center"
        style={{ backgroundColor: "#f6debc", paddingTop: "60px" }}
      >
        <Col>
          <ImageCarousel />
        </Col>
      </Row>
      <Row
        gutter={[48, 100]}
        justify="center"
        align="middle"
        style={{ backgroundColor: "#f6debc" }}
      >
        <Col lg={8} xs={24}>
          <Img
            fluid={props.data.comingSoon.childImageSharp.fluid}
            objectFit="cover"
            alt="coming-soon"
          />
        </Col>
        <Col lg={8} xs={24}>
          <h1
            style={{
              fontFamily: "Montserrat Semibold",
              textTransform: "uppercase",
              letterSpacing: "5px",
              paddingBottom: "40px",
            }}
          >
            On The Way Home
          </h1>
          <p
            style={{
              fontFamily: "Avenir Light",
              fontSize: "16px",
              color: "#000000",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Col>
      </Row>
    </>
  )
}

export default IndexPage

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
    comingSoon: file(relativePath: { eq: "coming_soon_image.jpg" }) {
      ...fluidImage
    }
  }
`
