import React from "react"
import Navbar from "../components/navbar/Navbar"
import { Container, Row, Col } from "react-bootstrap"
import ImageCarousel from "../components/ImageCarousel"

const IndexPage = () => (
  <>
    <Navbar />
    <Container fluid style={{ backgroundColor: "#f6debc" }}>
      <ImageCarousel />
    </Container>
  </>
)

export default IndexPage
