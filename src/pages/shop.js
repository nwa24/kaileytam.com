import React from "react"
import Navbar from "../components/navbar/Navbar"
import { Container } from "react-bootstrap"

const shop = () => {
  return (
    <>
      <Navbar />
      <Container fluid style={{ backgroundColor: "#f6debc" }}>
        <h1>Shop</h1>
      </Container>
    </>
  )
}

export default shop
