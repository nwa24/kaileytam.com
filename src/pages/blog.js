import React from "react"
import Navbar from "../components/navbar/Navbar"
import { graphql, navigate } from "gatsby"
import Helmet from "react-helmet"
import { Row, Col } from "antd"
import moment from "moment"
import BackgroundImage from "gatsby-background-image"
import LineBreak from "../components/LineBreak"
import Footer from "../components/footer"

const blog = ({ data }) => {
  return (
    <div>
      <Helmet>
        <style>
          {"body { background-color: #f7f3e9; overflow-x: hidden }"}
        </style>
        <title>Kailey Tam - Blog</title>
      </Helmet>
      <Navbar />
      <div
        style={{
          paddingTop: "100px",
        }}
      >
        <Row gutter={[0, 48]}>{renderBlogs(data.allMarkdownRemark.edges)}</Row>
      </div>
      <Footer />
    </div>
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
      return moment(b.node.frontmatter.date).diff(a.node.frontmatter.date)
    })

    return sortedPosts.map(item => {
      const { slug } = item.node.fields
      const { title, date, featuredImage } = item.node.frontmatter
      return (
        <Col offset={2} lg={6} md={16} xs={24}>
          {featuredImage ? (
            <BackgroundImage
              fluid={featuredImage.childImageSharp.fixed}
              style={{
                height: "250px",
                width: "250px",
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
                  fontSize: "25px",
                  textAlign: "center",
                  paddingLeft: "15px",
                  paddingRight: "15px",
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
                height: "250px",
                width: "250px",
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
                  fontSize: "25px",
                  textAlign: "center",
                  paddingLeft: "15px",
                  paddingRight: "15px",
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
