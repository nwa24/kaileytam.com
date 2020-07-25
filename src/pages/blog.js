import React from "react"
import Navbar from "../components/navbar/Navbar"
import { graphql, navigate } from "gatsby"
import Helmet from "react-helmet"
import { Row, Col } from "antd"
import Img from "gatsby-image"
import { node } from "prop-types"
import moment from "moment"

const blog = ({ data }) => {
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
    // 1. Format the date so they are all in the format MM dd, YYYY
    posts.forEach(post => {
      // Need to add a day, the date stamp is always off by one day (Need to do some more investigation into this issue)
      let formattedDate = moment(post.node.frontmatter.date)
        .add(1, "day")
        .format("MMM D, YYYY")
      post.node.frontmatter.date = formattedDate
    })

    // 2. Sort the posts by date so the latest is shown first
    let sortedPosts = posts.sort((a, b) => {
      return moment(a.node.frontmatter.date).diff(b.node.frontmatter.date)
    })

    return sortedPosts.map(item => {
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
