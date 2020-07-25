import React from "react"
import Navbar from "../components/navbar/Navbar"
import { graphql, navigate } from "gatsby"
import Helmet from "react-helmet"
import { Row, Col } from "antd"
import moment from "moment"
import BackgroundImage from "gatsby-background-image"
import LineBreak from "../components/LineBreak"

const blog = ({ data }) => {
  return (
    <>
      <Helmet>
        <style>{"body { background-color: #f6debc }"}</style>
        <title>Kailey Tam - Blog</title>
      </Helmet>
      <Navbar />
      <div
        style={{
          paddingLeft: "200px",
          paddingRight: "200px",
          paddingTop: "60px",
        }}
      >
        <Row gutter={[16, 48]}>{renderBlogs(data.allMarkdownRemark.edges)}</Row>
      </div>
    </>
  )

  function renderBlogs(posts) {
    // 1. Format the date so they are all in the format MM dd, YYYY
    posts.forEach(post => {
      // Need to add a day, the date stamp is always off by one day (Need to do some more investigation into this issue)
      let formattedDate = moment
        .utc(post.node.frontmatter.date)
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
        <Col span={8}>
          {featuredImage ? (
            <BackgroundImage
              fluid={featuredImage.childImageSharp.fixed}
              style={{
                height: "300px",
                width: "300px",
                display: "table-cell",
                verticalAlign: "middle",
                opacity: "0.5 !important",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate(`/blog/${slug}`)
              }}
            >
              <p
                style={{
                  textTransform: "uppercase",
                  color: "white",
                  fontFamily: "Montserrat Semibold",
                  letterSpacing: "2px",
                  fontSize: "30px",
                  textAlign: "center",
                }}
              >
                {title}
              </p>
              <LineBreak width="60px" colour="white" />
              <p
                style={{
                  textTransform: "uppercase",
                  color: "white",
                  fontFamily: "Montserrat Semibold",
                  letterSpacing: "2px",
                  textAlign: "center",
                }}
              >
                {date}
              </p>
            </BackgroundImage>
          ) : (
            <div
              style={{
                height: "300px",
                width: "300px",
                backgroundColor: "#97af97",
                display: "table-cell",
                verticalAlign: "middle",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate(`/blog/${slug}`)
              }}
            >
              <p
                style={{
                  textTransform: "uppercase",
                  color: "white",
                  fontFamily: "Montserrat Semibold",
                  letterSpacing: "2px",
                  fontSize: "30px",
                  textAlign: "center",
                }}
              >
                {title}
              </p>
              <LineBreak width="60px" colour="white" />
              <p
                style={{
                  textTransform: "uppercase",
                  color: "white",
                  fontFamily: "Montserrat Semibold",
                  letterSpacing: "2px",
                  textAlign: "center",
                }}
              >
                {date}
              </p>
            </div>
          )}
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
                fixed(quality: 100, width: 300) {
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
