import { useStaticQuery, graphql } from 'gatsby';
import React, { createContext, useContext } from 'react';

const ProductContext = createContext();

/**
 * Wrapper to give Provider access to Gatsby's GraphQL store
 */
function ProductProvider({ children }) {
  const data = useStaticQuery(productQueryAndPricesQuery);
  const products = processGatsbyData(data);

  return (
    <ProductContext.Provider
      value={{
        products,
        listProducts: (sortFn) => {
          const fn = sortFn || ((a, b) => b.created - a.created);
          return Object.values(products).sort(fn);
        },
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function processGatsbyData(data) {
  const prices = {};
  const products = {};

  data.allStripePrice.edges.forEach((edge) => {
    const price = edge.node;
    const productId = price.product.id;
    prices[productId] = price;
  });

  data.allStripeProduct.edges.forEach((edge) => {
    const product = edge.node;
    const productId = product.id;
    products[productId] = product;
  });

  const productsAndPrices = products;

  Object.keys(productsAndPrices).forEach((key) => {
    const productId = productsAndPrices[key].id;
    if (prices.hasOwnProperty(productId)) {
      productsAndPrices[key]['price'] = prices[productId];
    }
  });

  return productsAndPrices;
}

function useProductContext() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
}

export const priceFragment = graphql`
  fragment Price on StripePrice {
    active
    currency
    id
    unit_amount
    fields {
      slug
    }
    product {
      id
    }
  }
`;

export const productFragment = graphql`
  fragment Product on StripeProduct {
    description
    id
    name
    created
    active
    localFiles {
      childImageSharp {
        fluid(maxWidth: 500, quality: 92) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

const productQueryAndPricesQuery = graphql`
  query productQueryAndPricesQuery {
    allStripeProduct {
      edges {
        node {
          ...Product
        }
      }
    }
    allStripePrice {
      edges {
        node {
          ...Price
        }
      }
    }
  }
`;

export { ProductProvider, useProductContext };
