import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/navbar/Navbar"
import ImageCarousel from "../components/ImageCarousel"
import Helmet from "react-helmet"
import { Row, Col } from "antd"
import Img from "gatsby-image/withIEPolyfill"
import LineBreak from "../components/LineBreak"
import styled from "styled-components"

const IndexPage = props => {
  return (
    <div style={{ backgroundColor: "f6debc" }}>
      <Helmet>
        <style>{"body { background-color: #f6debc }"}</style>
        <title>Kailey Tam</title>
      </Helmet>
      <Navbar />
      <Row
        gutter={[16, 100]}
        justify="center"
        style={{
          backgroundColor: "#f6debc",
          paddingTop: "60px",
          marginBottom: "0px",
        }}
      >
        <Col>
          <ImageCarousel />
        </Col>
      </Row>
      <Row justify="center" style={{ backgroundColor: "f6debc" }}>
        <Col>
          <LineBreak width="350px" colour="#2c422f" />
        </Col>
      </Row>
      <Row
        gutter={[48, 100]}
        justify="center"
        align="middle"
        style={{ backgroundColor: "#f6debc", paddingTop: "50px" }}
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
            ON THE WAY HOME is a handful of poems written over the course of
            five years about growing up. The narrative begins with baby steps
            away from home, escalates with the conflict of taking a wrong turn,
            accepts the need for a tune-up, and resolves with an elusive,
            unfinished ending. Even though this book has a start and an end, the
            narrative of growing up extends beyond these pages. This anthology
            represents a young, ever-evolving voice among billions, a voice that
            is still learning that the fight for significance is not a
            competition, but a demonstration of listening, rapport, and
            compassion.
          </p>
          <a href="https://www.kaileytam.com/contact">
            <p
              style={{
                fontFamily: "Avenir Light",
                fontSize: "16px",
                color: "#ca5743",
              }}
            >
              Get in contact now to order a book!
            </p>
          </a>
        </Col>
      </Row>
    </div>
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
