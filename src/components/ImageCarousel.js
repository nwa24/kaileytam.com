import React from "react"
import { Carousel } from "react-bootstrap"

import banner1 from "../images/intro-banner.jpg"
import banner2 from "../images/order-banner.jpg"

// 1200 x 480
const ImageCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={banner1} alt="intro" />
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.kaileytam.com/contact">
            <img src={banner2} alt="order" />
          </a>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default ImageCarousel
