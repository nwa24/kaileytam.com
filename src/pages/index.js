import React from "react"
import Navbar from "../components/navbar/Navbar"
import { Container } from "react-bootstrap"

const IndexPage = () => (
  <>
    <Navbar />
    <Container fluid style={{ backgroundColor: "#f6debc" }}>
      <h1>Home</h1>
    </Container>
  </>
)

export default IndexPage
