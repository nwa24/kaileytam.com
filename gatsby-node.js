/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  let parentNode = getNode(node.parent)
  if (node.internal.type === "MarkdownRemark") {
    if (parentNode.sourceInstanceName === "blogs") {
      let slug = createFilePath({ node, getNode })
      slug = slug.replace(/\//g, "")
      actions.createNodeField({ node, name: "slug", value: slug })
    }
  }
}
