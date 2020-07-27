import React from "react"
import { Carousel } from "react-bootstrap"
import "./image-carousel.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

import banner1 from "../../images/intro-banner.jpg"
import banner2 from "../../images/order-banner.jpg"
import banner3 from "../../images/blog-banner.jpg"

// 1200 x 480
const ImageCarousel = () => {
  const nextIcon = <FontAwesomeIcon icon={faChevronRight} />
  const prevIcon = <FontAwesomeIcon icon={faChevronLeft} />
  return (
    <>
      <Carousel nextIcon={nextIcon} prevIcon={prevIcon}>
        <Carousel.Item>
          <img style={{ maxWidth: "100%" }} src={banner1} alt="intro" />
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.kaileytam.com/contact">
            <img style={{ maxWidth: "100%" }} src={banner2} alt="order" />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ maxWidth: "100%" }} src={banner3} alt="latest-blog" />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default ImageCarousel
