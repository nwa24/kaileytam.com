import React from "react"
import Navbar from "../components/navbar/Navbar"
import { Container } from "react-bootstrap"

const blog = () => {
  return (
    <>
      <Navbar />
      <Container fluid style={{ backgroundColor: "#f6debc" }}>
        <h1>Blog</h1>
      </Container>
    </>
  )
}

export default blog
