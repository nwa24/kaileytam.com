import React from "react"
import Navbar from "../components/navbar/Navbar"
import { graphql, navigate } from "gatsby"
import Helmet from "react-helmet"
import { Row, Col } from "antd"
import Img from "gatsby-image"

const blog = ({ data }) => {
  console.log(data)
  return (
    <>
      <Helmet>
        <title>Kailey Tam - Blog</title>
      </Helmet>
      <Navbar />
      <Row>{renderBlogs(data.allMarkdownRemark.edges)}</Row>
    </>
  )

  function renderBlogs(posts) {
    return posts.map(item => {
      const { slug } = item.node.fields
      const { title, date, featuredImage } = item.node.frontmatter
      return (
        <Col>
          <div onClick={() => navigate(`/blog/${slug}`)}>
            <h4>{title}</h4>
            <p>{date}</p>
            {featuredImage && (
              <Img fixed={featuredImage.childImageSharp.fixed} />
            )}
          </div>
        </Col>
      )
    })
  }
}

export default blog

export const blogQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            featuredImage {
              childImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
