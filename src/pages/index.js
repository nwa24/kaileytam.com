import React from "react"
import Navbar from "../components/navbar/Navbar"
import { Container } from "react-bootstrap"
import ImageCarousel from "../components/ImageCarousel"
import Helmet from "react-helmet"

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Kailey Tam</title>
      </Helmet>
      <Navbar />
      <Container fluid style={{ backgroundColor: "#f6debc" }}>
        <ImageCarousel />
      </Container>
    </>
  )
}

export default IndexPage
