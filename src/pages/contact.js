import React from "react"
import Navbar from "../components/navbar/Navbar"
import styled from "styled-components"
import HeadShot from "../images/headshot2.jpeg"

const DescriptionHeader = styled.h1`
  font-family: "Montserrat Medium";
  color: #2c422f;
  font-size: 30px;
`

const DescriptionText = styled.p`
  font-family: "Avenir Light";
  font-size: 18px;
  color: #000000;
`

const ImagePlaceholder = styled.div`
  position: absolute;
  left: 12vw;
  margin-top: 80px;

  img {
    max-width: 500px;
    width: auto;
    height: auto;
  }
`

const Description = styled.div`
  position: absolute;
  left: 50vw;
  margin-top: 100px;
  right: 12vw;
`

const LineBreak = styled.hr`
  margin-top: 95vh;
  margin-left: 30vw;
  margin-right: 30vw;
  border-width: 1px;
`

const contact = () => {
  return (
    <>
      <Navbar />
      <ImagePlaceholder>
        <img src={HeadShot} alt="headshot" />
      </ImagePlaceholder>
      <Description>
        <DescriptionHeader>Hi friends,</DescriptionHeader>
        <DescriptionText>
          My name is Kailey and welcome to my blog. I write poetry and
          occasionally copywrite for other people. On this blog, you’ll find
          line-by-line analyses of my poems, the behind-the-scenes look at the
          making of on the way home, as well as the sporadic journal entry. What
          began as a fun project in the midst of quarantine season became a
          legitimate poetry chapbook, copyright and all. I’m so excited for you
          to see not only my work, but the process behind it. Thank you for all
          your support and enjoy!
        </DescriptionText>
      </Description>
      <LineBreak />
    </>
  )
}

export default contact
