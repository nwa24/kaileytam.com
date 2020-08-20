/**
 * Implement Gatsby's Node APIs in thccccis file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const path = require('path');
const slug = require('slug');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  let parentNode = getNode(node.parent);
  fmImagesToRelative(node);

  if (node.internal.type === 'MarkdownRemark') {
    if (parentNode.sourceInstanceName === 'markdown-pages') {
      let filePath = createFilePath({ node, getNode });
      filePath = filePath.replace(/\//g, '');
      createNodeField({ node, name: 'slug', value: filePath });
    }
  } else if (node.internal.type === 'StripePrice') {
    const value = slug(node.product.name, slug.defaults.modes['rfc3986']);
    createNodeField({
      node,
      name: 'slug',
      value: value,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  // You could keep the GQL Query in here - I prefer to separate
  const { data } = await getPageData(graphql);

  data.blogPosts.edges.forEach(({ node }) => {
    const { slug } = node.fields;
    actions.createPage({
      path: `/blog/${slug}`,
      component: path.resolve('./src/templates/blog-post-template.js'),
      context: { slug: slug },
    });
  });

  data.products.edges.forEach(({ node }) => {
    const { slug } = node.fields;
    const { id } = node.product;
    actions.createPage({
      path: `/buy/${slug}`,
      component: path.resolve('./src/templates/product-template.js'),
      context: { id },
    });
  });
};

async function getPageData(graphql) {
  return await graphql(`
    {
      blogPosts: allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      products: allStripePrice {
        edges {
          node {
            fields {
              slug
            }
            product {
              id
              name
            }
          }
        }
      }
    }
  `);
}
