import React from "react"
import { Carousel } from "react-bootstrap"

import testimage from "../images/coming-soon.png"

// 1200 x 480
const ImageCarousel = () => {
  return (
    <>
      <Carousel
        style={{
          width: "1200px",
          height: "480px",
          position: "fixed",
          left: "50%",
          top: "15vh",
          transform: "translate(-50%)",
        }}
      >
        <Carousel.Item>
          <img src={testimage} alt="slide1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={testimage} alt="slide2" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={testimage} alt="slide3" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={testimage} alt="slide4" />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default ImageCarousel
