import React from "react"
import { Carousel } from "react-bootstrap"

import testimage from "../images/coming-soon.png"

// 1200 x 480
const ImageCarousel = () => {
  return (
    <>
      <Carousel>
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
