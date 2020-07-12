import React from "react"
import Navbar from "../components/navbar/Navbar"
import { Container } from "react-bootstrap"
import Helmet from "react-helmet"

const blog = () => {
  return (
    <>
      <Helmet>
        <title>Kailey Tam - Blog</title>
      </Helmet>
      <Navbar />
      <Container fluid style={{ backgroundColor: "#f6debc" }}>
        <h1>Blog</h1>
      </Container>
    </>
  )
}

export default blog
