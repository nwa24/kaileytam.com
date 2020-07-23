import React from "react"
import Navbar from "../components/navbar/Navbar"
import styled from "styled-components"
import HeadShot from "../images/headshot2.jpeg"
import Avatar from "../images/kailey-avatar.png"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, Image } from "react-bootstrap"
import ContactForm from "../components/contact/ContactForm"
import Helmet from "react-helmet"
import { Row as Row1, Col as Col1 } from "antd"

const DescriptionHeader = styled.h1`
  font-family: "Montserrat Medium";
  color: #2c422f;
  font-size: 30px;
  float: left;
  position: relative;
`

const DescriptionText = styled.p`
  font-family: "Avenir Light";
  font-size: 18px;
  color: #000000;
  margin-top: 25px;
`

const HeadShotCol = styled(Col)`
  @media (min-width: 770px) {
    height: 200px;
  }
`

// Row = 12 cols or 100%
const contact = () => {
  return (
    <>
      <Helmet>
        <title>Kailey Tam - Contact</title>
      </Helmet>
      <Navbar />
      <Container
        fluid
        style={{
          backgroundColor: "#f6debc",
          paddingTop: "50px",
        }}
      >
        <Row style={{ height: "1200px" }}>
          <HeadShotCol lg={{ span: 5, offset: 1 }} style={{ padding: "0px" }}>
            <div style={{ width: "auto", height: "auto" }}>
              <Image
                src={HeadShot}
                alt="headshot"
                className="img-responsive"
                fluid
                rounded
              />
            </div>
          </HeadShotCol>
          <Col lg={{ span: 6 }} style={{ paddingLeft: "50px" }}>
            <Row>
              <Col lg={{ span: 6 }}>
                <DescriptionHeader>Hi friends,</DescriptionHeader>
              </Col>
              <Col lg={{ span: 6 }}>
                <Image src={Avatar} alt="avatar" fluid />
              </Col>
            </Row>
            <Row>
              <Col lg={{ span: 8 }}>
                <DescriptionText>
                  My name is Kailey and welcome to my blog. I write poetry and
                  occasionally copywrite for other people. On this blog, you’ll
                  find line-by-line analyses of my poems, the behind-the-scenes
                  look at the making of on the way home, as well as the sporadic
                  journal entry. What began as a fun project in the midst of
                  quarantine season became a legitimate poetry chapbook,
                  copyright and all. I’m so excited for you to see not only my
                  work, but the process behind it. Thank you for all your
                  support and enjoy!
                </DescriptionText>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row></Row>
        <Row1 justify="center" style={{ paddingBottom: "10px" }}>
          <Col1>
            <h1 className="contact-form-header">Get In Touch</h1>
          </Col1>
        </Row1>
        <Row style={{ paddingBottom: "20px" }}>
          <Col>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default contact
