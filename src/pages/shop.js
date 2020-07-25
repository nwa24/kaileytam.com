import React from "react"
import Navbar from "../components/navbar/Navbar"
import { Container } from "react-bootstrap"
import Helmet from "react-helmet"

const shop = () => {
  return (
    <>
      <Helmet>
        <style>{"body { background-color: #f6debc }"}</style>
        <title>Kailey Tam - Shop</title>
      </Helmet>
      <Navbar />
      <Container fluid style={{ backgroundColor: "#f6debc" }}>
        <h1>Shop</h1>
      </Container>
    </>
  )
}

export default shop
