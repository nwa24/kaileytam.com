import React from "react"
import { Carousel } from "react-bootstrap"
import "./image-carousel.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

import banner1 from "../../images/intro-banner-high-res.jpg"
import banner2 from "../../images/order-banner-high-res.jpg"
import banner3 from "../../images/blog-banner-high-res.jpg"
import { StaticQuery, graphql, navigate } from "gatsby"

// 1200 x 480
const ImageCarousel = ({ data }) => {
  const slug = data.allMarkdownRemark.nodes[0].fields.slug
  const nextIcon = <FontAwesomeIcon icon={faChevronRight} />
  const prevIcon = <FontAwesomeIcon icon={faChevronLeft} />
  return (
    <>
      <Carousel nextIcon={nextIcon} prevIcon={prevIcon}>
        <Carousel.Item>
          <img
            className="image-carousel"
            style={{ width: "1000px", height: "400px" }}
            src={banner1}
            alt="intro"
          />
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.kaileytam.com/contact">
            <img
              className="image-carousel"
              style={{ width: "1000px", height: "400px" }}
              src={banner2}
              alt="order"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image-carousel"
            style={{ width: "1000px", height: "400px" }}
            src={banner3}
            alt="latest-blog"
            onClick={() => navigate(`/blog/${slug}`)}
          />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

const ImageCarouselWithQuery = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1
          ) {
            nodes {
              fields {
                slug
              }
            }
          }
        }
      `}
      render={data => <ImageCarousel data={data} />}
    />
  )
}

export default ImageCarouselWithQuery
